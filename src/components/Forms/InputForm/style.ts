import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
`;
export const Error = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.primary};
    background-color: ${({theme}) => theme.colors.secondary};
    border-radius: 5px;
    padding: 5px;
    margin: 5px 0px;
    border: 1px solid ${({theme}) => theme.colors.shape}
`;