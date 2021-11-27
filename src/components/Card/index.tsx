import React from 'react';

import { Container, Image, Name } from './styles'

interface CardProps {
    name: string,
    source: string
}

export const Card = ({name, source}: CardProps): JSX.Element => {
    return (
        <Container>
            <Image source={{uri: source}} />
            <Name>{name}</Name>
        </Container>
    )
};