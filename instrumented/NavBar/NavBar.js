import React from "react";
import "./NavBar.css";
import { IconButton, Avatar } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import barLogo from "../assets/bar-counter.png";
import siteLogo from "../assets/re-sip-e.png";

const NavBar = () => {
  return (
    <section className="alt-header">
      <div className="alt-header-box head-2">
        <Link to="/">
          <img
            src={siteLogo}
            alt="re-sip-e logo"
            height="180"
            width="180"
            className="site-logo"
          />
        </Link>
        <nav className="second-header head-2">
          <div className="second-header-list head-2">
            <div className="search-tab">
              <NavLink to="/search">
                <IconButton
                  aria-label="Search database"
                  icon={<SearchIcon boxSize={10} />}
                  boxSize={14}
                  className="search-icon"
                />
              </NavLink>
            </div>
            <div className="bar-tab">
              <a href="https://re-sip-e.netlify.app/bar/1">
                <img
                  src={barLogo}
                  alt="joes-bar-logo"
                  width={"45rem"}
                  className="joes-bar"
                />
              </a>
            </div>
            <div className="header-avatar">
              <NavLink to="/profile">
                <Avatar
                  name="Joe Schmoe"
                  src="https://bit.ly/ryan-florence"
                  size={"lg"}
                />
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
