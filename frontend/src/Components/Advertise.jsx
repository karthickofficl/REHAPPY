import React from 'react'
import '../Styles/Advertise.css'
import { BsArrowRight } from "react-icons/bs";


const Advertise = () => {
  return (
    <div className='advertise-main'>
        <div className='advetise-container'>
            <div className='advertise-title postion'>
                <p>AD</p>
            </div>
            <div className='advertise-content'>
                <h1>Featured Residential Centers
                </h1>
            </div>
            <div className='advertise-para'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='advertise-button'>
                <button>
                    Visit us <BsArrowRight className="Advertise-icon" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Advertise