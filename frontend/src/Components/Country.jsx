import React from 'react'
import '../Styles/Country.css'

const countryList = [
    {
        countrys:"Australia"
    },
    {
        countrys:"California"
    },
    {
        countrys:"South Africa"
    },
    {
        countrys:"Malbourn"
    },
    {
        countrys:"Thailand"
    },
    {
        countrys:"India"
    },
    {
        countrys:"Japan"
    },
]





const Country = () => {
  return (
    <div className='country-header'>
        <div className='country-main'>
            <div className='country-pagesTitle'>
                <h2>FIND LUXURY REHAB CENTERS  AROUND THE GLOBE</h2>
            </div>
            <div className='country-pages countryHeader'>
                <div className='country-list'>
                 {
                    countryList.map((item,index)=>(
                        <div className='country-listMap' key={index}>
                            <p>{item.countrys}</p>
                        </div>
                    ))
                 }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Country