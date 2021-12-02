import React, { useState, useEffect } from 'react';

// alert
import AwesomeAlert from 'react-native-awesome-alerts';

// styled components
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
    BtnText
} from './styles'

// types
interface MovieData {
    imdb_id: string
    title: string,
    description: string,
    uri: string,
    year: string
}

interface IMovieModalDataProps {
    movie: MovieData;
    isCatalogTrue: boolean;
}

export const MovieCardModal = ({movie, isCatalogTrue}: IMovieModalDataProps): JSX.Element => {

    // state
    const [ isCatalog, setIsCatalog ] = useState(isCatalogTrue);
    const [ isAlert, setIsAlert ] = useState(false);

    const {uri, title, description} = movie;

    return(
        <Container>
            <MovieInfo>
                <Image source={{uri}}/>
                    <InfoWrapper>
                        <Title>{title}</Title>
                        <Description>{description}</Description>
                    </InfoWrapper>
            </MovieInfo>
                
            <BtnContainer>
                <ButtonPlay activeOpacity={0.8} onPress={() => {
                    setIsAlert(true);
                }}>
                    <Icon name="play" size={20} color="white"/>
                    <BtnText>Assistir</BtnText>
                </ButtonPlay>
                    
                <ButtonPlay activeOpacity={0.8} onPress={() => setIsCatalog(!isCatalog)}>
                    {
                        isCatalog ? 
                        <Icon name="check" size={20} color="white"/>: 
                        <Icon name="plus" size={20} color="white"/>
                    }
                    <BtnText>Catalogar</BtnText>
                </ButtonPlay>
            </BtnContainer>
            <AwesomeAlert
                show={isAlert}
                showProgress={false}
                title="Try it Later !"
                message='This feature is on development, try it later ! ;)'
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Nice ;)."
                confirmButtonColor="#ffd60a"
                onCancelPressed={() => {
                    setIsAlert(false);
                }}
                onConfirmPressed={() => {
                    setIsAlert(false)
                }}
            />
        </Container>              
    );
}