// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { darkTheme } from './styles/theme';
import Header from '../src/Components/Header.js';
import CallForm from '../src/Components/CallForm.js';
import Footer from '../src/Components/Footer.js';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : {}}>
      <GlobalStyles />
      <div>
        <Header toggleDarkMode={toggleDarkMode} />
        <CallForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
