import React from 'react'
import { Card, CardDeck, ListGroup } from 'react-bootstrap'
import MenutItemFooter from './MenutItemFooter';
import products from '../../products';

export default function Menu() {
    return (
        <div>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" />
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
            </CardDeck>       
        </div>
    )
}
