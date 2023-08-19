"use client";
import React from 'react';
import Lottie from"lottie-react";
import animationData from "/app/animations/coming-soon.json";

export default function loading() {
  return (
    <div>
         <div className="h-full flex justify-center align-middle text-center"> 
            <Lottie animationData={animationData} />                
          </div>
    </div>
  )
}
