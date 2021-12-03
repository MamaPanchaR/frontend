import React from "react";
import axios from "axios";

import { Button, Container, Form, FloatingLabel, Row, Col } from "react-bootstrap";
import { APIHOST as host } from '../../app.json';
import './Login.css';
import { isNull } from 'util';
import Cookies from 'universal-cookie';
import { calculaExpiracionSesion } from "../helper/helper";
import Loading from "../Loading/Loading";

const cookies = new Cookies();

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            usuario: '',
            pass: ''
        }
    }

    iniciarSesion() {

        this.setState({
            loading: true
        });

        axios.post(`${host}usuarios/login`, {
            usuario: this.state.usuario,
            pass: this.state.pass,
        })
            .then((response) => {
                if (isNull(response.data.token)) {
                    alert('Usuario y/o contraseña inválidos')
                } else {
                    cookies.set('_s', response.data.token, {
                        path: '/',
                        expires: calculaExpiracionSesion(),
                    });

                    this.props.history.push('/crudProd');
                }
                this.setState({
                    loading: false
                });
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    loading: false
                });
            })

        //alert(`Usuario: ${this.state.usuario} - Password: ${this.state.pass}`)

    }


    render() {
        return (
            <Container id="loginContainer" className="">
                <Loading show={this.state.loading} />
                <Row>
                    <Col xs={12} sm={12} md={{ span: 4, offset: 4 }} lg={{ span: 4, offset: 4 }} xl={{ span: 4, offset: 4 }}>
                        <Row className="h3 justify-content-center mb-3">
                            Inicio de sesión
                        </Row>
                        <Row>
                            <Form>
                                <Form.Group className="" >
                                    <FloatingLabel label="Usuario" className="mb-3">
                                        <Form.Control
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
