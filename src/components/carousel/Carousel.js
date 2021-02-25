import React from 'react'
import { Carousel } from 'react-bootstrap';
import './carousel.css'
import sesame from '../../images/sesame chicken.jpg';
import shrimppoboy from '../../images/shrimp po boy.jpg';
import oyster from '../../images/oyster.jpg';
import bbqwings from '../../images/bbq wings.jpg';
import eggrollsandrice from '../../images/2eggrollsandrice.jpg';
export default function carousel() {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img 
                            className="d-block w-100"
                            src={sesame}
                            alt="first slide"
                        />
                        <Carousel.Caption>
                            <h3>Sesame Chicken</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={shrimppoboy}
                            alt="second slide"
                        />
                        <Carousel.Caption>
                            <h3>Shrimp Po-Boy</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={bbqwings}
                            alt="third slide"
                        />
                        <Carousel.Caption>
                            <h3>BBQ Wings</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={oyster}
                            alt="fourth slide"
                        />
                        <Carousel.Caption>
                            <h3>6 Oysters</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={eggrollsandrice}
                            alt="fifth slide"
                        />
                        <Carousel.Caption>
                            <h3>3 Egg Rolls and Rice</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
