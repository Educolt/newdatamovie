import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// routes
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

import { useAuth } from '../hooks/auth'

export const Routes = () => {

    const { isAuthered} = useAuth();

    return (
        <NavigationContainer>
            {isAuthered ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}