import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';

const copyRight = () => {
  const date = new Date();
  let year = date.getFullYear()
  return year
}

export default function Footer() {
  const year = copyRight()
  return (
    <div className='footer'>
        <Container fluid className='text-center bg-light'>
          <Row className='pt-3'>
            <Col xs={12} md={4}>
              <h5>Hours</h5>
              <ul className='list-unstyled'>
                <li >M-T: 10:00am - 9:30pm</li>
                <li>Fri: 10:00am - 10:30pm</li>
                <li>Sat: 11:00am - 10:00pm</li>
                <li>Sun 11:00am - 7:00pm</li>
              </ul> 
            </Col>
            <Col xs={12} md={4}>
              <h5>Phone Number</h5>
              <p>(225) 357-5958</p>
            </Col>
            <Col xs={12} md={4}>
              <h5>Address</h5>
              <p>2750 Scenic Hwy. Baton Rouge, LA 70805</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <p className='px-2'>
              Copyright © John Seafood {year}
            </p>
            |
            <Link
            to="title"
            spy={true}
            smooth={true}
            duration={1500} className='px-2'>
                Top of the Page
            </Link>
          </Row>
        </Container>
    </div>
  )
}
