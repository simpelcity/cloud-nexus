import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav, ListGroup, Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [expanded, setExpanded] = useState(false);
  const handleNavClick = () => setExpanded(false);

  return (
    <>
      <Navbar expand="lg" expanded={expanded} onToggle={() => setExpanded(p => !p)} className={`navbar-custom z-1 w-100 top-0 ${expanded ? "nav-open" : ""} ${isHomePage ? 'text-white bg-transparent position-absolute' : 'text-black position-relative bg-white shadow-sm'}`} data-bs-theme="dark">
        <Container className="nav-container" fluid>
          <Navbar.Brand href="/" className={`m-0 d-flex ${isHomePage ? 'text-white' : 'text-dark'}`}>
            <img src="/assets/icons/favicon.png" alt="Cloud Nexus Logo" className="nav-logo" />
            <p className="my-auto ms-2 d-flex gap-1 fs-4">Cloud Nexus</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-lg-auto text-center fs-5">
              <NavLink as={NavLink} to="/" onClick={handleNavClick} className={`nav-link ${isHomePage ? 'text-white' : 'text-black-50'}`}>Home</NavLink>
              <hr className="my-1"></hr>
              <NavLink as={NavLink} to="/services" onClick={handleNavClick} className={`nav-link ${isHomePage ? 'text-white' : 'text-black-50'}`}>Services</NavLink>
              <hr className="my-1"></hr>
              <NavLink as={NavLink} to="/pricing" onClick={handleNavClick} className={`nav-link ${isHomePage ? 'text-white' : 'text-black-50'}`}>Pricing</NavLink>
              <hr className="my-1"></hr>
              <NavLink as={NavLink} to="/about-us" onClick={handleNavClick} className={`nav-link ${isHomePage ? 'text-white' : 'text-black-50'}`}>About Us</NavLink>
              <hr className="my-1"></hr>
              <NavLink as={NavLink} to="/contact" onClick={handleNavClick} className={`nav-link ${isHomePage ? 'text-white' : 'text-black-50'}`}>Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

      <footer className="bg-light d-flex">
        <Container className="my-4" fluid>
          <Row className="row-gap-4 w-100 d-flex justify-content-center">
            <Col xs={6} md={4} lg={3} xl={4} className="d-flex align-items-center justify-content-center justify-content-lg-start">
              <Image src="/assets/images/logo.png" alt="Cloud Nexus Logo" loading="lazy" className="footer-logo" />
            </Col>
            <Col xs={6} md={6} lg={3} xl={4} className="d-flex align-items-center justify-content-center justify-content-lg-start">
              <ListGroup className="fs-5">
                <ListGroup.Item className="border-0 bg-light p-0">
                  <a href="/" className="text-decoration-none text-black">Home</a>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-light p-0">
                  <a href="/services" className="text-decoration-none text-black">Services</a>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-light p-0">
                  <a href="/pricing" className="text-decoration-none text-black">Pricing</a>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-light p-0">
                  <a href="/about-us" className="text-decoration-none text-black">About Us</a>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 bg-light p-0">
                  <a href="/contact" className="text-decoration-none text-black">Contact</a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={12} md={12} lg={6} xl={4} className="d-flex align-items-center pe-lg-0 text-center text-lg-start">
              <p className="fs-5 m-0">
                Welcome to Cloud Nexus, where innovation meets reliability in the world of web hosting. We're more than just a hosting provider-we're your trusted partner in building, scaling, and managing your digital presence.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}