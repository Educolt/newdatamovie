import React from 'react';
import { TouchableOpacity } from 'react-native'

import { Container, Image, ImgContainer, Name } from './styles'

interface CardProps {
    name: string,
    source: string,
    callback: () => void
}

export const Card = ({name, source,callback}: CardProps): JSX.Element => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={callback}>
            <Container>
                <ImgContainer>
                    <Image source={{uri: source}} />
                </ ImgContainer>
                <Name>{name}</Name>
            </Container>
        </TouchableOpacity>
    )
};