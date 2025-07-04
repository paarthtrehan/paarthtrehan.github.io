import React from 'react';
import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/images/headshot.png"


const Hero = () => {
   return (
       <div className="border-b border-neutral-900 pb-4 lg:mb-35">
           <div className="flex flex-wrap">
               <div className="w-full lg:w-1/2">
                   <div className="flex flex-col items-center lg:items-start">
                       <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                           Paarth Trehan
                       </h1>
                       <span className="text-4xl tracking-tight">
                           Honors Computer Science Student at Northeastern University
                       </span>
                       <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                           { HERO_CONTENT }
                       </p>
                   </div>
               </div>
               <div className="w-10 h-10 lg:w-1/2 lg:h-1/2">
                   <div className="flex justify-end">
                       <img src={ profilePic } alt="Paarth Trehan" className="w-1/2 h-1/2 lg:w-3/4 lg:h-3/4"/>
                   </div>
               </div>
           </div>
       </div>
   );
};


export default Hero;