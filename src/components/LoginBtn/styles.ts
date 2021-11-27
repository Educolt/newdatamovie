import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'


export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    height: ${RFValue(40)};
`;
export const BtnLogintext = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: 18px;
`;