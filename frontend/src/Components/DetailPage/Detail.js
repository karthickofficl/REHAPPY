import React from 'react'
import DetailHeader from './DetailHeader'
import DetailInsur from './DetailInsur'
import DetailOffer from './DetailOffer'
import DetailProfile from './DetailProfile'
import DetailSlider from './DetailSlider'
import DetailStaff from './DetailStaff'
import Queries from './Queries'
import TabsBox from './TabsBox'
import Testimonial from './Testimonial'

const Detail = () => {
  return (
    <div>
        <DetailHeader/>
        <DetailSlider/>
        <DetailProfile/>
        <TabsBox/>
        <DetailStaff/>
        <DetailOffer/>
        <DetailInsur/>
        <Testimonial/>
        <Queries/>
    </div>
  )
}

export default Detail