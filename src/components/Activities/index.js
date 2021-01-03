import React from 'react';
import { EvilIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    DataLabel,
    Actions,
    Options,
    OptionLabel,
} from './styled'
import avatar from '../../images/avatar.png'
export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@Joaomarcos1</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>João Marcos</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>
                        <Divider></Divider>

                        <EvilIcons name="lock" size={25} color="#fff" />
                        <DataLabel>há 1 ano</DataLabel>


                    </Details>
                    <Actions>
                        <Options>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Options>

                        <Options>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Options>

                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    )
}