import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableHighlight } from 'react-native';

export const Container = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.colors.modalBackground};
    padding: 15px 10px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;
export const MovieInfo = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
`;
export const InfoWrapper = styled.View`
    width: 100%;
    flex: 1;
    padding: 10px;
`;
export const Image = styled.Image`
    width: 137px;
    height: 208px;
    border-radius: 5px;
`;
export const Title = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.text};
    margin-bottom:20px;
`;
export const BtnText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.text};
`;
export const Description = styled.Text`
    font-size: 14px;
    color: ${({theme}) => theme.colors.text};
`;
export const BtnContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    padding: 0px 10px;
`;
export const Icon = styled(Feather)`
    margin-right: 10px;
`;
export const CloseBtnContainer = styled(TouchableHighlight)`
    position: absolute;
    right: 0;
    margin: 10px;
`;
export const CloseIcon = styled(FontAwesome)`
    position: absolute;
    right: 0;
    margin: 10px;
`;
export const ButtonPlay = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.btnBackground};
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid ${({theme}) => theme.colors.shape};
`;