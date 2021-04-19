import { Link, NavLink } from "react-router-dom";
import React from 'react';
import { Form, Nav, Navbar } from "react-bootstrap";

const NavbarMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/">Students</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-students" to="/">Students</Link>
            <Link className="nav-addStudents" to="/addStudent">Add Student</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavbarMenu;