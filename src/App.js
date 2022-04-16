import { useState,useRef } from 'react';
import ScrollToTop from "react-scroll-to-top"
import './App.css';
import Navbar from './Components/navabar/Navbar';
import Section from './Components/section/Section';
import Works from './Components/works/Works';

function App() {
  const body = useRef()
  const [loading,setloading] = useState(true)
  const container = document.querySelector('.center')
  if(container){
    setTimeout(()=>{
        container.style.display = "none"
        setloading(false)
    },3000 )
  }
  return (
   !loading &&(
    <div className="App" ref={body}>
    
    <ScrollToTop smooth="true" color='#0A192F' top={800}   style={{display: 'flex', flexDirection: 'column' , justifyContent:'center', alignItems:'center' , borderRadius:'50%',width:"50px", height:'50px'}} />
    <Navbar body={body} />
    <Section />
    <Works />
    </div>
   ) 
  );
}

export default App;
