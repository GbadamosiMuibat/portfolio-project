import React from 'react';
import './Home.css';
import { BiHome } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import {BiLaptop} from "react-icons/bi";
import {BiBriefcase} from "react-icons/bi";
import {BiEnvelopeOpen} from "react-icons/bi";



function Home() {
  return (
    <div className='home'>
       <div className='header'>
         <div className='header-icon'><BiHome /></div>
         <div className='header-icon'><BiUser /></div>
         <div className='header-icon'><BiLaptop /></div>
         <div className='header-icon'><BiBriefcase /></div>
         <div className='header-icon'><BiEnvelopeOpen /></div> 
       </div>
       <div className='home-text'>
         <h1 className='name'> Hello,I'm Gbadamosi Muibat. A Frontend Developer</h1>
         <p> </p>
       </div>
    </div>
  )
}

export default Home