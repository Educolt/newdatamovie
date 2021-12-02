import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(TouchableOpacity)`
    background-color: ${({theme}) => theme.colors.secondary};
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    height: ${RFValue(40)}px;
    border: 1px solid ${({theme}) => theme.colors.shape};
`;
export const BtnLogintext = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: 18px;
`;