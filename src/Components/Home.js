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
      <>
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
        <main className='mobile-view'>
          <div className='row'>
            <div className='heading'>
              <h2>Fugiat qui ex est ullamco proident eu ipsum.</h2>
              <p>Aliqua ullamco veniam consectetur excepteur ipsum ea veniam. Duis amet </p>
            </div>
            <div className='portfolio'>
              <img className='portfolio-item' src='./image_slide_10.jpg' alt='yolo'></img>
              <img className='portfolio-item' src='./image_slide_20.jpg' alt='yolo'></img>
              <img className='portfolio-item' src='./image_slide_30.jpg' alt='yolo'></img>
              <img className='portfolio-item' src='./image-grid-two.jpg' alt='yolo'></img>
              <img className='portfolio-item' src='./image-grid-one.jpg' alt='yolo'></img>
            </div>
          </div>
        </main>

        <style jsx>{`
          .row {
            padding-top: 16px;
            width: auto;
            justify-content: space-around;
            margin: 0 auto;
          }

          .heading {
            padding: 24px 0;
          }
          .mobile-view {
            margin: 0 auto;
            width:80%;
            text-align: center;
          }

          .portfolio {
            display: grid;
            gap: 1rem;
            grid-template-areas:
              'one'
              'two'
              'three'
              'four'
              'five';
          }

          .portfolio-item:nth-child(1) {
            grid-area: one;
          }
          .portfolio-item:nth-child(2) {
            grid-area: two;
          }
          .portfolio-item:nth-child(3) {
            grid-area: three;
          }
          .portfolio-item:nth-child(4) {
            grid-area: four;
          }
          .portfolio-item:nth-child(5) {
            grid-area: five;
          }

          @media (min-width: 50rem) {
            .portfolio {
              grid-template-areas:
                'one five'
                'two five'
                'four three';
            }
          }
          .portfolio-item {
            width : 100%;
            display: block;
            margin-top: auto;
            margin-bottom: auto;
            margin: 0 auto;
          }        
        `}  
        </style>
      </>
    )
  }
  
  export default Home