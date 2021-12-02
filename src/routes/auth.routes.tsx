import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// auth screen
import { SignIn } from '../screens/SignIn'

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => {
    return (
        <Navigator 
            screenOptions={
                {
                    headerShown: false
                }
            }
        >
            <Screen name="SignIn"component={SignIn} />
        </Navigator>
    )
}

