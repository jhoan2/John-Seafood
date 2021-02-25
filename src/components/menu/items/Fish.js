import React from 'react'
import twofish from '../../../images/twofish.jpg';
import { Card, ListGroup } from 'react-bootstrap'
import MenutItemFooter from '../MenutItemFooter';
import products from '../../../products';

export default function Menu() {
    return (
        <div>
                <Card>
                    <Card.Img variant="top" src={twofish} />
                    <Card.Body>
                        <Card.Title>Fish</Card.Title>
                        <Card.Text>All served with French Fries, Salad, and Bread</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {products.map((product) => {
                            if (product.group === 'Fish') {
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
