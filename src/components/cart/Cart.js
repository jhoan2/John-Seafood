import React from 'react'
import { Accordion, Card, Button, ListGroup} from 'react-bootstrap'
import CartItem from './CartItem';
import { connect } from 'react-redux';

const Cart = ({cart}) => {
    return (
        <div>
            <Accordion className='stick-top'>
                <Card>
                    <Card.Header className='text-center'>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Price Check - Cart
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ListGroup>
                        {cart.map((item) => {
                            return (
                                <CartItem key={item.id} {...item} />
                            )
                        })}
                        </ListGroup>
                        <p>Total</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

const mapState = (state) => {
    const { cart } = state.cart
    return {
        cart
    }
}

export default connect(mapState)(Cart)