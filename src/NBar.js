import React from 'react'
import { Container, Nav, Navbar,  } from 'react-bootstrap'
import Clock from './Clock'

export const NBar = () => {
  return (
    <div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Welcome</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Accueil</Nav.Link>
      <Nav.Link href="#pricing">Profil</Nav.Link>

    </Nav>
    <Nav>
     <Clock/>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
