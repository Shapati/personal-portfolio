import React from "react";
import { Divide as Hamburger }from 'hamburger-react'
import { useRef } from "react";
import './Navbar.css'
const Navbar = ({body}) =>{
  const ham = useRef()
  const showham = useRef()


  const hamburger = () =>{
     showham.current.classList.toggle('show')
     body.current.classList.toggle('another')
  }

  return(
    <div className="navbar">
      <div className="firstnav">
          <h1>N</h1>
      </div>
     
     <div className="contain">
     <div className="ham" ref={ham} onClick={()=>hamburger()}>
        <Hamburger  color="white" duration="0.5" />
      </div>
     <div className="secondnav" ref={showham}>
        <a href=""  >About</a>
        <a href='#works' onClick={()=>hamburger()}>Works</a>
        <a href="">Contact</a>
      </div>
     </div>
     
    </div>
  )
}

export default Navbar