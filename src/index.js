import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import NotesContext from './NotesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <React.StrictMode>
   < NotesContext>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   </NotesContext>

  </React.StrictMode>
);


