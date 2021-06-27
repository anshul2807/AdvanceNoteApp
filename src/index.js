import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {SidebarToggleProvider} from './Context/SidebarToggle'
import {NotesProvider} from './Context/Notes'
import {DisplayListProvider} from './Context/DisplayList'
ReactDOM.render(
 
  <React.StrictMode>
    <NotesProvider>
      <DisplayListProvider>
      <SidebarToggleProvider>
      <App />
      </SidebarToggleProvider>
      </DisplayListProvider>
    </NotesProvider>
  </React.StrictMode>
  
  ,
  document.getElementById('root')
);

