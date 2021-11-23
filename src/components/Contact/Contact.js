import React from "react";
import './Contact.css';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons"

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container className="mapMamaPancha">
                <Row >
                    <Col lg="6" className="mt-5">
                        <Row className="d-flex justify-content-center h3 mb-5">
                            Nuestras redes
                        </Row>
                        <Row className="h6 mb-5">
                            <Navbar.Text className="d-flex justify-content-center align-items-center">
                                <a className="me-2" href="tel:+3003707389"><span className="icon"><FontAwesomeIcon icon={faPhoneVolume} size="2x" /></span></a> Llámanos
                            </Navbar.Text>
                        </Row>
                        <Row className="h6 mb-5">
                            <Navbar.Text className="d-flex justify-content-center align-items-center">
                                <a className="me-2" href="https://wa.me/573003707389?text=Quiero%20comprar%20un%20producto"><span className="icon"><FontAwesomeIcon icon={faWhatsapp} size="2x" /></span></a> Escríbenos
                            </Navbar.Text>

                        </Row>
                        <Row className="h6 mb-5">
                            <Navbar.Text className="d-flex justify-content-center align-items-center">
                                <a className="me-2" href="https://wa.me/573003707389?text=Quiero%20comprar%20un%20producto"><span className="icon"><FontAwesomeIcon icon={faFacebook} size="2x" /></span></a> Mira las publicaciones
                            </Navbar.Text>

                        </Row>
                    </Col>
                    <Col lg="6" className="mt-5" >
                        <Row className="d-flex justify-content-center h3 mb-2">
                            Ven y nos visitas!
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <iframe title="Ubicación Tienda mamaPancha" className="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7573334915896!2d-73.13098978596364!3d6.5522910246475945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c72f344146e3%3A0x612b966d253611d2!2sCl.%207%20%239-29%2C%20San%20Gil%2C%20Santander!5e0!3m2!1ses!2sco!4v1633815083948!5m2!1ses!2sco" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                        </Row>
                        <Row className="d-flex justify-content-center mt-3 lh-1">
                            Estamos ubicados en el maravilloso pueblo de San Gil, Santander.
                        </Row>
                    </Col>
                </Row>
            </Container>


        );
    }
}
