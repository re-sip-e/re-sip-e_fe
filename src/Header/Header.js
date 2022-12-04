/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Avatar } from "@chakra-ui/react"
import "./Header.css"

function Header() {
  return (
    <section className='header-view'>
        <h1>Re*sip*e</h1>
      <div className='nav-btns'>
        <button>Browse</button>
        <button>Joe's Bar</button>
        <Wrap>
        <WrapItem>
            <Avatar name='Joe Schmoe' src="https://bit.ly/code-beast"/>
        </WrapItem>
        </Wrap>
      </div>
    </section>
  )
}

export default Header
