import React from 'react';
import { StatusBar } from 'react-native'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import Suggestions from '../../components/Suggestions'
import Activities from '../../components/Activities'
import Tips from '../../components/Tips'
import Banner from '../../components/Banner'

import { Wrapper, Header, Container, Balance, BalanceContainer, BalanceTitle } from './styles'
export default function Home() {
    return (
       <>
       <StatusBar barStyle="light-content" backgroundColor="red" />
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>

                    <AntDesign name="gift" size={30} color="#10c86e" />

                </Header>
                <Suggestions/>
                <Activities />
                <Tips/>
                <Banner />
            </Container>
        </Wrapper>
        </>
    );
}