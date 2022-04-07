import React from 'react';
import { useEffect, useState } from "react";
// import ControlledCarousel from './ControlledCarousel';
import { Carousel } from 'react-bootstrap';


const Home = () => {
  const [title] = useState('Shekine | Home');
  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);
    return (
      <main className='carousel'>
          <Carousel
            style ={{
              height: 'auto'
            }}
            autoPlay={true}
            interval={5000}
            controls={false}
            indicators={false}
            slide={true}
            pause={false}
          >
            <Carousel.Item>
              <img
                className="carousel-image d-block"
                src="./image_slide_10.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                
                <p className='subtitle-animation'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <h2 className='main-title-animation'>First slide label</h2>
                <button className='button-animation'><a className='a-hover' href='/'>EXPLORE</a></button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image d-block"
                src="./image_slide_20.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                
                <p className='subtitle-animation'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2 className='main-title-animation'>Second slide label</h2>
                <button className='button-animation'><a className='a-hover' href='/'>EXPLORE</a></button>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image d-block"
                src="./image_slide_30.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                
                <p className='subtitle-animation'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                <h2 className='main-title-animation'>Third slide label</h2>
                <button className='button-animation'><a className='a-hover' href='/'>EXPLORE</a></button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </main>
    )
  }
  
  export default Home