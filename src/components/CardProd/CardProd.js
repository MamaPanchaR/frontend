import React from "react";
import { Card, Button } from "react-bootstrap";
import './CardProd.css';



export default class CardProd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Card className="">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Nombre producto</Card.Title>
                    <Card.Text>
                        Precio
                        Cantidad
                    </Card.Text>
                    <Button className="buyButton">Ver más</Button>
                </Card.Body>
            </Card>
        );
    }
}
