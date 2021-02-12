import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <div>
        <Container fluid>
          <Row>
            <Col><h5>Hours</h5></Col>
            <Col><h5>Phone Number</h5></Col>
            <Col><h5>Address</h5></Col>
          </Row>
          <Row>
            <Col>M-T: 10:00am - 9:30pm</Col>
            <Col>(225)357-5958</Col>
            <Col>2750 Scenic Hwy. Baton Rouge, LA 70805</Col>
          </Row>
          <Row>
            <Col>Fri: 10:00am - 10:30pm</Col>
          </Row>
          <Row>
            <Col>Sat: 11:00am - 10:00pm</Col>
          </Row>
          <Row>
            <Col>Sun 11:00am - 7:00pm</Col>
          </Row>
          <Row className="justify-content-center">
            Copyright
          </Row>
        </Container>
    </div>
  )
}
