import React from 'react';
import { Container, Row, Col, CardColumns } from 'react-bootstrap';
import Shrimp from './Shrimp';
import Fish from './Fish';
import Oyster from './Oyster'
import Combo from './Combo'
import Burger from './Burgers';
import PoBoys from './PoBoys';
import Chicken from './Chicken';
import PopcornShrimp from './PopcornShrimp';
import ChineseFood from './ChineseFood';
import Salad from './Salad';
import Gumbo from './Gumbo';
import RedBean from './RedBean';
import PartyTray from './PartyTray';
import PorkChop from './PorkChop';
import AddOn from './AddOn';

export default function Body() {
    return (
        <Container fluid style={{padding: 50}}>
            <CardColumns>
            <Row>
                <Col><Shrimp /></Col>
                <Col><Oyster /></Col>
                <Col><PopcornShrimp /></Col>
 
            </Row>
            <Row>
                <Col><Burger /></Col>
                <Col><PoBoys /></Col>
                <Col><Salad /></Col>

            </Row> 
            <Row>
                <Col><Chicken /></Col>
                <Col><ChineseFood /></Col>
                <Col><Combo /></Col>
            </Row>
            <Row>
                <Col><PorkChop /></Col>
                <Col><Gumbo /></Col>
                <Col><RedBean /></Col>
            </Row>
            <Row>
                <Col><PartyTray /></Col>
                <Col><Fish /></Col>

                <Col><AddOn /></Col>
            </Row>
            </CardColumns>
        </Container>
    )
}
