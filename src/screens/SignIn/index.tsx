import React from 'react';
import { FontAwesome } from '@expo/vector-icons'; 

import { 
    Container, 
    Header, 
    LoginWrapper,
    LoginContainer, 
    IconWrapper,
    Icon,
    FormWrapper,
    ForgetPassText,
    InputWrapper,
    Title
} from './styles'

import { LoginBtn } from '../../components/LoginBtn';
import { Input } from '../../components/Forms/Input'
export const SignIn = (): JSX.Element => {
    return (
        <Container>
            <Header />
            <LoginWrapper>
                <LoginContainer>
                    <Title>Login</Title>
                    <FormWrapper>
                        <Input placeholder="Digite o usuário." />
                        <InputWrapper>
                            <Input placeholder="Digite sua senha." secureTextEntry={true}/>
                            <FontAwesome name="eye-slash" size={24} color="#2E262640" />
                        </InputWrapper>
                        <ForgetPassText>Esqueci a senha</ForgetPassText>
                    </FormWrapper>

                    <LoginBtn />

                    <IconWrapper> 
                       <Icon name="google" size={20} color="#DB4437" />
                       <Icon name="facebook" size={20} color="#4267B2" />
                       <Icon name="twitter" size={20} color="#1DA1F2" />
                    </IconWrapper>
                </LoginContainer>   
            </LoginWrapper>
        </Container>
    )
}