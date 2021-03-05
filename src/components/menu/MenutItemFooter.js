import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ADD_TO_CART } from '../../constants/ActionTypes';

function MenutItemFooter({product, addToCart}) {
    return (
        <div>
                <ListGroup.Item action onClick={() => addToCart()} className="d-flex justify-content-between" key={product.id}  >
                <p>{product.title}</p>
                <p>${product.price.toFixed(2)}</p>
                </ListGroup.Item>
        </div>
    )
}

const mapDispatch = (dispatch, ownProps) => {
    const { id } = ownProps.product
    return {
        addToCart: () => dispatch({ type: ADD_TO_CART, payload: {id}})
    }
}
export default connect(null, mapDispatch)(MenutItemFooter);

