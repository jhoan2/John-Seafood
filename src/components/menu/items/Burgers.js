import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import MenutItemFooter from '../MenutItemFooter';
import products from '../../../products';
import burger from '../../../images/shrimp burger.jpg'
export default function Menu() {
    return (
        <div>
                <Card>
                    <Card.Img variant="top" src={burger}/>
                    <Card.Body>
                        <Card.Title>Burgers</Card.Title>
                        <Card.Text>Add French Fries: $1.00 more</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {products.map((product) => {
                            if (product.group === 'Burgers') {
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
