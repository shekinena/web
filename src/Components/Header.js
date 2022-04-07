import React from 'react';
import Nav from './Nav';



const Header = () => {
  return (
    <header className='logo'>
        <ul>
          <li style={{borderBottom: 'solid 2px',
                    fontSize:'25px',}} >Shekine Nainti </li>
        </ul>

        <Nav />
    </header>
  )
}

export default Header