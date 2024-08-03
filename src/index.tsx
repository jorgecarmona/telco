import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';

import { CssBaseline, ThemeProvider } from '@mui/material';
import telcoTheme from './theme/theme';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <ThemeProvider theme={telcoTheme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
