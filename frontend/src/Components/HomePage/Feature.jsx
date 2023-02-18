import React from 'react'
import '../../Styles/Feature.css'
import featureImage from '../../Image/featureImage.png'
import {IoLocationOutline} from 'react-icons/io5'



const Feature = () => {


  return (
        <div className='feature-main'>
            <div className='feature-container'>
                <div className='featureRow'>
                    <div className='featureRow1'>
                    <h1>FEATURED RESIDENTIAL CENTERS</h1>
                    <p><IoLocationOutline/>Lorem ipsum dolor sit amet,</p>
                    <h3>Featured Residential Centers</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    </div>
                </div>
                <div className='featureRow'>
                    <div className='featureRow2'>
                    <img src={featureImage} alt='pic'></img>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Feature