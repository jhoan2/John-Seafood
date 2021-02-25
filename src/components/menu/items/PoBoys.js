import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import MenutItemFooter from '../MenutItemFooter';
import products from '../../../products';
import poboy from '../../../images/sausage po boy.jpg';

export default function Menu() {
    return (
        <div>
                <Card>
                    <Card.Img variant="top" src={poboy} />
                    <Card.Body>
                        <Card.Title>Po-boys</Card.Title>
                        <Card.Text>All served with French Fries</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {products.map((product) => {
                            if (product.group === 'Po-Boys') {
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
