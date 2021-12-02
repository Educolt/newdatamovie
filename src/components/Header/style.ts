import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { Input } from '../../components/Forms/Input';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 40px 5px 15px 5px;
    width: 100%;
`;
export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.primary};
    margin: 0px 5px;
`;
export const SearchInput = styled(Input)`
    flex: 1;
    margin: 0px 10px;
    color: #ffffff;
    padding: 5px 10px;
`;