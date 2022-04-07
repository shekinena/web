import React from 'react';
import { useLocation, Link, withRouter, NavLink } from 'react-router-dom'

function HeaderView() {
  const location = useLocation();
  console.log(location.pathname);

  return <span>{location.pathname}</span>
}

const Nav = () => {
  let activeStyle = {
    fontWeight: 'bold'
  };



    return (
      <nav className='nav-bar'>
          <ul style={{borderBottom: 'solid 2px' , color:'black'}}>
            
            <li>
                <NavLink 
                  to="/"
                  style={({ isActive, }) =>
                    isActive ? activeStyle : undefined 
                  }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/thesis"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Thesis
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/publication"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Publication
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Contact
                </NavLink>
              </li>
          </ul>
      </nav>
    )
  }
  
  export default Nav