import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import Modal from 'react-native-modal';

import { 
    Container, 
    MovieInfo, 
    Image,
    InfoWrapper, 
    Title, 
    Description, 
    BtnContainer,
    Icon,
    ButtonPlay,
    BtnText,
    CloseBtnContainer,
} from './styles'

interface MovieData {
    imdb_id: string
    title: string,
    description: string,
    uri: string,
    year: string
}

interface IMovieModalDataProps {
    movie: MovieData;
    visible: boolean,
}

export const MovieCardModal = ({movie, visible }:IMovieModalDataProps) : JSX.Element => {

    const [isVisible, setIsVisible] = useState(visible);

    return(
        <Modal isVisible={isVisible}>
            <Container>
            <MovieInfo>
                <Image source={{uri: movie.uri}}/>
                <InfoWrapper>
                    <Title>{movie.title}d</Title>
                    <Description>{movie.description}</Description>
                </InfoWrapper>
            </MovieInfo>
            
            <BtnContainer>
                <ButtonPlay>
                    <Icon name="play" size={20} color="white"/>
                    <BtnText>Assistir</BtnText>
                </ButtonPlay>
                
                <ButtonPlay>
                    <Icon name="plus" size={20} color="white"/>
                    <BtnText>Catalogar</BtnText>
                </ButtonPlay>
            </BtnContainer>
            <CloseBtnContainer onPress={() => {setIsVisible(!isVisible)}}>
                <FontAwesome name="close" size={24} color="white" />
            </CloseBtnContainer>
            </Container>
        </Modal>
    );
}