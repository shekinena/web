import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
      <footer className='footer'>
        <div  >
          <ul className='footer-div-social'>
            <a href='https://www.facebook.com/Shekinenaidi'><li><FaFacebook size={20} /></li></a>
            <a href='https://www.instagram.com/shekinenaidi/'><li><FaInstagram size={20} /></li></a>
            <li><FaLinkedin size={20} /></li>
            <li><FaTwitter size={20} /></li>
          </ul>
        </div>
        <div className='footer-div' style={{textAlign:'center',
                                            marginTop:'10px'}}>
          <p style={{marginBottom:'0px'}}>&copy; {new Date().getFullYear()} Spatharas St. | All rights reserved.</p>
        </div>
      </footer>

    )
  }
  
  export default Footer