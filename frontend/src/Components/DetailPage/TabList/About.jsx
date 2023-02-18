import React from 'react'
import '../../../Styles/TabsBox.css'
import about from '../../../Image/Tabs/About/about.png'


const About = () => {
  return (
    <div className='aboutMain'>
      <div className='aboutContainer'>
          <div className='aboutContent'>
            <h1>About Renaissance Recovery</h1>
            <p>Located in beautiful Southern California, Renaissance Recovery offers clients a variety of addiction programs, like dual diagnosis treatment, medication assisted treatment (MAT), 
              telehealth services, and high-quality outpatient programs. Understanding there's no one-size-fits-all treatment method, Renaissance utilizes an individualized approach when treating addiction and mental health concerns.</p>
            <button>Read More</button>
          </div>
          <div className='aboutContent'>
            <div className='aboutVideo'>
                <img src={about} alt='about'/>
            </div>
          </div>
      </div>

    </div>
  )
}

export default About