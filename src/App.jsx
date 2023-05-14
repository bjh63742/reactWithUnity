import React from 'react';
import { CssBaseline } from '@mui/material';
import { RecoilRoot } from 'recoil';
import ThemeProvierContainer from './components/ThemeProvierContainer';
import Router from './Router';

function App() {
  return (
    <ThemeProvierContainer>
      <RecoilRoot>
        <CssBaseline />
        <Router />
      </RecoilRoot>
    </ThemeProvierContainer>
  );
}

export default App;
