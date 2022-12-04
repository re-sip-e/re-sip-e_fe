import React from 'react';
import "./NavBar.css";
import { Heading, Avatar } from "@chakra-ui/react";
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <section className='alt-header'>
        <div className='alt-nav-box'>
        <Heading as="h4" size="md">
          Re*sip*e
        </Heading>
        <nav className="second-nav head-2">
          <div className="second-nav-list head-2">
            <div className="nav-2-list">
              <NavLink to="/search">
                Browse
              </NavLink>
            </div>
            <div className="nav-2-list">
              <NavLink to="/drinks/1">
                Joe's Bar
              </NavLink>
            </div>
            <div className="nav-avatar">
              <NavLink to="/profile">
                <Avatar name="Joe Schmoe" src="https://bit.ly/code-beast" />
              </NavLink>
            </div>
          </div>
        </nav>
        </div>
    </section>
  )
}

export default NavBar;
