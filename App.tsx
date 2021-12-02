import React from 'react';
// theme
import { ThemeProvider } from 'styled-components'

// App theme
import theme from './src/global/styles/theme'

// app routes
import { Routes } from './src/routes'

// context
import { AuthProvider} from './src/hooks/auth'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </ AuthProvider>
    </ThemeProvider>
    
    
  );
}



