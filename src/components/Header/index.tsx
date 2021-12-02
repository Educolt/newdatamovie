import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Icon, SearchInput} from './style';

import { useAuth } from '../../hooks/auth'

export const Header = () : JSX.Element => {

    // app hook
    const { signOut } = useAuth();

    return (
        <Container>
                <TouchableOpacity onPress={() => signOut()}>
                    <Icon name="log-out" size={24} color="black" />
                </TouchableOpacity>
                <SearchInput placeholder="Digite o nome do filme, serie, etc..." />
                <Icon name="search" size={24} color="white" />
        </Container>
    )
}