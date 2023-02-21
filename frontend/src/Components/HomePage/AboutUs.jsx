import React from 'react'
import '../../Styles/About.css'
import { BsArrowRight } from "react-icons/bs";
import { useRef } from 'react';


const AboutUs = () => {

    const videoRef = useRef(null)
    function handlePlay(){
        console.log(videoRef);
        console.log("video playing");
        videoRef.current.play()
    }
    function handlePause(){
        console.log(videoRef);
        console.log("video paused");
        videoRef.current.pause()
    }
    

    const handleToggle=()=>{
        videoRef.current.paused?handlePlay():handlePause()
    }

  return (
    <div className='AboutMain'>
        <div className='AboutContainer'>
            <div className='aboutRow'>
                <div className='aboutRow1'>
                    <h1>
                    ABOUT US
                    </h1>
                    <h3>
                    Featured Residential Centers
                    </h3>
                    <div className='aboutRow1p'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    </div>
                    <span>
                                <button>
                                        Learn More  <BsArrowRight className='aboutRow1-icon' />
                                </button>
                               
                            </span>
                </div>
            </div>
            <div className='aboutRow'>
                <div className='aboutRow2'>
                      <video
                    src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
                         autoPlay
                    ref={videoRef}
                    onClick={handleToggle}
                    >
                    </video>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs