import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import About from './TabList/About';
import Experience from './TabList/Experience';
import Gallery from './TabList/Gallery';
import HighLights from './TabList/HighLights';
import Overview from './TabList/Overview';
import Treatment from './TabList/Treatment';
import '../../Styles/TabsBox.css'



const TabsBox = () => {

    const [key, setKey] = useState('home');

  return (
    <div className='tabMain'>
      <div className='tabContainer'>
      <Tabs
    id="controlled-tab-example"
    activeKey={key}
    onSelect={(k) => setKey(k)}
    className="mb-3"
    fill
  >
    <Tab eventKey="highlights" title="HighLights">
      <HighLights/>
    </Tab>
    <Tab eventKey="overview" title="Overview">
      <Overview/>
    </Tab>
    <Tab eventKey="treatment" title="Treatment">
      <Treatment/>
    </Tab>
    <Tab eventKey="experience" title="Experience">
      <Experience/>
    </Tab>
    <Tab eventKey="about" title="About">
      <About/>
    </Tab>
    <Tab eventKey="gallery" title="Gallery">
      <Gallery/>
    </Tab>
  </Tabs>
      </div>
    </div>


  )
}

export default TabsBox

