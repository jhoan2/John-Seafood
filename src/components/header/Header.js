import React from 'react';
import { Nav, Jumbotron} from 'react-bootstrap';
import { Link } from "react-scroll";
import brickwall from '../../images/brickwall.jpg';

export default function Header() {
    return (
        <div>
            <div className="title">
                        <Jumbotron fluid 
                        style={{
                            marginBottom:0, 
                            backgroundSize: 'contain',
                            backgroundImage: `url(${brickwall})`,
                            opacity: 0.8
                        }} 
                        >
                            <div>
                                <h1 className='text-center text-white' style={{opacity: 1, fontSize: 100, fontFamily: 'Ravi Prakash'}}>John Seafood</h1>
                            </div>
                        </Jumbotron>
            </div>
            <div>
                <Nav className="justify-content-center bg-secondary p-2" activeKey="/">
                    <Link 
                    to="menu"
                    spy={true}
                    smooth={true}
                    duration={500} 
                    className='text-light font-weight-bold px-2'>
                        Menu
                    </Link>
                    <Link 
                    to="cart"
                    spy={true}
                    smooth={true}
                    duration={500} 
                    className='text-light font-weight-bold px-2'>
                        Cart
                    </Link>
                    <Link 
                    to="footer"
                    spy={true}
                    smooth={true}
                    duration={1200} 
                    className='text-light font-weight-bold px-2'>
                        Hours
                    </Link>
                </Nav>
            </div>
        </div>
    )
}
