import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// theme
import { ThemeProvider } from 'styled-components'

// App theme
import theme from './src/global/styles/theme'

// app routes
import { AppRoutes } from './src/routes/app.routes'

import { SignIn } from './src/screens/SignIn'

// context
import { AuthContext } from './src/context/AuthContext'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthContext>
          <SignIn />
        </ AuthContext>
      </NavigationContainer>
    </ThemeProvider>
    
    
  );
}



