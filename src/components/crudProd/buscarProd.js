import React from 'react';
import { request } from '../helper/helper';
import { Container, Row } from 'react-bootstrap';
import DataGrid from '../Grid/Grid';
import ConfirmationPromprs from '../Prompts/confirmation';
import Loading from "../Loading/Loading";
import MessagePrompt from '../Prompts/message';

const columns = [
    {
        dataField: '_id',
        text: 'ID',
        hidden: true,
    },
    {
        dataField: 'nombre',
        text: 'nombre',
    },
    {
        dataField: 'precio',
        text: 'precio',
    },
    {
        dataField: 'imgUrl',
        text: 'imgUrl',
    },
    {
        dataField: 'descripcion',
        text: 'descripcion',
    },
];

export default class CrudProdBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            idCrudProd: null,
            confirmation: {
                title: 'Eliminar',
                text: '¿Deseas eliminar?',
                show: false,
            },
            message: {
                text: '',
                show: false,
            },
        };

        this.onClickEditButton = this.onClickEditButton.bind(this);
        this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    onClickEditButton(row) {
        this.props.setIdCrudProd(row._id);

        this.props.changeTab('editar');
    }

    onClickDeleteButton(row) {
        this.setState({
            idCrudProd: row._id,
            confirmation: {
                ...this.state.confirmation,
                show: true,
            },
        });
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
            this.eliminarCrudProd()
        );
    }

    eliminarCrudProd() {
        this.setState({ loading: true });
        request
            .delete(`/crudProd/${this.state.idCrudProd}`)
            .then((response) => {
                this.setState({
                    loading: false,
                    message: {
                        text: response.data.msg,
                        show: true,
                    },
                });
                if (response.data.exito) this.reloadPage();
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    reloadPage() {
        setTimeout(() => {
            window.location.reload();
        }, 2500);
    }

    render() {
        return (
            <Container id="crudProd-buscar-container">
                <ConfirmationPromprs
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />

                <MessagePrompt
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}
                />

                <Loading show={this.state.loading} />

                <Row>
                    <h1>Buscar</h1>
                </Row>
                <Row>
                    <DataGrid
                        url="/crudProd"
                        columns={columns}
                        showEditButton={true}
                        showDeleteButton={true}
                        onClickEditButton={this.onClickEditButton}
                        onClickDeleteButton={this.onClickDeleteButton}
                    />
                </Row>
            </Container>
        );
    }
}
