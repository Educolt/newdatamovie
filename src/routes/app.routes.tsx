import React from 'react';
import { useTheme } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 

// App screens
import { Dashboard } from '../../src/screens/Dashboard';
import { Catalog } from '../../src/screens/Catalog';
const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes = () => {
    const theme = useTheme();
    return (
        <Navigator 
            screenOptions= {
            {
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.primary,
                tabBarLabelPosition: 'beside-icon',
            }
        }
        >
            <Screen name="Filmes" component={Dashboard} options={
                {
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons name="local-movies" size={size} color={color} />
                    )),

                }
            }/>
            <Screen name="Catálogo" component={Catalog} options={
                {
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons name="bookmarks" size={size} color={color} />
                    )),
                }
            }/>
        </Navigator>
    )
}