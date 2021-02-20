import React from 'react'
import { Accordion, Card, Button} from 'react-bootstrap'

export default function Cart() {
    return (
        <div>
            <Accordion className='stick-top'>
                <Card>
                    <Card.Header className='text-center'>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Cart
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}
