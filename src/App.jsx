import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function App() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <>
            <Navbar expand="lg" className={`bg-transparent z-1 w-100 position-absolute top-0 ${isHomePage ? 'text-white' : 'text-black'}`}>
                <Container fluid>
                    <Navbar.Brand href="/" className={`m-0 d-flex ${isHomePage ? 'text-white' : 'text-dark'}`}>
                        <img src="/assets/icons/favicon.png" className="nav-logo" />
                        <p className="my-auto ms-2 d-flex gap-1 fs-4">Cloud Nexus</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-lg-auto text-center fs-5">
                            <NavLink to="/" className={`nav-link ${isHomePage ? 'text-white' : 'text-dark'}`}>Home</NavLink>
                            <hr className="my-1"></hr>
                            <NavLink to="/services" className={`nav-link ${isHomePage ? 'text-white' : 'text-dark'}`}>Services</NavLink>
                            <hr className="my-1"></hr>
                            <NavLink to="/pricing" className={`nav-link ${isHomePage ? 'text-white' : 'text-dark'}`}>Pricing</NavLink>
                            <hr className="my-1"></hr>
                            <NavLink to="/about-us" className={`nav-link ${isHomePage ? 'text-white' : 'text-dark'}`}>About Us</NavLink>
                            <hr className="my-1"></hr>
                            <NavLink to="/contact" className={`nav-link ${isHomePage ? 'text-white' : 'text-dark'}`}>Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />

            <footer className="text-center bg-body-tertiary py-2">
                <p className="m-0">&copy; Global News Wire | All rights reserved.</p>
            </footer>
        </>
    )
}