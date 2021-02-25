import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import MenutItemFooter from '../MenutItemFooter';
import products from '../../../products';
import gumbo from '../../../images/gumbo.jpg';

export default function Menu() {
    return (
        <div>
                <Card>
                    <Card.Img variant="top" src={gumbo} />
                    <Card.Body>
                        <Card.Title>Gumbo</Card.Title>
                        <Card.Text>All served with crackers</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {products.map((product) => {
                            if (product.group === 'Gumbo') {
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
