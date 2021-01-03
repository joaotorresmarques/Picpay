import React from 'react';
import {Container, Details, Image,Title,Description} from './styled'
import img13 from '../../images/13.png'
export default function Banner(){
    return (
        <Container>
            <Details>
            <Title>Cobre um amigo</Title>
            <Description>
                Mantenha suas parceirias em dia, use o Picpay!
            </Description>
            </Details>
            <Image source={img13} />
        </Container>
    );
}