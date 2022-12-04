/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Avatar } from "@chakra-ui/react";
import "./Header.css";

function Header() {
  return (
    <section className="header-view">
      <h2>Re*sip*e</h2>
      <div className="nav-btns">
        <button>Browse</button>
        <button>Joe's Bar</button>
        <Avatar name="Joe Schmoe" src="https://bit.ly/code-beast" />
      </div>
    </section>
  );
}

export default Header;
