import React from "react"; 
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import './Section.css'
const Section = () =>{
  useEffect(()=>{
    AOS.init();
  })
  return(
    <div className="sec">

    
    <div className="section" data-aos="zoom-out-down" data-aos-duration="1500" data-aos-once="true">
        <p   className="intro" >Hi, My Name Is Daniel</p>
        <h1  >I'm  a Front <br /> End developer.</h1>
        <p className="speech">
          I create , interactive and resposive websites, using <br /> HTML5,CSS, Bootstrap, javascript , React JS
        </p>
        <a href="#works"><button >See My Works </button></a>
        
        {/* <p className="move">:)</p> */}
    </div>
    <div className="secondsection" data-aos="zoom-in-down">
      <div className="box" id="box1"></div>
      <div className="box" id="box2"></div>
      <div className="box" id="box3"></div>
      <div className="box" id="box4"></div>
    </div>
    </div>
  )
}

export default Section