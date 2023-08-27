"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSession, signIn, getProviders } from "next-auth/react";
import Feed from "@/components/Feed";
import { SessionProvider } from "next-auth/react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/registry/new-york/ui/button";
import { Input } from "@/registry/new-york/ui/input";
import { Label } from "@/registry/new-york/ui/label";

export default function Home() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ ease: "easeOut" }}
    >
      <section className="w-full h-screen flex-center flex-col p-4">       
        <Feed />
      </section>
    </motion.div>
  );
}