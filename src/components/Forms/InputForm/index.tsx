import React from 'react';
import { Control, Controller } from 'react-hook-form'

// app component
import { Input } from '../Input'

// styled components
import { Container, Error } from './style'

// type props
interface Props {
    control: Control,
    name: string,
    placeholder: string,
    secureTextEntry: boolean,
}

export const InputForm = ({control, placeholder, secureTextEntry, name, ...rest}: Props): JSX.Element => {
    return (
        <Container>
            <Controller
                control={control}
                render={({field: {onChange, value}})=>(
                    <Input 
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry={secureTextEntry}
                        {...rest}
                        placeholder={placeholder}
                        autoCorrect={false}
                    />
                )}
                name={name}
            />
        </Container>
    )
}