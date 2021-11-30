import React from 'react';

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
    Title,
    PassIcon,
    Logo
} from './styles'

import { LoginBtn } from '../../components/LoginBtn';
import { Input } from '../../components/Forms/Input'
export const SignIn = (): JSX.Element => {
    return (
        <Container>
            <Header>
                <Logo>Logo</Logo>
            </Header>
            <LoginWrapper>
                <LoginContainer>
                    <Title>SignIn</Title>
                    <FormWrapper>
                        <Input placeholder="Digite o usuário." />
                        <InputWrapper>
                            <Input placeholder="Digite sua senha." secureTextEntry={true}/>
                            <PassIcon name="eye-slash" size={20} color="#2E262640" />
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