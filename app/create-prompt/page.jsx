"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Form from "@/components/Form";

const CreatePrompt = () => {
  
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ firstname: "", lastname: "", email: "", address:"", phoneno: "", state:"", city: "", pincode: "", dateofbirth:"", tag: "", });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          tag: post.tag,
          firstname: post.firstname, 
          lastname: post.lastname, 
          email: post.email, 
          phoneno: post.phoneno, 
          state:post.state,
          city: post.city,
          dateofbirth:post.dateofbirth,
          address:post.address,

        }),
      });

      if (response.ok) {
        toast.success("Customer has been created! 🔥");
        router.push("/");
      }
    } catch (error) {
      // console.log(error);
      toast.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
