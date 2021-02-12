import React from 'react';
import { Container, Row, Nav, NavDropdown, Carousel } from 'react-bootstrap';
import twofish from '../images/twofish.jpg';
import combo from '../images/combination order.jpg';
import oyster from '../images/oyster.jpg';

export default function Header() {
    return (
        <div>
            <div className="title">
                <Container fluid>
                    <Row className="justify-content-center">
                        <h1>John Seafood</h1>
                    </Row>
                </Container>
            </div>
            <div>
                <Nav className="justify-content-center" activeKey="/">
                    <Nav item>
                        <Nav.Link href="#">Menu</Nav.Link>
                    </Nav>
                    <Nav item>
                        <Nav.Link href="#">Info</Nav.Link>
                    </Nav>
                    <NavDropdown title="Cart" id="nav-dropdown"></NavDropdown>
                </Nav>
            </div>
            <div>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img 
                            className="d-block w-100"
                            src={twofish}
                            alt="first slide"
                        />
                        <Carousel.Caption>
                            <h3>2 Fish</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={combo}
                            alt="second slide"
                        />
                        <Carousel.Caption>
                            <h3>Popcorn Shrimp 4 Fish Strips</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={oyster}
                            alt="third slide"
                        />
                        <Carousel.Caption>
                            <h3>6 Oysters</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
