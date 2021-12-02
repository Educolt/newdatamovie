import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    padding: 10px;
    margin: 5px;
    border-radius: 8px;
    align-items: center;
`;
export const Image = styled.Image`
    width: ${RFValue(172)}px;
    height: ${RFValue(258)}px;
    border-radius: 8px;
`;
export const ImgContainer = styled.View`
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.colors.text};
`

export const Name = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.text};
`;
