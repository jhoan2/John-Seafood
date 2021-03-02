import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

export default function CartItem({title, amount, price}) {
    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center p-6">
            <h6>{title}</h6>
            <div>
                <AiFillPlusCircle size={30} />
                    ({amount})
                <AiFillMinusCircle size={30} />
            </div>
            <p>
                <b>$</b>{price}
            </p>
        </ListGroup.Item>
    )
}
