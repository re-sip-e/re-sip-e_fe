/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Heading, Avatar } from "@chakra-ui/react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
        <Heading as="h2" size="2xl">
          Re*sip*e
        </Heading>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <NavLink to="/search">Browse</NavLink>
            </li>
            <li>
              <NavLink to="/drinks/1">Joe's Bar</NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <Avatar name="Joe Schmoe" src="https://bit.ly/code-beast" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

// <section className="header-view">
//   <Heading as="h2" size="2xl">Re*sip*e</Heading>
//   <div className="nav-btns">
//   {/* <IconButton aria-label='Search database' icon={<SearchIcon />} /> */}
//     <button>Joe's Bar</button>
//     <Avatar name="Joe Schmoe" src="https://bit.ly/code-beast" />
//   </div>
// </section>
