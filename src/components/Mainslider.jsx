import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import display from '../assets/images/display.png'
import mans from '../assets/images/mans.png'
import shopping from '../assets/images/shopping.png'



export const Mainslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 3000,
    autoplay: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div>
        
        <Slider {...settings}>
          <div className=''>
            <img src={mans} className='  w-[100%] h-[400px] '    alt="" />
          </div>
          <div>
            <img src={shopping} alt="" className='w-[100%] h-[400px] ' />
          </div>
          <div>
           <img src={display} alt="" className='w-[100%] h-[400px] ' />
          </div>
          
        </Slider>
      </div>

    </>
  )
}


