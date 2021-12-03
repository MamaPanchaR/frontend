import React from "react";
import { Card, Button, Container, Row, Col, Carousel } from "react-bootstrap";
import './CardProd.css';



export default class CardProd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./img/oblea1.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./img/dulce1.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./img/alfajor1.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row className="mainContent mt-5 h3 fw-bold">
                    Nuestros productos
                </Row>
                <Row className="mainContent mt-5">
                    <Col sm={4}>
                        <Card className="">
                        <img
                                className="d-block w-100"
                                src="./img/descarga.png"
                                alt="First slide"
                            />
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <Card className="">
                            <Card.Body>
                                <Card.Title>Obleas</Card.Title>
                                <Card.Text>
                                    Describir producto
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mainContent mt-3">
                    <Col sm={8}>
                        <Card className="">
                            <Card.Body>
                                <Card.Title>Dulces Caseros</Card.Title>
                                <Card.Text>
                                    Describir producto
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card className="">
                        <img
                                className="d-block w-100"
                                src="./img/descarga.jpg"
                                alt="First slide"
                            />
                        </Card>
                    </Col>
                </Row>
                <Row className="mainContent mt-5">
                    <Col sm={4}>
                        <Card className="">
                        <img
                                className="d-block w-100"
                                src="./img/alfajores.jpg"
                                alt="First slide"
                            />
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <Card className="">
                            <Card.Body>
                                <Card.Title>Alfajores</Card.Title>
                                <Card.Text>
                                    Describir producto
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
