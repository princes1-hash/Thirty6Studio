import React, { useState } from 'react'
import "./index.css"
import Canvas from './Canvas'
import Data from './Data'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect,useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';





const App = () => {
   
    const AnimationRef1=useRef(null);
    const AnimationRef2=useRef(null);
    const AnimationRef3=useRef(null);
    const scrollRef = useRef(null);
    const [ShowAnimation, SetAnimation]=useState(false);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });

    return () => {
      locoScroll.destroy();
    };
  }, []);

 function ChangeBg(e) {
  SetAnimation(prev => !prev);
  gsap.set(".growl", {
    x: e.clientX,
    y: e.clientY,
    xPercent: -50, // Centers the circle on the cursor
    yPercent: -50
  });
}

useGSAP(()=>{
  if(ShowAnimation){
  gsap.to([AnimationRef1.current, AnimationRef2.current,AnimationRef3.current],{
    display:"block",
    opacity:1,
   duration:0.5
  })
  gsap.to(".growl",{
    scale:100,
    opacity:1,
   duration:0.5
  })
}
else{
gsap.to([AnimationRef1.current ,AnimationRef2.current,AnimationRef3.current],{
    display:"none",
    opacity:0,
    duration:0.5
  
  })
  gsap.to(".growl",{
    scale:0,
    opacity:0,
   duration:0.5
  })
}
},[ShowAnimation])

 
 
 
 
 
  return (
    <>
<span className="growl z-1 absolute top-0 left-0 w-[2vw] h-[2vw] bg-[#f11414] rounded-full pointer-events-none"></span>


  <div ref={scrollRef} className='min-h-screen overflow-hidden w-screen relative '>

   <div className='relative'>
    <div className='hero   h-screen overflow-hidden relative w-full'>
    <div ref={AnimationRef1} className='hidden' >
        {Data[0].map((details, Index) =>(

      <Canvas key={Index}
        
            startIndex={details.startIndex}
            duration={details.duration}
            size={details.size}
            top={details.top}
            left={details.left}
            zIndex={details.zIndex}
      />
    )
  )}
    </div>
  <div className='nav flex gap-[50vw] px-[1vw] py-[1vw] w-full'>

<div className='z-1'>
   <h2 className='text-[1.2vw]'>ThirtySixstudio</h2>
</div>
 <div className='z-1 flex gap-[4vw]'>
  <h2>What we do</h2>
 <h2>Who we are</h2>
 <h2>How we give back</h2>
 <h2>Talk to us</h2>
 </div>

  </div>
  <div className='  w-full'>
    <div className=' flex mt-[5vw] gap-[14vw]'>
      <div className='z-1 w-[30%] mt-[3vw] ml-[15%] ' >
      <h1 className='text-[2.5vw] w-full h-[11vw] leading-none  '>
      At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.
    </h1>
     <h3 className='text-[1.18vw]  h-[5vw] mt-[2vw] w-full leading-none'>We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns</h3>
      <h3 className='mt-[2vw]'>Scroll</h3>
   
    </div>
    <div className='z-1 relative w-[30vw]  h-[37vw] '>
      <img src="./img4.png" alt="" />
    </div>
    </div>
  
  </div>
  </div>
  <div className=' hero relative overflow-hidden  h-screen  w-full'>
     <div ref={AnimationRef2} className='hidden' >
       {Data[1].map((details, Index) =>(

      <Canvas key={Index}
        
            startIndex={details.startIndex}
            duration={details.duration}
            size={details.size}
            top={details.top}
            left={details.left}
            zIndex={details.zIndex}
      />
    )
  )}
     </div>
  <div onClick={ChangeBg} className=' z-1 relative px-1 w-full text-[15.5vw] cursor-pointer '>
      <h1 className=' pointer-events-none leading-none overflow-hidden '>Thirtysixstudio</h1>
    </div>
    <div className='flex gap-[20vw]  mt-[12vw]'>
      <h2 className='ml-[20vw] z-1 text-[2vw] mt-[5vw]' >WHAT WE DO</h2>
     <h1 className=' w-[30vw] z-1 h-[18vw] leading-none text-[3vw]'>We aim to elevate digital production in the advertising space, bringing your ideas to life.</h1>
    
    </div>

  </div>
  <div className=' hero relative overflow-hidden  h-screen  w-full'>
     <div ref={AnimationRef3} className='hidden' >
       {Data[2].map((details, Index) =>(

      <Canvas key={Index}
        
            startIndex={details.startIndex}
            duration={details.duration}
            size={details.size}
            top={details.top}
            left={details.left}
            zIndex={details.zIndex}
      />
    )
  )}
     </div>
 <div className='flex  h-[12vw] w-[30%] flex-col ml-[52.5%] '>
  <h2 className='leading-none z-1 h-[5vw]'>As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver current digital work.</h2>
  <h2 className='leading-none z-1 h-[5vw]' >Our commitment to innovation and simplicity, paired with our agile approach, ensures your journey with us is smooth and enjoyable from start to finish.</h2>
 </div>
 <div className='flex mt-[3vw] flex-col  ' >
  <h2 className='text-[2vw] z-1 ml-[20vw]'>OUR SERVICES</h2>
  <div className='text-[2.5vw] z-1 leading-0.8 w-fit ml-[20vw] mt-[5vw] '>
  <h2 className='serviceText'>We provide you with captivating design, interactive</h2>
  <h2 className='serviceText'>animations, reliable code, and immaculate project</h2>
  <h2 className='serviceText' >coordination. Whether you need a campaign built</h2>
  <h2 className='serviceText'>from scratch or assistance at aspecific phase, we’ve</h2>
  <h2 className='serviceText'>got you covered.</h2>
  </div>
 </div>
   

  </div>
  </div>
  </div>




    </>
  )
}

export default App

