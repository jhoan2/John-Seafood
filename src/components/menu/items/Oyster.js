import React from 'react'
import oyster from '../../../images/oyster.jpg';
import { Card, ListGroup } from 'react-bootstrap'
import MenutItemFooter from '../MenutItemFooter';
import products from '../../../products';

export default function Menu() {
    return (
        <div>
                <Card>
                    <Card.Img variant="top" src={oyster} />
                    <Card.Body>
                        <Card.Title>Oysters</Card.Title>
                        <Card.Text>All served with French Fries, Salad, and Bread</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {products.map((product) => {
                            if (product.group === 'Oysters') {
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
