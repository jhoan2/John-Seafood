import React, { useState } from 'react'
import { Card, CardDeck, ListGroup} from 'react-bootstrap'
import MenutItemFooter from '../MenutItemFooter';
import products from '../../../products';
import pinechicken from '../../../images/pineapple chicken.jpg';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

export default function Menu() {
    const [showMore, setShowMore] = useState(false);
    return (
        <div>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={pinechicken} />
                    <Card.Body className="d-flex justify-content-between align-items-center p-6">
                            <Card.Title>
                                <h1>Add Ons</h1>
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
                                if (product.group === 'Add On') {
                                    return <MenutItemFooter key={product.id} product={product} />
                                } else {
                                    return []
                                }
                            })}                    
                        </ListGroup> 
                    }
                </Card>
            </CardDeck>       
        </div>
    )
}
