import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function CartItem({title, amount, price}) {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            <h6>{title}({amount})</h6>
            <p><b>$</b>{price}</p>
        </ListGroup.Item>
    )
}
