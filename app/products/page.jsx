import React from 'react'
import Image from "next/image"

const page = () => {
  return (
    <div>
        <div className='flex justify-center mb-2'>
            <h1 class="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">Coming Soon!
                Stay tuned for our launch !
            </h1>
        </div>
        <div className='flex justify-center'>
            <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400"> Exciting Changes Ahead! Our website is currently under construction, and we're working hard to bring you a brand new experience. Stay tuned for our upcoming launch and get ready for something amazing!  </p>
        </div>
        <div className='flex justify-center'>
            
            <Image
                src="/assets/images/website-maintenance.svg"
                width={400}
                height={400}
                className='image-responsive'
                alt='image'
            
            />
        </div>
    </div>
  )
}

export default page


