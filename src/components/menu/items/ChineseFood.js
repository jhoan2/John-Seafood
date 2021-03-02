import React , { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import MenutItemFooter from '../MenutItemFooter';
import products from '../../../products';
import noodle from '../../../images/shrimp noodle.jpg';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
export default function Menu() {
    const [showMore, setShowMore] = useState(false);
    return (
        <div>
                <Card>
                    <Card.Img variant="top" src={noodle} />
                    <Card.Body className='d-flex justify-content-between align-items-center p-6'>
                        <Card.Title>
                            <h1>Chinese Food</h1>
                            <h6>First 3 served with 1 Egg Roll and Rice</h6>
                        </Card.Title>
                        <h1>
                            {showMore ? 
                                <AiFillMinusCircle onClick={() => setShowMore(!showMore)} /> :
                                <AiFillPlusCircle onClick={() => setShowMore(!showMore)} />
                            }
                        </h1>
                    </Card.Body>
                    {showMore &&
                        <ListGroup className="list-group-flush">
                            {products.map((product) => {
                                if (product.group === 'Chinese Food') {
                                    return <MenutItemFooter key={product.id} product={product} />
                                } else {
                                    return []
                                }
                            })}                    
                        </ListGroup>
                    }
                </Card>      
        </div>
    )
}
