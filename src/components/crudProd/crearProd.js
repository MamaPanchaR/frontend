import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { request } from '../helper/helper';
import Loading from "../Loading/Loading";
import MessagePrompt from '../Prompts/message';

export default class CrudProdCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rediret: false,
            message: {
                text: '',
                show: false,
            },
            loading: false,
            crudProd: {
                nombre: '',
                precio: '',
                imgUrl: '',
                descripción: '',
            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
    }

    setValue(index, value) {
        this.setState({
            crudProd: {
                ...this.state.crudProd,
                [index]: value,
            },
        });
    }

    guardarCrudProd() {
        this.setState({ loading: true });
        request
            .post('/crudProd', this.state.crudProd)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true,
                        },
                    });
                }
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }

    onExitedMessage() {
        if (this.state.rediret) this.props.changeTab('buscar');
    }

    render() {
        return (
            <Container id="crudProd-crear-container">
                <MessagePrompt
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}
                />

                <Loading show={this.state.loading} />

                <Row>
                    <h1>Crear</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>nombre</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('nombre', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>precio</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('precio', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>imgUrl</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('imgUrl', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>descripción</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('descripción', e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            onClick={() => console.log(this.guardarCrudProd())}
                        >
                            Guardar
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}