import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'

export default function CartItem({title, amount, price}) {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            <h6>{title}</h6>
            <p>
                <Button size='sm'> + </Button>
                    ({amount})
                <Button size='sm'> - </Button>
                <b>$</b>{price}
            </p>
        </ListGroup.Item>
    )
}
