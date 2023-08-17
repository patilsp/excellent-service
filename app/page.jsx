"use client";

import Feed from "@components/Feed"
import { motion } from "framer-motion"

const Home = () => (
  <motion.div
    animate={{ opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 0.8 }}
    transition={{ ease: "easeOut" }}
  >
  <section className='w-full flex-center flex-col'>
  
        <div className='flex justify-center mb-2'>
            <h1 class="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">Coming Soon!
                Stay tuned for our launch !
            </h1>
        </div>
        <div className='flex justify-center'>
            <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400"> Exciting Changes Ahead! Our website is currently under construction, and we're working hard to bring you a brand new experience. Stay tuned for our upcoming launch and get ready for something amazing!  </p>
        </div>
           
        
    {/* <Feed /> */}
  </section>
  </motion.div>
);

export default Home;
