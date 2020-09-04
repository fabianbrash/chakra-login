import React from 'react';
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/core';
import ToggleTheme from './components/ToggleTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
	<ToggleTheme />  
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
