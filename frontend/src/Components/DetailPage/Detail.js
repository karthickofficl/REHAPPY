import React from 'react'
import DetailHeader from './DetailHeader'
import DetailOffer from './DetailOffer'
import DetailProfile from './DetailProfile'
import DetailSlider from './DetailSlider'
import DetailStaff from './DetailStaff'

const Detail = () => {
  return (
    <div>
        <DetailHeader/>
        <DetailSlider/>
        <DetailProfile/>
        <DetailStaff/>
        <DetailOffer/>
    </div>
  )
}

export default Detail