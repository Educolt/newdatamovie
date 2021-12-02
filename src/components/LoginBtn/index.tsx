import React from 'react';

import { 
    Container,
    BtnLogintext  
} from './styles'

export const LoginBtn = ({...rest}): JSX.Element => {
    return (
            <Container {...rest}>
                <BtnLogintext>
                    Entrar
                </BtnLogintext>
            </Container>
    )
}