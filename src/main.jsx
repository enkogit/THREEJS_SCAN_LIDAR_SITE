import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import global styles (Tailwind + any custom CSS)
import './index.css';

// ============================================
// MAIN ENTRY POINT
// ============================================
// This file is the starting point of the entire React application.
// It creates the root React element and renders the <App /> component.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);