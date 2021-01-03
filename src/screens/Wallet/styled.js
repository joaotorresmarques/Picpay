import styled from 'styled-components/native';
import { Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
export const Wrapper = styled.View`
    background: #000;
    flex:1;
`;

export const Header = styled(LinearGradient)`
    height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
${Platform.select({
    android: {
        marginTop: 25,
    }
})};

flex:1;
align-items: center;
justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const BalanceContainer = styled.View`
    margin:10px 0;
    flex-direction: row;
    align-items: center
`;
export const Value = styled.Text`
    font-size: 38px;
    color: #fff;
    font-weight: 200
`;
export const Bold = styled.Text`
font-size: 38px;
font-weight: bold`;

export const EyeButton = styled.TouchableOpacity`
    margin-left:10px
`;

export const Info = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`;

export const Actions = styled.View`
flex-direction: row;
margin-top: 30px;
`;
export const Action = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    justify-content: center;
    border: 1px solid rgba(255,255,255,0.6);
    border-radius: 24px;
    padding:10px;
    margin-right:10px;
    margin-top: 10px;
    width:150px;
    height:45px;
`;
export const ActionLabel = styled.Text`
color:#fff;
font-size:16px;
margin-left: 10px;
`;

export const UseBalance = styled.View`
background: #1C1C1E;
height: 60px;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`;
export const UseBalanceText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`;
export const Switchz = styled.Switch``;

export const PaymentMethods = styled.View`
    margin-top: 25px;
    padding: 0 16px;
`;

export const PayMethodsTitle = styled.Text`
    color: #8E8E93;
    text-transform: uppercase;
`;

export const Card = styled.View`
    background: #1E232A;
    padding:20px;
    border-radius: 8px;
    margin-top:10px;
`;

export const CardBody = styled.View`
flex-direction: row;

`;

export const CardDetails = styled.View`
    flex:1;
    margin-right: 20px;
`;
export const CardInfo = styled.Text`
    font-size:16px;
    color: rgba(255,255,255,0.8);
    margin-top:15px;
`;
export const CardTitle = styled.Text`
    font-size:18px;
    font-weight: bold;
    color: #fff;
    
`;

export const Img = styled.Image`
    width:60px;
`;

export const AddButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding-top:20px;
`;
export const AddLabel = styled.Text`
    margin-left: 10px;
    color:#0DB060;
    font-size:18px;
    font-weight: bold;
`;

export const InfoPromo = styled.TouchableOpacity`
    height:60px;
    padding:10px;
    justify-content:center;
    align-items:center;
    flex-direction: row
`;
export const TextPromo = styled.Text`
    color: #0DB060;
    margin-left: 15px;
    text-decoration: underline;
`;