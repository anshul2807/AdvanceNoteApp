import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {SidebarToggleProvider} from './Context/SidebarToggle'
import {NotesProvider} from './Context/Notes'

ReactDOM.render(
 
  <React.StrictMode>
    <NotesProvider>
      <SidebarToggleProvider>
      <App />
      </SidebarToggleProvider>
    </NotesProvider>
  </React.StrictMode>
  
  ,
  document.getElementById('root')
);

