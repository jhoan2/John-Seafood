import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import MenutItemFooter from '../MenutItemFooter';
import products from '../../../products';
import noodle from '../../../images/shrimp noodle.jpg'
export default function Menu() {
    return (
        <div>
                <Card>
                    <Card.Img variant="top" src={noodle} />
                    <Card.Body>
                        <Card.Title>Chinese Food</Card.Title>
                        <Card.Text>First 3 served with 1 Egg Roll and Rice</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {products.map((product) => {
                            if (product.group === 'Chinese Food') {
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
