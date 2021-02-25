import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import MenutItemFooter from '../MenutItemFooter';
import products from '../../../products';
import porkchop from '../../../images/porkchops.jpg';

export default function Menu() {
    return (
        <div>
                <Card>
                    <Card.Img variant="top" src={porkchop}/>
                    <Card.Body>
                        <Card.Title>Pork Chop</Card.Title>
                        <Card.Text>All served with French Fries</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {products.map((product) => {
                            if (product.group === 'Pork Chop') {
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
