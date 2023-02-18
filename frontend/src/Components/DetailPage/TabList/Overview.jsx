import React from 'react'
import Flag from '../../../Image/Tabs/Overview/Vector.png'
import Group from '../../../Image/Tabs/Overview/group 1.png'
import Translate from '../../../Image/Tabs/Overview/translate 1.png'
import Trophy from '../../../Image/Tabs/Overview/trophy 1.png'
import Dollar from '../../../Image/Tabs/Overview/dollar-symbol 1.png'
import Question from '../../../Image/Tabs/Overview/question 1.png'
import Location from '../../../Image/Tabs/Overview/location 1.png'





const Overview = () => {
  return (
    <div className='overviewMain'>
      <div className='overviewContainer'>
        <div className='overviewTop'>
          <div className='overviewList'>
            <img src={Flag} alt='flag'></img>
            <div>
              <h6>Founder</h6>
              <p>2017</p>
            </div>
          </div>
          <div className='overviewList'>
          <img src={Group} alt='flag'></img>
            <div>
            <h6>Occupancy</h6>
            <p>31-50</p>
            </div>
          </div>
          <div className='overviewList'>
          <img src={Translate} alt='flag'></img>
            <div>
            <h6>Languages</h6>
            <p>English</p>
            </div>
          </div>
          <div className='overviewList'>
          <img src={Trophy} alt='flag'></img>
            <div>
            <h6>Accreditation</h6>
            <p>Joint Commission</p>
            </div>
          </div>
          <div className='overviewList'>
          <img src={Dollar} alt='flag'></img>
           <div>
           <h6>Price & Length</h6>
            <p>$20,000 | 30 days (Extended options available)</p>
           </div>
          </div>
        </div>
        <div className='overviewMiddle'>
        <div>
        <img src={Question} alt='Question'></img>
          <span>Who we Treat</span>
        </div>
          <div className='overviewSpan'>
            <p>Men</p>
            <p>LGBTQ</p>
            <p>Professionals</p>
            <p>Executives</p>
            <p>Young Adults</p>
            <p>Midlife Adults</p>
            <p>Women</p>
          </div>
        </div>
        <div className='overviewLast'>
        <div>
        <img src={Location} alt='flag'></img>
        <span>Who we Treat</span>
        </div>
        <p>10175 Slater Ave, Suite 200 Fountain Valley, CA 92708</p>
        </div>
      </div>
    </div>
  )
}

export default Overview