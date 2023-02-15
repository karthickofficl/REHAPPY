import React from 'react'
import Header from './Header';
import Banner from './Banner';
import Country from './Country';
import Advertise from './Advertise';
import Treatment from './Treatment';
import Explore from './Explore';
import LatestNews from './LatestNews';
import Feature from './Feature';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
        <Header/>
      <Banner/>
      <Country/>
      <Advertise/>
      <Treatment/>
      <Explore/>
      <LatestNews/> 
      <Feature/>
      <AboutUs/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Home