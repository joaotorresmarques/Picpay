import React, {useState} from 'react';
import { Switch } from 'react-native'
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons'

import { 
    Wrapper, 
    Header, 
    HeaderContainer, 
    Title, 
    BalanceContainer, 
    Value, 
    Bold, 
    EyeButton, 
    Info, 
    Actions, 
    Action, 
    ActionLabel, 
    UseBalance, 
    UseBalanceText, 
    Switchz,
    PayMethodsTitle,
    PaymentMethods,
    Card,
    CardBody,
    CardDetails,
    CardInfo,
    CardTitle,
    Img,
    AddButton,
    AddLabel,
    InfoPromo,
    TextPromo
} from './styled'
import CreditCard from '../../images/credit-card.png';

export default function Wallet() {
    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleToggleVisible(){
        setIsVisible(!isVisible);
    }

    function handleToggleUseBalance(){
        setUseBalance(!useBalance);
    }


    return (
        <Wrapper>
            <Header colors={
                useBalance ? ['#52E7BC', '#1AB563']
                : ['#D3D3D3', '#868686']
            }>
                <HeaderContainer>
                    <Title>Saldo Picpay</Title>

                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                        </Value>
                        <EyeButton onPress={handleToggleVisible}>
                            <Feather name={isVisible? 'eye' : 'eye-off'} size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>
                    <Info>
                        Seu saldo está rendendo 100% do CDI.
                    </Info>

                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" size={20} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>

                        <Action>
                            <FontAwesome name="bank" size={20} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>

            </Header>
            <UseBalance>
                <UseBalanceText>
                    Usar saldo ao pagar
                    </UseBalanceText>
                <Switchz
                    onValueChange={handleToggleUseBalance}
                    value={useBalance}>
                </Switchz>
            </UseBalance>

            <PaymentMethods>
                <PayMethodsTitle>
                    Formas de Pagamentos
                </PayMethodsTitle>
            </PaymentMethods>

            <Card>
           <CardBody>
           <CardDetails>
                <CardTitle>
                    Cadastre seu cartão de credito
                </CardTitle>

                <CardInfo>
                    Cadastre seu cartão de credito para fazer pagamentos
                </CardInfo>

            </CardDetails>
            <Img source={CreditCard} resizeMode="contain" />
           </CardBody>
           
           <AddButton>
            <AntDesign name="pluscircleo" size={20} color="#0DB060" />
            <AddLabel>
                Adicionar cartão de credito
            </AddLabel>
           </AddButton>
            </Card>

            <InfoPromo>
                <FontAwesome5 name="ticket-alt" size={24} color="#0DB060" />
                <TextPromo>
                    Usar Código Promocional
                </TextPromo>
            </InfoPromo>
        </Wrapper>
    )
}