import React from 'react';
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/core';
import ToggleTheme from './components/ToggleTheme';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
	<ToggleTheme />
  <LoginForm />  
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
