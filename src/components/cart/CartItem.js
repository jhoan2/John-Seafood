import React from 'react'
import { ListGroup, Col} from 'react-bootstrap'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../constants/ActionTypes';
import { connect } from 'react-redux';

function CartItem({title, amount, price, addToCart, removeFromCart}) {
    const itemTotal = (price * amount).toFixed(2)
    return (
        <ListGroup.Item className='d-flex align-items-center'>
            <Col>
                <h6>{title}</h6>
            </Col>
            <Col className='d-flex justify-content-center'>
                <AiFillPlusCircle size={30} onClick={() => addToCart()} />
                    ({amount})
                <AiFillMinusCircle size={30} onClick={() => removeFromCart()} / >
            </Col>
            <Col className='d-flex justify-content-end'>
                <p>
                    <b>$</b>{itemTotal}
                </p>
            </Col>
        </ListGroup.Item>
    )
}

const mapDispatch = (dispatch, ownProps) => {
    const { id, amount } = ownProps
    return {
        addToCart: () => dispatch({ type: ADD_TO_CART, payload: {id}}),
        removeFromCart: () => dispatch({ type: REMOVE_FROM_CART, payload: {id, amount} })
    }
}

export default connect(null, mapDispatch)(CartItem);