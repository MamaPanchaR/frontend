import React from "react";
import { Button, Container, Form, FloatingLabel, Row, Col } from "react-bootstrap";
import './Login.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            pass: ''
        }
    }

    iniciarSesion() {

        alert(`Usuario: ${this.state.usuario} - Password: ${this.state.pass}`)

    }


    render() {
        return (
            <Container id="loginContainer" className="">
                <Row>
                    <Col xs={12} sm={12} md={{ span: 4, offset: 4 }} lg={{ span: 4, offset: 4 }} xl={{ span: 4, offset: 4 }}>
                        <Row className="h3 justify-content-center mb-3">
                            Inicio de sesión
                        </Row>
                        <Row>
                            <Form>
                                <Form.Group className="" >
                                    <FloatingLabel label="Email" className="mb-3">
                                        <Form.Control type="email"
                                            onChange={(e) =>
                                                this.setState({ usuario: e.target.value })
                                            } />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group className="" >
                                    <FloatingLabel label="Contraseña" className="mb-3">
                                        <Form.Control type="password"
                                            onChange={(e) =>
                                                this.setState({ pass: e.target.value })
                                            } />
                                    </FloatingLabel>
                                </Form.Group>
                                <Button variant="secondary" type="submit" className="goButton mt-2 w-100"
                                    onClick={() => {
                                        this.iniciarSesion();
                                    }}>
                                    Iniciar Sesión
                                </Button>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>


        );
    }
}
