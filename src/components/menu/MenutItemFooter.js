import React from 'react'
import { ListGroup } from 'react-bootstrap';

export default function MenutItemFooter({product}) {
    return (
        <div>
                <ListGroup.Item action className="d-flex justify-content-between">
                <p>{product.title}</p>
                <p>${product.price}</p>
                </ListGroup.Item>
        </div>
    )
}
