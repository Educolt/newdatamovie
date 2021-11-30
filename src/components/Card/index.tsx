import React from 'react';
import { TouchableHighlight } from 'react-native'

import { Container, Image, Name } from './styles'

interface CardProps {
    name: string,
    source: string,
    description: string,
    func: () => void
}

export const Card = ({name, source, description,func}: CardProps): JSX.Element => {
    return (
        <TouchableHighlight onPress={func}>
            <Container>
                <Image source={{uri: source}} />
                <Name>{name}</Name>
            </Container>
        </TouchableHighlight>
    )
};