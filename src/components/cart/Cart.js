import React from 'react'
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap'
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { GET_TOTAL } from '../../constants/ActionTypes';

const Cart = ({cart, dispatch, total}) => {
    const toFixedTotal = total.toFixed(2)
    React.useEffect(() => {
        dispatch({ type: GET_TOTAL})
      })
    return (
        <div className='cart'>
            <Accordion>
                <Card>
                    <Card.Header className='text-center'>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Price Check - Cart
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {cart.length === 0 ?
                            <h3 className='text-center font-weight-bold'>Cart is currently empty. Add items from menu to calculate price!</h3> :
                        <ListGroup>
                        {cart.map((item) => {
                            return (
                                <CartItem key={item.id} {...item} />
                            )
                        })}
                        <h3 className='text-right py-3 px-3'>Total: ${toFixedTotal}</h3>
                        </ListGroup>
                        }
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

const mapState = (state) => {
    const { cart, total } = state.cart
    return {
        cart, total
    }
}

export default connect(mapState)(Cart)