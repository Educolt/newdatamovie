import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { FontAwesome } from '@expo/vector-icons'; 

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.white};
    align-items: center;
`;
export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({theme}) => theme.colors.primary}; 
`;
export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    font-weight: bold;
    text-align: center;
`;
export const LoginContainer = styled.View`
    width: 100%;
    height: 616px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.colors.shape};
    position: relative;
    top: -${RFValue(100)}px;
    padding:${RFValue(47)}px ${RFValue(52)}px;
    justify-content: space-between;
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
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 10px;
    border-radius: 50px;

`;
export const FormWrapper = styled.View`
    width: 100%;
    justify-content:space-between;
    align-items: center;
`;
export const ForgetPassText = styled.Text`
    font-size: ${RFValue(9)}px;
    color: #9A9A9A;
`
export const InputWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
`;
