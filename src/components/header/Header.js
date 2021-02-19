import React from 'react';
import { Nav, NavDropdown, Jumbotron} from 'react-bootstrap';
import './header.css'
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
                <Nav className="justify-content-center bg-secondary" activeKey="/">
                    <Nav item>
                        <Nav.Link href="#" className='text-light font-weight-bold'>Menu</Nav.Link>
                    </Nav>
                    <Nav item>
                        <Nav.Link href="#" className='text-light font-weight-bold'>Info</Nav.Link>
                    </Nav>
                    <NavDropdown title="Cart" id="nav-dropdown"></NavDropdown>
                </Nav>
            </div>
        </div>
    )
}
