import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { InputForm } from '../../components/Forms/InputForm'

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.primary};
    align-items: center;
`;
export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({theme}) => theme.colors.secondary}; 
    justify-content: center;
    align-items: center;
    border: 1px solid ${({theme}) => theme.colors.shape};
`;
export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    font-weight: bold;
    text-align: center;
`;
export const Logo = styled.Text`
    font-size: ${RFValue(24)}px;
    font-weight: bold;
    text-align: center;
    color: ${({theme}) => theme.colors.text}; 
`;
export const LogoContainer = styled.View`
    border-radius: 5px;
    padding: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const LogoIcon = styled(MaterialCommunityIcons)`
    padding-right: 10px;
`
export const LoginContainer = styled.View`
    width: 100%;
    height: 616px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.colors.shape};
    position: relative;
    top: -${RFValue(100)}px;
    padding:0px ${RFValue(35)}px;
    justify-content: space-around;
`;
export const LoginWrapper = styled.View`
    width: 100%;
    padding: 0px ${RFValue(38)}px;
`;

export const IconWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
`;
export const Icon= styled(FontAwesome)`
    padding: 10px;
    border-radius: 50px;
`;
export const Form = styled.View`
    width: 100%;
    align-items: flex-end;
`;
export const ForgetPassText = styled.Text`
    font-size: ${RFValue(9)}px;
    color: #9A9A9A;
`
export const InputWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items:center;
`;
export const PassIconContainer = styled(TouchableOpacity)`
    position: absolute;
    right: 0;
    margin-right: 10px;
    border-radius: 50px;
    padding-top: 10px;
`;
export const PassIcon = styled(FontAwesome)`
    border-radius: 50px;
`;
export const BtnIconContainer = styled(TouchableOpacity)`
    border-radius: 50px;
`;
export const InputPass = styled(InputForm)`
    margin-bottom: 0px;
    padding-right: 35px;
    margin-top: 10px;
`;
