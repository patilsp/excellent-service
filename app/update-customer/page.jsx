"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Customer-Form";

const UpdateCustomer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const customerId = searchParams.get("id");

  const [post, setPost] = useState({ customer: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getCustomerDetails = async () => {
      const response = await fetch(`/api/customer/${customerId}`);
      const data = await response.json();

      setPost({
        customer: data.customer,
      });
    };

    if (customerId) getCustomerDetails();
  }, [customerId]);

  const updateCustomer= async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!customerId) return alert("Missing Customer Id!");

    try {
      const response = await fetch(`/api/customer/${customerId}`, {
        method: "PATCH",
        body: JSON.stringify({
          customer: post.customer,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateCustomer}
    />
  );
};

export default UpdateCustomer;
