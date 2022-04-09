import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Hamburger from './Hamburger'
import './Nav.css'


function Nav() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () =>{
      setHamburgerOpen(!hamburgerOpen)

  }

  return (
    <div>
        <div className="navigation">
          <div className='navigation-h4-div'>
            <h4><Link to='/'>Shekine Nainti</Link></h4>
          </div>
          
          <div>
            <ul>
              
              <li><Link onClick={toggleHamburger} to='/'>Home</Link></li>
              <li><Link onClick={toggleHamburger} to='about'>About</Link></li>
              <li><Link onClick={toggleHamburger} to='thesis'>Thesis</Link></li>
              <li><Link onClick={toggleHamburger} to='publications'>Publications</Link></li>
              <li><Link onClick={toggleHamburger} to='contact'>Contact</Link></li>
            </ul>
                  <div className="hamburger" onClick={toggleHamburger}>
                      <Hamburger isOpen={hamburgerOpen}/>
                  </div>
          </div>

        </div>

        <style jsx>{`

            .navigation{
                padding: 1rem 0;
                display: flex;
                justify-content: space-around;
                max-width: 100vw;
            }
            
            .navigation h4 {
              display:flex;
              flex-wrap: wrap;
              float: right;
              margin: 0px;
              padding: 0px;
              overflow: hidden;
            }
            .navigation ul{
                margin-top:20px;
                display:flex;
                flex-wrap: wrap;
                float: right;
                margin: 0px;
                padding: 0px;
                overflow: hidden;
            }
            .navigation ul li{
              height:100%
                list-style-type: none;
                padding-right: 20px;

            }

            .hamburger{
                display: none;
            } 

            @media (max-width: 767px){
                body {
                  overflow: ${hamburgerOpen ? 'hidden' : 'none'};;
                }
                .hamburger{
                    margin-left: 10px;
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                }
                
                .navigation-h4-div {
                  margin: 0 auto;
                }

                .navigation {
                  z-index: +10
                  justify-content: space-between;
                  flex-direction: row-reverse;
                }

                .navigation ul{
                    display: ${hamburgerOpen ? 'inline' : 'none'};
                    background-color: white;
                    height: 100vh;
                    width: 100vw;
                    margin-top: 50px;
                    position: fixed;
                    z-index: +10
                }
            }
            
            
            
        `}</style>
    </div>
  )

}

export default Nav