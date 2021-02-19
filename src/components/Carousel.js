import React from 'react'
import { Carousel } from 'react-bootstrap';
import twofish from '../images/twofish.jpg';
import combo from '../images/combination order.jpg';
import oyster from '../images/oyster.jpg';
import './carousel.css'
export default function carousel() {
    return (
        <div>
            <div>
                <Carousel style={{marginBottom: 50}}>
                    <Carousel.Item interval={3000}>
                        <img 
                            className="d-block w-100"
                            src={twofish}
                            alt="first slide"
                        />
                        <Carousel.Caption className='text-dark'>
                            <h3>2 Fish</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={combo}
                            alt="second slide"
                        />
                        <Carousel.Caption className='text-dark'>
                            <h3>Popcorn Shrimp 4 Fish Strips</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={oyster}
                            alt="third slide"
                        />
                        <Carousel.Caption className='text-dark'>
                            <h3>6 Oysters</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
