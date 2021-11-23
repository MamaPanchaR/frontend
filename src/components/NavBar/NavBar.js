import React from "react";
import './Nav.css';
import { Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faShoppingBag } from "@fortawesome/free-solid-svg-icons"


/*import logo from '../img/mamapanchaLogo.svg';
import logo2 from '../img/mamapanchaLogo.jpg';*/

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Navbar bg="myRed" variant="dark" fixed="top" expand="lg" collapseOnSelect>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="#" className="mx-2">
                    <span className="LogoName1">mama</span>
                    <span className="LogoName1">Pancha</span></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#" className="text-link mx-2">Productos</Nav.Link>
                        <Nav.Link href="#" className="text-link mx-2">Nosotros</Nav.Link>
                        <Nav.Link href="#" className="text-link mx-2">Contáctanos</Nav.Link>
                        <Nav.Link variant="dark" href="#" className="mx-2"><FontAwesomeIcon icon={faUserCircle} size="lg" /></Nav.Link>
                        <Nav.Link variant="dark" href="#" className="mx-2"><FontAwesomeIcon icon={faShoppingBag} size="lg" /></Nav.Link>


                        {/*<DropdownButton id="dropdown-basic-button" title="Dropdown button">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}