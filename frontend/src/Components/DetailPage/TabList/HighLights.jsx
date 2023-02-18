import React from 'react'
import '../../../Styles/TabsBox.css'
import Badge from '../../../Image/Tabs/Highlights/premium-badge.png'
import List from '../../../Image/Tabs/Highlights/list.png'
import Health from '../../../Image/Tabs/Highlights/health-insurance.png'
import Anxiety from '../../../Image/Tabs/Highlights/anxiety.png'


const HighLights = () => {
  return (
    <div className='highMain'>
        <div className='highContainer'>
          <div className='highContent'>
            <img src={Badge} alt='Premium'></img>
            <h4>Joint Commission Accredited</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
          </div>
          <div className='highContent'>
          <img src={List} alt='CheckList'></img>
            <h4>Customized Treatment Plans</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
          </div>
          <div className='highContent'>
          <img src={Health} alt='Insurance'></img>
            <h4>Insurance Accepted</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
          </div>
          <div className='highContent'>
          <img src={Anxiety} alt='Anxeity'></img>
            <h4>Co-Occurring Disorders Treatment</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
          </div>
        </div>
    </div>
  )
}

export default HighLights