import React from 'react';
import "./NavBar.css";
import { Heading, IconButton, Avatar } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/joes-bar.png";

const NavBar = () => {
  return (
    <section className='alt-header'>
        <div className='alt-header-box head-2'>
        <Heading as="h4" size="md">
            <Link to="/">
                Re*sip*e
            </Link>
        </Heading>
        <nav className="second-header head-2">
          <div className="second-header-list head-2">
            <div className="search-tab">
              <NavLink to="/search">
              <IconButton aria-label='Search database' icon={<SearchIcon boxSize={10} />} />
              </NavLink>
            </div>
            <div className="bar-tab">
              <NavLink to="/bar/1" className={"bar-icon-box"}>
                <img src={logo} alt="joes-bar-logo" width={"30px"}/>
              </NavLink>
            </div>
            <div className="header-avatar">
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
