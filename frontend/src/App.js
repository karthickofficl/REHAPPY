import Header from './Components/Header';
import './App.css';
import Banner from './Components/Banner';
import Country from './Components/Country';
import Advertise from './Components/Advertise';
import Treatment from './Components/Treatment';
import Explore from './Components/Explore';
import LatestNews from './Components/LatestNews';
import Feature from './Components/Feature';
import AboutUs from './Components/AboutUs';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Listing from './Components/Listing/Listing';




function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Banner/>
      <Country/>
      <Advertise/>
      <Treatment/>
      <Explore/>
      <LatestNews/> 
      <Feature/>
      <AboutUs/>
      <FAQ/>
      <Footer/> */}
      <Listing/>
    </div>
  );
}

export default App;
