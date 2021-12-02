import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { Input } from '../../components/Forms/Input';
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    width: 100%;
    height: 100%;
`
export const Title = styled.Text`
    font-size:${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text};
    font-weight: bold;
`;
export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.primary};
    margin: 0px 5px;
`;
export const ListContainer = styled.ScrollView`
    background-color: ${({theme}) => theme.colors.primary};
    height: 100%;
    padding: 15px 0px 0px 10px;
`;
export const ListWrapper = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.colors.secondary};
    border: 1px solid ${({theme}) => theme.colors.shape};
    padding: 10px;
    margin-bottom: 10px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`;
export const Carrousel = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator:false,
})`
    width: 100%;
    border-radius: 8px;
`;