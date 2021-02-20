import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import MenutItemFooter from './MenutItemFooter';
import products from '../../products';
import redbean from '../../images/redbean.jpg';

export default function Menu() {
    return (
        <div>
                <Card>
                    <Card.Img variant="top" src={redbean} />
                    <Card.Body>
                        <Card.Title>Red Bean</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {products.map((product) => {
                            if (product.group === 'Red Bean') {
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
