import React from 'react';
import { ThemeProvider } from 'styled-components'

// App theme
import theme from './src/global/styles/theme'

// App Screens
import { SignIn } from './src/screens/SignIn'
import { Dashboard } from './src/screens/Dashboard'

// components
import { MovieCardModal} from './src/components/MovieCardModal'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <MovieCardModal />
    </ThemeProvider>
  );
}



