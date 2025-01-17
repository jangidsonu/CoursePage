import React, { useState } from 'react';
import "./Topics.css";
import {frequencies, daw , vocalsProcessing, mixing, mixingConsole,mastering,bgElement1  } from "../../assets/Index";

const Topics = () => {
    const [currentImage, setCurrentImage] = useState(frequencies);
  return (
   <section id='topics' className='black'>
    <div className='wrapper'>
        <h2>what will you learn</h2>
        <div className='content-container'>
            <ul className='topics-list'>
                <li onMouseEnter={()=> setCurrentImage(frequencies)}>What are frequencies</li>
                <li onMouseEnter={()=> setCurrentImage(daw)}>Using Daw</li>
                <li onMouseEnter={()=> setCurrentImage(vocalsProcessing)}>Vocals Processing </li>
                <li onMouseEnter={()=> setCurrentImage(mixing)}>Mixing</li>
                <li onMouseEnter={()=> setCurrentImage(mixingConsole)}>Mixing Console</li>
                <li onMouseEnter={()=> setCurrentImage(mastering)}>Mastering</li>
            </ul>

            <div className='topic-image'>
                <img src={currentImage}/>
            </div>
        </div>
        <img src={bgElement1} className='bg-element-1'></img>
    </div>

   </section>
  )
}

export default Topics
