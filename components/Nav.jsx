"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle"

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className='flex items-center justify-between w-full'>
      <div className='sm:flex relative'>
      {session?.user ? (

        <div className='flex gap-2'>
          <ModeToggle />

          <Image
            src="assets/images/bell.svg"
            width={25}
            height={25}
            className='notification_btn'
            alt='notification'
            onClick={() => setNotificationDropdown(!notificationDropdown)}
          />

        {notificationDropdown && (
          <motion.div
            initial={{
              opacity: 0.6,
              translateY: 8,
              scaleX: 0.8,
              scaleY: 0.6,
            }}
            animate={{ opacity: 1, translateY: 0, scaleX: 1, scaleY: 1 }}
            exit={{ opacity: 0.6, translateY: 8, scaleX: 0.8, scaleY: 0.6 }}
            >
              <div className="absolute right-0 mr-14 z-10 mt-10 w-60 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <h3 className="p-2">Notification Not available!</h3>
              </div>
              </motion.div>
          )}

          <Image
            src={session?.user.image}
            width={35}
            height={25}
            className='rounded-full'
            alt='profile'
            onClick={() => setToggleDropdown(!toggleDropdown)}
          />

          {toggleDropdown && (
          <motion.div
            initial={{
              opacity: 0.6,
              translateY: 8,
              scaleX: 0.8,
              scaleY: 0.6,
            }}
            animate={{ opacity: 1, translateY: 0, scaleX: 1, scaleY: 1 }}
            exit={{ opacity: 0.6, translateY: 8, scaleX: 0.8, scaleY: 0.6 }}
            >
              <div className="absolute right-0 z-10 mt-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="none">
                <Link href='/create-prompt' className="text-gray-700 block px-4 py-2 text-sm">
                    Create Prompt
                </Link>
                  
                  <a className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
                      <Link
                    href='/'
                    className='dropdown_link'
                    onClick={() => setToggleDropdown(false)}
                  >
                    Dashboard
                  </Link>
                  </a>
                  <a className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">
                      <Link
                    href='/profile'
                    className='dropdown_link'
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  </a>
                  <a className="text-gray-700 block px-4 py-2 text-sm dropdown_link" role="menuitem" tabindex="-1" id="menu-item-2">Settings</a>
                  <hr className="mt-2 mb-2" />
                  <button
                    type='button'
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className='text-gray-700 block px-4 py-2 text-sm dropdown_link'
                  >
                    Sign Out
                  </button>
                </div>
              </div>
              </motion.div>
          )}
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                className='black_btn'
              >
                Sign in
              </button>
            ))}
        </>
      )}
    </div>
  
    </nav>
  );
};

export default Nav;
