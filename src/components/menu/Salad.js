import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import MenutItemFooter from './MenutItemFooter';
import products from '../../products';
import chickensalad from '../../images/chicken salad.jpg'
export default function Menu() {
    return (
        <div>
                <Card >
                    <Card.Img variant="top" src={chickensalad} />
                    <Card.Body>
                        <Card.Title>Salad</Card.Title>
                        <Card.Text>With Ranch Dressing</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {products.map((product) => {
                            if (product.group === 'Salad') {
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
