import React from "react";
import { Heading, Avatar } from "@chakra-ui/react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/joes-bar.png";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container head">
        <Heading as="h4" size="md">
          Re*sip*e
        </Heading>
        <nav className="main-nav head">
          <div className="main-nav-list head">
            <div className="nav-list">
              <NavLink to="/search">
                Browse Cocktails
              </NavLink>
            </div>
            <div className="nav-list">
              <NavLink to="/bar/1">
                <img src={logo} alt="joes-bar-logo" width={"30px"} />
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
    </header>
  );
}

export default Header;
