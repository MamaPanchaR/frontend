import React from "react";
import { Container, Row } from "react-bootstrap";
import './Us.css';



export default class Us extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container className="mainContent mt-5">
                <Row className="usinfo mt-5 h3 fw-bold">
                    Bienvenidos a mamaPancha!
                </Row>
                <Row className="mainContent mt-5 lh-5 lh-sm text-center">
                    Nuestra empresa le brinda servicios y productos de la más alta calidad, dentro de la mejor oferta de precios. Nuestro personal está cualificado para emplear métodos adecuados para cada trabajo, brindándole, de este modo, seguridad y confiabilidad.

                    Encuentre la mejor oferta en calidad, servicio y precios. Nuestra trayectoria es la mejor garantía que podemos ofrecerle, y la fidelidad de nuestros clientes es nuestra mejor carta de presentación.

                    Le invitamos a conocer más sobre nuestros servicios y productos en nuestro sitio web. No dude en contactarnos para poder ofrecerle una atención personalizada. Estaremos complacidos de brindarle la ayuda que requiera.
                </Row>
            </Container>
        );
    }
}