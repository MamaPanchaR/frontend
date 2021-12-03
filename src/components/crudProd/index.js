import React from 'react';
import { Container, Nav, Row } from 'react-bootstrap';
import CrudProdBuscar from './buscarProd';
import CrudProdCrear from './crearProd';
import CrudProdEditar from './editarProd';
import './crudProd.css';

export default class CrudProd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'buscar',
            _id: null,
        };
        this.changeTab = this.changeTab.bind(this);
        this.setIdCrudProd = this.setIdCrudProd.bind(this);
        this.getIdCrudProd = this.getIdCrudProd.bind(this);
    }

    changeTab(tab) {
        this.setState({ currentTab: tab });
    }

    setIdCrudProd(id) {
        this.setState({ _id: id });
    }

    getIdCrudProd() {
        return this.state._id;
    }
    //
    render() {
        return (
            <Container id=" crudProd-container">
                <Row>
                    <Nav
                        fill
                        variant="tabs"
                        defaultActiveKey="buscar"
                        onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="buscar">Buscar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crear">Crear</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currentTab === 'buscar' ? (
                        <CrudProdBuscar
                            changeTab={this.changeTab}
                            setIdCrudProd={this.setIdCrudProd}
                        />
                    ) : this.state.currentTab === 'crear' ? (
                        < CrudProdCrear changeTab={this.changeTab} />
                    ) : (
                        <CrudProdEditar
                            changeTab={this.changeTab}
                            getIdCrudProd={this.getIdCrudProd}
                        />
                    )}
                </Row>
            </Container>
        );
    }
}
