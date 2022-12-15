import React from "react";
import "./NavBar.css";
import { IconButton, Avatar, Image, Button} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { Link, NavLink } from "react-router-dom";
import barLogo from "../../assets/bar-counter.png";
import siteLogo from "../../assets/re-sip-e-sm-logo.png";


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
                <Button aria-label='Search database' rightIcon={<SearchIcon boxSize={14} />} size={'lg'} height='65px' width='240px' color='white' bgColor="#37867B" _hover={{background: "#307168"}} className="search-btn">Find Cocktails</Button>
              </NavLink>
            </div>
            <div className="bar-tab">
              <a href="/bar/1">
                <Button aria-label='View my bar' rightIcon={<Image src={barLogo} boxSize={10}/>} size={'lg'} height='65px' width='240px' color='white' bgColor="#37867B" _hover={{background: "#307168"}}>View My Bar</Button>
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
