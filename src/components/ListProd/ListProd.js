import React from "react";
import { Table, Row, Col, Container } from "react-bootstrap";
import './ListProd.css';


export default class ListProd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Container className="tabProduct">
                <Row>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                        <Row className="h3 justify-content-center mb-3">
                            Inventario
                        </Row>
                        <Row>
                            <Table striped bordered hover className="table ">
                                <thead className="">
                                    <tr className="">
                                        <th className="">#</th>
                                        <th className="">Nombre</th>
                                        <th className="">Precio</th>
                                        <th className="" >Tipo Producto</th>
                                        <th className="">Descripción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                    </Col>
                </Row>
            </Container>

        );
    }
}
