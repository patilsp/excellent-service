"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSession, signIn, getProviders } from "next-auth/react";
import Feed from "@components/Feed";
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
        <div className="max-w-3xl mx-auto">
          {session?.user ? (
            <div className="flex justify-center">
              <Feed />
            </div>
          ) : (
            <div className={cn("grid gap-6")}>
 
              <div className="w-full">
                <div className="relative bg-white w-full h-fit py-10 px-2 mt-4 mb-4 rounded-lg">
                  <div className="flex justify-center">
                  <div className="hidden lg:block">
                      <Image
                        src="/assets/images/coming-soon.png"
                        width={525}
                        height={525}
                        className='image-responsive mt-5'
                        alt='image'
                        
                      />
                    </div>

                    <div className="lg:p-8 p-4 mt-10">
                      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                          <h1 className="text-2xl font-semibold tracking-tight">
                            Create an account
                          </h1>
                          <p className="text-sm text-muted-foreground">
                            Enter your email below to create your account
                          </p>
                        </div>


                          <div className="grid gap-2">
                            <div className="grid gap-1">
                              <Label className="sr-only" htmlFor="email">
                                Email
                              </Label>
                              <Input
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                              />
                            </div>
                            <Button onClick={() => signIn("email")}>
                              Sign In with Email
                            </Button>
                          </div>
                          <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                              <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                              <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                              </span>
                            </div>
                          </div>
                          {providers &&
                              Object.values(providers).map((provider) => (
                                <button
                                  key={provider.name}
                                  onClick={() => {
                                    signIn(provider.id);
                                  }}
                                  className="black_btn my-2 w-full"
                                >
                                  Sign in with {provider.name}
                                </button>
                              ))}

                        </div>
                      </div>
                    </div>
                  </div>

                        </div>
                    </div>
                  )}
                </div>

      </section>
    </motion.div>
  );
}
