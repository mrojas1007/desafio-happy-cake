import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBarMenu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-dark bg-danger me-auto w-100">
            <div className="container-fluid d-flex justify-content-between p-2">
              <div>
                <img src="src\assets\house.png" alt="house" />
                <Link to="/" className="text-light mt-2 pe-2 text-decoration-none">
                  Home
                </Link>
                <img src="src\assets\ledger.png" alt="ledger" />
                <Link to="/contacto" className="text-light mt-2 text-decoration-none">
                  Contacto
                </Link>
              </div>
              <div>
                <Navbar.Brand href="#home">Happy Cake</Navbar.Brand>
                <img src="src\assets\shortcake.png" alt="shortcake" />
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarMenu;
