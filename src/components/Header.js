import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">QA</Navbar.Brand>
            <Nav className="me-auto">
                <NavLink className="p-2" style={{ textDecoration: 'none' }} to="/profiles">Profile</NavLink>
                <NavLink className="p-2" style={{ textDecoration: 'none' }} to="/questions">Questions</NavLink>
                <NavLink className="p-2" style={{ textDecoration: 'none' }} to="/answers">Answers</NavLink>
            </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header