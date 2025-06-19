import React from 'react';
import { Navbar, Hero, Experience } from "./components";


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"> 
      <div className="fixed top-0 -z-10 h-full w-full">
        



<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(200%_170%_at_50%_10%,#38A2D7_20%,#4F69C6_40%,#6C5CE7_60%,#7A288A_80%,#561139_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Experience />
      </div>
    </div>
  );
};

export default App;