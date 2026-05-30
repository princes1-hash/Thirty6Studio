import React, { useRef } from 'react'
import { useEffect } from 'react'
import CanvasImg from './Components/CanvasImg';
import { useState } from 'react';
import {useGSAP} from "@gsap/react"
import gsap from 'gsap';
import Data from './Data';


const Canvas = ({ startIndex, duration, size, top, left, zIndex }) => {



  const [index,setIndex]=useState({value:startIndex})
    const CanvasRef =useRef(null);
    useGSAP(()=>{
        gsap.to(index,{
            value:startIndex + 149,
            repeat:-1,
            duration:3,
            ease:"linear",
            onUpdate:()=>{
                setIndex({value:Math.round(index.value)})
            }
        })

    })
 useEffect(()=>{
    const canvas= CanvasRef.current;
    const ctx = canvas.getContext("2d");
    const img= new Image();
    img.src=CanvasImg[index.value];
        img.onload =()=>{
            canvas.width= img.width;
            canvas.height= img.height;
            ctx.drawImage(img,0,0);
        }
    
   },[index]) 




  return (
   
      
   <canvas ref={CanvasRef} style={
    {   position:"absolute",
        width:`${size*1.2}px`,
        height:`${size*1.2}px`,
        top:`${top}%`,
        left:`${left}%`,
        zIndex:`${zIndex}`
    }
   }  ></canvas>
   
  )
}

export default Canvas
