import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../src/components/images/hero-bg.jpg';
import slider2 from '../src/components/images/hero-bg.jpg';
import slider3 from '../src/components/images/hero-bg.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../src/components/tem.css'
const Carosel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={500}>
          <img src={slider2} className='w-100 i-size' alt="" />
          <Carousel.Caption>
            <h3 className='fitness'>FITNESS</h3>
            <h2 className='fitness training'>TRAINING</h2>
            <h1 className='fitness neo'>NEOGYM</h1>
            <p className='slider-para py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
            <button className='button my-4'>contact us</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img src={slider2} className='w-100' alt="" />
          <Carousel.Caption>
            <h3 className='fitness'>FITNESS</h3>
            <h2 className='fitness training'>TRAINING</h2>
            <h1 className='fitness neo'>NEOGYM</h1>
            <p className='slider-para py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
            <button className='button my-4'>contact us</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img src={slider3} className='w-100' alt="" />
          <Carousel.Caption>
            <h3 className='fitness'>FITNESS</h3>
            <h2 className='fitness training'>TRAINING</h2>
            <h1 className='fitness neo'>NEOGYM</h1>
            <p className='slider-para py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
            <button className='button my-4'>contact us</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carosel;