import React from 'react'
import { useSelector } from 'react-redux'
import '../../Styles/Banner.css'
import { Search } from 'react-bootstrap-icons';

const ListBrowser = () => {

    const location = useSelector((state)=>state.Rehabpy.selectLocation.location)
    const condition = useSelector((state)=>state.Rehabpy.selectCondition.conditions)


  return (
    <div className='browserMain'>
        {/* <div className='browserContainer'> */}
        {/* <div className='browser-page'> */}
                <div className='browser-search'>
                    <div className='browser-searchPara'>
                    <strong>Browse All the Rehabs in your Location</strong>
                    </div>
                    <div className='browser-select'>
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
                    <button>
                        <Search/>
                    </button>
                    </div>
                    
                </div>
            {/* </div> */}
        {/* </div> */}
    </div>
  )
}

export default ListBrowser