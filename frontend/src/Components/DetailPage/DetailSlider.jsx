import React from 'react'
import '../../Styles/Slider.css'
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from '../../Image/Slider/slider1.jpg'
import Slider2 from '../../Image/Slider/slider2.jpg'
import Slider3 from '../../Image/Slider/slider3.jpg'
import Slider4 from '../../Image/Slider/slider4.jpg'





const DetailSlider = () => {
  return (
    <div className='sliderMain'>
  <Carousel fade>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Slider1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default DetailSlider