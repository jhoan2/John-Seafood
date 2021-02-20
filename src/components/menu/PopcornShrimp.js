import React from 'react'
import popcornshrimp from '../../images/popcorn shrimp.jpg';
import { Card, CardDeck, ListGroup } from 'react-bootstrap'
import MenutItemFooter from './MenutItemFooter';
import products from '../../products';

export default function Menu() {
    return (
        <div>
                <Card>
                    <Card.Img variant="top" src={popcornshrimp} />
                    <Card.Body>
                        <Card.Title>Popcorn Shrimp</Card.Title>
                        <Card.Text>All served with French Fries, Salad, and Bread</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {products.map((product) => {
                            if (product.group === 'Popcorn Shrimp') {
                                return <MenutItemFooter key={product.id} product={product} />
                            } else {
                                return []
                            }
                        })}                    
                    </ListGroup>
                </Card>      
        </div>
    )
}
