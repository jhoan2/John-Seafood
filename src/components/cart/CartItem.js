import React from 'react'
import { ListGroup, Col} from 'react-bootstrap'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

export default function CartItem({title, amount, price}) {
    return (
        <ListGroup.Item className='d-flex align-items-center'>
            <Col>
                <h6>{title}</h6>
            </Col>
            <Col className='d-flex justify-content-center'>
                <AiFillPlusCircle size={30} />
                    ({amount})
                <AiFillMinusCircle size={30} />
            </Col>
            <Col className='d-flex justify-content-end'>
                <p>
                    <b>$</b>{price}
                </p>
            </Col>
        </ListGroup.Item>
    )
}
