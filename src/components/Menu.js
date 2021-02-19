import React from 'react'
import shrimp from '../images/shrimp.jpg';
import fish from '../images/twofish.jpg';
import popcornshrimp from '../images/popcorn shrimp.jpg';
import { Accordion, Card, CardDeck } from 'react-bootstrap'

export default function Menu() {
    return (
        <div>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={shrimp} />
                    <Card.Body>
                        <Card.Title>Shrimp</Card.Title>
                        <Card.Text>All served with French Fries, Salad, and Bread</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Accordion.Toggle>
                            <Card.Body>6 Shrimp</Card.Body>
                        </Accordion.Toggle>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={fish} />
                    <Card.Body>
                        <Card.Title>Fish</Card.Title>
                        <Card.Text>All served with French Fries, Salad, and Bread</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={popcornshrimp} />
                    <Card.Body>
                        <Card.Title>Popcorn Shrimp</Card.Title>
                        <Card.Text>All served with French Fries, Salad, and Bread</Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>       
        </div>
    )
}
