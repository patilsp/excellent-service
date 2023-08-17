"use client";
import React from 'react';
import Lottie from"lottie-react";
import animationData from "/app/animations/loader.json";

export default function loading() {
  return (
    <div>
         <div className="h-full text-center"> 
            <Lottie animationData={animationData} />                
          </div>
    </div>
  )
}
