import React from 'react'
import'./Works.css'
import short from '../assets/shortlinks.png'

export default function Works() {
  return (
    <div className='works' id='works'>
      <div className="workscontainer">
        <div className="projectbox">
          <div className="project" data-aos="flip-down"  data-aos-once="true">
              <p>A webstie that  integrates with the shrtcode API to create shortened URLs. <br /> This project is built  with html css and javascript <br /> Using asyc js and fetch method </p>

              <a href="https://github.com/Shapati/link-short-w" target="_blank">View Code on Github</a>
          </div>
          <a href="https://shapati.github.io/link-short-w/" target="_blank" className='projectlink'>
          <div className="projectimg1">
            
           
            
          </div>
          </a>
        </div>
        <div className="projectbox">
          <a href="https://shapati.github.io/fiberstarter2/" target='_blank'>
          <div className="projectimg2">

          </div>
          </a>
          <div className="project" data-aos="flip-down"  data-aos-once="true">
              <p>Landing page gotten from codewell, And also a sign up page <br /> With form validation and effects and some DOM<br />This project is built with html css and javascript </p>

              <a href="https://github.com/Shapati/fiberstarter2" target="_blank">View Code on Github</a>
          </div>
        </div>

        <div className="projectbox">
          <div className="project" data-aos="flip-down"  data-aos-once="true">
              <p>A webstie that  integrates with the shrtcode API to create shortened URLs. <br /> This project is built  with html css and javascript <br /> Using asyc js and fetch method </p>

              <a href="https://github.com/Shapati/link-short-w" target="_blank">View Code on Github</a>
          </div>
          <a href="https://shapati.github.io/link-short-w/" target="_blank" className='projectlink'>
          <div className="projectimg3">
            
           
            
          </div>
          </a>
        </div>
        
         
         
      </div>
     
    </div>
  )
}
