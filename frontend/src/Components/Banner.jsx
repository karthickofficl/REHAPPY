import React, { useEffect, useState } from 'react'
import '../Styles/Banner.css'
import axios from 'axios'


const Banner = () => {

    const [data,setData]=useState([])
    const [condition,setCondition]=useState([])

    useEffect(()=>{

        const locationData= async()=>{
            const {data} = await axios.get("http://localhost:5000/location")
            const ConditionResult = await axios.get("http://localhost:5000/condition")
            setData(data)
            setCondition(ConditionResult.data)
        }
        locationData()
    },[])

  return (
    <div className='banner-container'>
        <div className='banner-main'>
            <div className='banner-page'>
             <div className='banner-pageTitle'>
             <h2>
            Find the best TREATMENT Centers or REHABILATION Centers Near by you with our “REHABPY”
              </h2>
             </div>
            </div>
            <div className='banner-page'>
                <div className='banner-search'>
                    <div className='banner-searchPara'>
                    <p>Find your <strong>Treatment Center</strong></p>
                    </div>
                    <div className='banner-select'>
                    <select>
                        <optgroup>
                          {
                            data.map((item,index)=>(
                                <option key={index}>{item.country}</option>
                            )                                  
                            )
                          }
                        </optgroup>
                    </select>
                    <select>
                        <optgroup>
                          {
                            condition.map((item,index)=>(
                                <option key={index}>{item.conditons}</option>
                            )                                  
                            )
                          }
                        </optgroup>
                    </select>
                    </div>
                    <button>
                        Get well soon
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner