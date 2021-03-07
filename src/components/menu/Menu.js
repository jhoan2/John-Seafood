import React from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import Shrimp from './items/Shrimp';
import Fish from './items/Fish';
import Oyster from './items/Oyster'
import Combo from './items/Combo'
import Burger from './items/Burgers';
import PoBoys from './items/PoBoys';
import Chicken from './items/Chicken';
import PopcornShrimp from './items/PopcornShrimp';
import ChineseFood from './items/ChineseFood';
import Salad from './items/Salad';
import Gumbo from './items/Gumbo';
import RedBean from './items/RedBean';
import PartyTray from './items/PartyTray';
import PorkChop from './items/PorkChop';
import AddOn from './items/AddOn';

export default function Body() {
    return (
        <Container fluid style={{padding:50}} className='menu'>
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
