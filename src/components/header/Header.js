import React from 'react';
import { Nav, Jumbotron} from 'react-bootstrap';
import './header.css';
import { Link } from "react-scroll";

export default function Header() {
    return (
        <div>
            <div className="title">
                        <Jumbotron fluid style={{marginBottom:0}} className='text-center bg-light hero-background'>
                            <div >
                                <h1>John Seafood</h1>
                            </div>
                        </Jumbotron>
            </div>
            <div>
                <Nav className="justify-content-center bg-secondary p-2" activeKey="/">
                    <Nav item>
                        <Link 
                        to="menu"
                        spy={true}
                        smooth={true}
                        duration={500} 
                        className='text-light font-weight-bold px-2'>
                            Menu
                        </Link>
                    </Nav>
                    <Link 
                    to="footer"
                    spy={true}
                    smooth={true}
                    duration={1200} 
                    className='text-light font-weight-bold px-2'>
                        Hours
                    </Link>
                    <Link 
                    to="cart"
                    spy={true}
                    smooth={true}
                    duration={500} 
                    className='text-light font-weight-bold px-2'>
                        Cart
                    </Link>
                </Nav>
            </div>
        </div>
    )
}
