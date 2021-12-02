import React, { useState, useContext } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

// react-hook-form
import { useForm } from 'react-hook-form'

// alert
import AwesomeAlert from 'react-native-awesome-alerts';

// styled components
import { 
    Container, 
    Header, 
    LoginWrapper,
    LoginContainer, 
    IconWrapper,
    Icon,
    Form,
    ForgetPassText,
    InputWrapper,
    Title,
    PassIcon,
    Logo,
    LogoContainer,
    LogoIcon,
    BtnIconContainer,
    PassIconContainer,
    InputPass,
} from './styles'

// app components
import { LoginBtn } from '../../components/LoginBtn';
import { InputForm } from '../../components/Forms/InputForm'

// app hooks
import { useAuth } from '../../hooks/auth'

// types
interface FormData {
    username: string;
    password: string;
}

export const SignIn = (): JSX.Element => {
    // state
    const [isPassVisible, setIsPassVisible] = useState(true);
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [alertText, setAlertText] = useState('');

    // future features
    const [isAlertBtnsVisible, setIsAlertBtnsVisible] = useState(false);

    // react-hook-form
    const {
        control,
        handleSubmit,
    } = useForm();

    // toggle password visible state
    const togglePassVisible = () => {setIsPassVisible(!isPassVisible)}

    // destructed app hook return
    const { user, signIn } = useAuth();

    const onSubmitForm = (form: FormData) => {

        if((form.username === '') || (form.username === undefined)) {
            setIsAlertVisible(true);
            setAlertText('Por favor! Digite o usuário.');
            return;
        } else if((form.password === '') || (form.password === undefined)) {
            setIsAlertVisible(true)
            setAlertText('Por favor ! Digite a senha.');
            return;
        }

        if((user.password === form.password) && (user.username === form.username)) {
            setIsAlertVisible(true)
            setAlertText('Usuário Autenticado.');
            signIn();
        }  else {
            setIsAlertVisible(true)
            setAlertText('Usuário nao existe.');
            return;
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <LogoContainer>
                        <LogoIcon name="movie" size={30} />
                        <Logo>ND_Movie</Logo>
                    </LogoContainer>
                </Header>
                <LoginWrapper>
                    <LoginContainer>
                        <Title>SignIn</Title>
                        <Form>
                            <InputForm 
                                placeholder="Digite o usuário."
                                control={control}
                                name="username"
                                secureTextEntry={false}
                            />
                            <InputWrapper>
                                <InputPass 
                                    placeholder="Digite sua senha." 
                                    secureTextEntry={isPassVisible}
                                    control={control}
                                    name="password"
                                />
                                <PassIconContainer activeOpacity={0.5} onPress={togglePassVisible}>
                                    {!isPassVisible ? 
                                        (<PassIcon name="eye" size={20} color="#2E262640" />):
                                        (<PassIcon name="eye-slash" size={20} color="#2E262640" />)
                                    }
                                </PassIconContainer>
                            </InputWrapper>
                            <ForgetPassText>Esqueci a senha</ForgetPassText>
                        </Form>

                        <LoginBtn activeOpacity={0.5} onPress={handleSubmit(onSubmitForm)}/>

                        <IconWrapper> 
                            <BtnIconContainer activeOpacity={0.5} onPress={() => setIsAlertBtnsVisible(true)}>
                                <Icon name="google" size={20} color="#DB4437" />    
                            </BtnIconContainer>
                        
                        <BtnIconContainer activeOpacity={0.5} onPress={() => setIsAlertBtnsVisible(true)}>
                                <Icon name="facebook" size={20} color="#4267B2" />
                        </BtnIconContainer>
                        
                        <BtnIconContainer activeOpacity={0.5} onPress={() => setIsAlertBtnsVisible(true)}>
                                <Icon name="twitter" size={20} color="#1DA1F2" />
                        </BtnIconContainer>
                        </IconWrapper>
                    </LoginContainer>   
                </LoginWrapper>
                <AwesomeAlert
                show={isAlertVisible}
                showProgress={false}
                title="Campo obrigatório !"
                message={alertText}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Ok"
                confirmButtonColor="#ffd60a"
                onCancelPressed={() => {
                    setIsAlertVisible(false);
                }}
                onConfirmPressed={() => {
                    setIsAlertVisible(false)
                }}
                />
                <AwesomeAlert
                show={isAlertBtnsVisible}
                showProgress={false}
                title="Try it Later ! ;)"
                message='This feature is on development, try it later ! ;)'
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Nice ;)."
                confirmButtonColor="#ffd60a"
                onCancelPressed={() => {
                    setIsAlertBtnsVisible(false);
                }}
                onConfirmPressed={() => {
                    setIsAlertBtnsVisible(false)
                }}
                />
            </Container>
        </TouchableWithoutFeedback>
    )
}