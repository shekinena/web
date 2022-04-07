// import { display } from '@mui/system';
import React from 'react';
import { useEffect, useState } from "react";

const About = () => {
  const [title] = useState('Shekine | About');

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);

    return (
      <main style={{justifyContent:'space-around',
                    display: 'block'
                  }}>
          <div className='about-wide-cover'>
            <img className='about-wide-image' src='../../public/mali-aigas-wide.jpg' alt='goat hair'></img>
          </div>
          
          <div className='about-main'>
            <h1 className='about-main-h1'>Shekine Nainti</h1>
            <p className='about-main-p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam neque felis, at hendrerit tortor dapibus in. Quisque porttitor dignissim massa in varius. Curabitur vel tempor nibh. Sed quis nisi non elit faucibus interdum sed sed risus. Sed nec dui at ipsum tincidunt cursus. Duis a lectus pulvinar, euismod quam eu, bibendum diam. Nullam efficitur lacinia metus, eget congue felis cursus eget. Donec eleifend ligula nunc, vitae euismod ipsum imperdiet at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ornare aliquet imperdiet. Nunc a lectus id libero fermentum volutpat.
            </p>
            <p className='about-main-p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam neque felis, at hendrerit tortor dapibus in. Quisque porttitor dignissim massa in varius. Curabitur vel tempor nibh. Sed quis nisi non elit faucibus interdum sed sed risus. Sed nec dui at ipsum tincidunt cursus. Duis a lectus pulvinar, euismod quam eu, bibendum diam. Nullam efficitur lacinia metus, eget congue felis cursus eget. Donec eleifend ligula nunc, vitae euismod ipsum imperdiet at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ornare aliquet imperdiet. Nunc a lectus id libero fermentum volutpat.
            </p>
          </div>

          <section className='about-more'>
            <img className='about-more-img' src='./corpus-cover.png' alt='Thesis cover'></img>
            <img className='about-more-img' src='./art-01.jpg' alt='Something'></img>
            <label> Thesis</label>
            <label> Progetto per VIII simposio internazionale di<br></br> scultura su basalto, Sicilia</label>
            <button className='button-animation'>Read More</button>
            <button className='button-animation'>Read More</button>
          </section>

      </main>
    )
  }
  
  export default About