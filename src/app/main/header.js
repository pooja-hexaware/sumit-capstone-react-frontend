import React from 'react';
import { decrement } from "./store/capstoneSlice"
import { Navbar } from 'react-bootstrap';

function Header(props) {
  return (
    <Navbar.Brand href="#home" style={{ color: "white", fontWeight: 600 }}>{props.title}</Navbar.Brand>
  )
}

export default Header;
