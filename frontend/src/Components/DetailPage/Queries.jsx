import React from 'react'
import map from '../../Image/Query/map.png'
import { useSelector } from 'react-redux'
import '../../Styles/Query.css'


const Queries = () => {

  const location = useSelector((state)=>state.Rehabpy.selectLocation.location)



  return (
    <div className='queryMain'>
        <div className='queryContainer'>
          <div className='queryImg'>
          <img src={map} alt='map'></img>
          </div>
          <div className='queryBox'>
            <div className='queryContent'>
              <h2>Any Queries Ask Here!</h2>
              <div className='queryInput'>
                <input type={"text"} placeholder='Enter Your Name'></input>
                <input type={"email"} placeholder='Enter Your Email Address'></input>
                <input type={"number"} placeholder='Enter Your Phone Number'></input>
                <select>
                        <optgroup>
                          {
                            location.map((item,index)=>(
                                <option key={index}>{item.country}</option>
                            )                                  
                            )
                          }
                        </optgroup>
                  </select>
                  <textarea placeholder="Type your message"></textarea>
              </div>
              <div className='queryButton'>
                <button>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Queries