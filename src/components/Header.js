import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">QA</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Profile</Nav.Link>
                <Nav.Link href="#features">Questions</Nav.Link>
                <Nav.Link href="#pricing">Answers</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header