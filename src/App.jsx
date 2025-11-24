import { Outlet, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav, ListGroup, Row, Col, Image, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [show] = useState(false);

  return (
    <>
      <Navbar expand="lg" className={`z-1 w-100 top-0 ${isHomePage ? 'text-white bg-transparent position-absolute' : 'text-black position-relative bg-white shadow-sm'}`} data-bs-theme={`${isHomePage ? 'dark' : 'light'}`}>
        <Container className="nav-container">
          <Navbar.Brand href="/" className={`m-0 d-flex ${isHomePage ? 'text-white' : 'text-black'}`}>
            <img src="/assets/icons/favicon.png" alt="Cloud Nexus Logo" className="nav-logo" />
            <p className="my-auto ms-2 d-flex gap-1">Cloud Nexus</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className="shadow-none border-0" />
          <Navbar.Offcanvas id="offcanvasNavbarLabel-expand-lg" aria-labelledby="offcanvasNavbar-expand-lg" placement="end" className={`${show ? 'nav-open' : ''}`}>
            <Offcanvas.Header closeButton>
              <Navbar.Brand href="/" id="offcanvasNavbarLabel-expand-lg" className="m-0 d-flex text-black">
                <img src="/assets/icons/favicon.png" alt="Cloud Nexus Logo" className="nav-logo" />
                <p className="my-auto ms-2 d-flex gap-1">Cloud Nexus</p>
              </Navbar.Brand>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-lg-auto text-center">
                <Nav.Link href="/" className={`${isHomePage ? 'nav-home' : 'text-body-secondary'}`}>Home</Nav.Link>
                <hr className="my-1"></hr>
                <Nav.Link href="/services" className={`${isHomePage ? 'nav-home' : 'text-body-secondary'}`}>Services</Nav.Link>
                <hr className="my-1"></hr>
                <Nav.Link href="/pricing" className={`${isHomePage ? 'nav-home' : 'text-body-secondary'}`}>Pricing</Nav.Link>
                <hr className="my-1"></hr>
                <Nav.Link href="/about-us" className={`${isHomePage ? 'nav-home' : 'text-body-secondary'}`}>About Us</Nav.Link>
                <hr className="my-1"></hr>
                <Nav.Link href="/contact" className={`${isHomePage ? 'nav-home' : 'text-body-secondary'}`}>Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Outlet />

      <footer className="bg-light d-flex">
        <Container className="my-4">
          <Row className="row-gap-4 w-100 d-flex justify-content-center">
            <Col xs={6} md={6} xl={4} className="d-flex align-items-center justify-content-center justify-content-lg-start">
              <Image src="/assets/images/logo.png" alt="Cloud Nexus Logo" loading="lazy" className="footer-logo" />
            </Col>
            <Col xs={6} md={6} xl={4} className="d-flex align-items-center justify-content-center justify-content-xl-start">
              <ListGroup className="">
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
            <Col xs={12} md={12} xl={4} className="d-flex align-items-center pe-lg-0 text-center text-lg-start">
              <p className="m-0">
                Welcome to Cloud Nexus, where innovation meets reliability in the world of web hosting. We're more than just a hosting provider-we're your trusted partner in building, scaling, and managing your digital presence.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}