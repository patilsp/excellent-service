"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Form from "@components/Customer-Form";

const CreateCustomer = () => {
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ firstname: "" , lastname: "" , email: "" });

  const createCustomer = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/customer/new", {
        method: "POST",
        body: JSON.stringify({
          firstname: post.firstname,
          lastname: post.lastname,
          email: post.email,
          userId: session?.user.id,
        }),
      });

      if (response.ok) {
        toast.success("Customers has been created! 🔥");
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
      handleSubmit={createCustomer}
    />
  );
};

export default CreateCustomer;
