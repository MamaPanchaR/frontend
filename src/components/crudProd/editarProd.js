import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { request } from '../helper/helper';
import Loading from "../Loading/Loading";
import MessagePrompt from '../Prompts/message';
import ConfirmationPromprs from '../Prompts/confirmation';

export default class CrudProdEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idCrudProd: this.props.getIdCrudProd(),
            rediret: false,
            message: {
                text: '',
                show: false,
            },
            confirmation: {
                title: 'Modificar ',
                text: '¿Deseas modificar?',
                show: false,
            },
            loading: false,
            crudProd: {
                fila_1: '',
                fila_2: '',
                fila_3: '',
                fila_4: '',
                fila_5: '',
            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    componentDidMount() {
        this.getCrudProd();
    }

    getCrudProd() {
        this.setState({ loading: true });
        request
            .get(`/crudProd/${this.state.idCrudProd}`)
            .then((response) => {
                this.setState({
                    crudProd: response.data,
                    loading: false,
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    setValue(index, value) {
        this.setState({
            crudProd: {
                ...this.state.crudProd,
                [index]: value,
            },
        });
    }

    guardaCrudProd() {
        this.setState({ loading: true });
        request
            .put(`/crudProd/${this.state.idCrudProd}`, this.state.crudSimple)
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

    onCancel() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        });
    }

    onConfirm() {
        this.setState(
            {
                confirmation: {
                    ...this.state.confirmation,
                    show: false,
                },
            },
            this.guardarCrudProd()
        );
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
                <ConfirmationPromprs
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />
                <Loading show={this.state.loading} />

                <Row>
                    <h1>Editar</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>fila_1</Form.Label>
                            <Form.Control
                                value={this.state.crudProd.fila_1}
                                onChange={(e) => this.setValue('fila_1', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Apellido Paterno</Form.Label>
                            <Form.Control
                                value={this.state.crudProd.fila_2}
                                onChange={(e) => this.setValue('fila_2', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Apellido Materno</Form.Label>
                            <Form.Control
                                value={this.state.crudProd.fila_3}
                                onChange={(e) => this.setValue('fila_3', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>fila_4</Form.Label>
                            <Form.Control
                                value={this.state.crudProd.fila_4}
                                onChange={(e) => this.setValue('fila_4', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>fila_5</Form.Label>
                            <Form.Control
                                value={this.state.crudProd.fila_5}
                                onChange={(e) => this.setValue('fila_5', e.target.value)}
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            onClick={() =>
                                this.setState({
                                    confirmation: { ...this.state.confirmation, show: true },
                                })
                            }
                        >
                            Guardar
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}
