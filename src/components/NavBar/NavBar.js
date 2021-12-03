import React from "react";
import './Nav.css';
import { Navbar, Nav, Dropdown, NavDropdown, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

/*import logo from '../img/mamapanchaLogo.svg';
import logo2 from '../img/mamapanchaLogo.jpg';*/

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Navbar id="navbar" bg="myRed" variant="dark" fixed="top" expand="lg" collapseOnSelect>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand as={Link} to="/" className="mx-2">
                    <span className="LogoName1">mama</span>
                    <span className="LogoName1">Pancha</span></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-5">
                        <Nav.Link href="/" className="text-link mx-2">Productos</Nav.Link>
                        <Nav.Link href="/" className="text-link mx-2">Nosotros</Nav.Link>
                        <Nav.Link href="/contact" className="text-link mx-2">Contáctanos</Nav.Link>

                        <NavDropdown id="Dropdown.Header" title="Usuario" className=" text-link mx-2 text-center justify-content-center">
                            <Dropdown.Header id="dropdownHeader" className="mx-1" >
                                <Row className=" text-link mx-2 iconUser">
                                    <Nav.Link href="/login" className=" text-link mx-2 "><FontAwesomeIcon icon={faUserCircle} size="2x" className="iconUser mx-auto" /></Nav.Link>
                                </Row>
                                <Row>
                                    USUARIO
                                </Row>
                            </Dropdown.Header>
                            <Dropdown.Divider />
                            <NavDropdown.Item className="dropdownHead text-center">Cerrar Sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

/**
 *
 * <Nav.Link as={Link} to="/contact" className="text-link mx-2">Contáctanos</Nav.Link>
 */