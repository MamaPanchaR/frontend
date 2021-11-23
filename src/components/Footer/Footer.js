import React from "react";
import './Footer.css';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between align-items-center border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <Nav.Link href="/" className="text-footer mb-3 me-2 mb-md-0 text-decoration-none text-muted lh-1"> © 2021 - mamaPancha - San Gil, Santander
                        </Nav.Link>
                    </div>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><Nav.Link href="https://wa.me/573003707389?text=Quiero%20comprar%20un%20producto" className="text-muted" ><FontAwesomeIcon icon={faWhatsapp} size="lg" /></Nav.Link></li>
                        <li className="ms-3"><Nav.Link className="text-muted" href="#"><FontAwesomeIcon icon={faInstagram} size="lg" /></Nav.Link></li>
                        <li className="ms-3"><Nav.Link className="text-muted" href="https://www.facebook.com/robeal1693"><FontAwesomeIcon icon={faFacebook} size="lg" /></Nav.Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

