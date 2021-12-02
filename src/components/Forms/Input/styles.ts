import styled from 'styled-components/native';
import { TextInput } from 'react-native'

export const Container = styled(TextInput)`
    border: 1px solid ${({theme}) => theme.colors.shape};
    border-radius: 8px;
    padding: 5px 5px;
    width: 100%;
`;