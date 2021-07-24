import './App.css';
import '@fontsource/roboto';
import React from 'react';
import { Header } from './components/header';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { ServiceGrid } from './components/serviceGrid';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#5f5fc4',
      main: '#283593',
      dark: '#001064',
      contrastText: '#fff',
    },
    secondary: {
      light: '#757de8',
      main: '#3f51b5',
      dark: '#002984',
      contrastText: '#ffffff',
    },
  },
});

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <ServiceGrid />
      </div>
    </ThemeProvider>
  );
}

export default App;
