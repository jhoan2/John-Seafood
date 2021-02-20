import React from 'react';
import { Container, CardColumns } from 'react-bootstrap';
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
        <Container fluid style={{padding:50}}>
            <CardColumns>
                <Shrimp />
                <Oyster />
                <PopcornShrimp />     
                <Burger />
                <PoBoys />
                <Salad />
                <Chicken />
                <ChineseFood />
                <Combo />
                <PorkChop />
                <Gumbo />
                <RedBean />
                <PartyTray />
                <Fish />
                <AddOn />
            </CardColumns>
        </Container>
    )
}
