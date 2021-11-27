import React from 'react';

import { FontAwesome } from '@expo/vector-icons'; 

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
    Test,
    CloseIcon
} from './styles'

export const MovieCardModal = () : JSX.Element => {
    return(
        <Test>
            <Container>
            <MovieInfo>
                <Image source={{uri: 'https://http2.mlstatic.com/D_NQ_NP_697417-MLB32324366598_092019-W.jpg'}}/>
                <InfoWrapper>
                    <Title>Rambo: Last blood</Title>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit exercitationem impedit mollitia error repudiandae officia ullam aliquid, officiis molestiae recusandae quos dolores hic fugit, sed natus earum aliquam at.</Description>
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
            <CloseIcon name="close" size={24} color="white" />
            </Container>
        </Test>
    );
}