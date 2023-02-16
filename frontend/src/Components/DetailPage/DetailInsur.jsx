import React from 'react'
import insur1 from '../../Image/Insurance/insur1.png'
import insur2 from '../../Image/Insurance/insur2.png'
import insur3 from '../../Image/Insurance/insur3.png'
import insur4 from '../../Image/Insurance/insur4.png'
import '../../Styles/Insurance.css'


const DetailInsur = () => {
  return (
    <div className='insurMain'>
        <div className='insurContainer'>
        <h1>
        Insurance Accepted
        </h1>
        <p>
        Provider's Policy:Provider Policy- Renaissance Recovery is proud to work with as many insurers as possible. The more insurers that we work with, the more people we can help.
        </p>
        <div className='insurImg'>
            <span>
                <img src={insur1} alt='insur1'></img>
            </span>
            <span>
            <img src={insur2} alt='insur1'></img>
            </span>
            <span>
            <img  src={insur3}   alt='insur1'></img>
            </span>
            <span>
            <img src={insur4} alt='insur1'></img>
            </span>
        </div>
        <button>
            Verify Now 
        </button>
        </div>
    </div>
  )
}

export default DetailInsur