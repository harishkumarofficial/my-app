import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


/* React Router Version 6  
   *** Axios Packages
   *** server start command - > npx json-server -p 3500 -w data/db.json
   *** useState and useEffect combination
   *** npm i react-icons
   *** Axios fetch webhook
   *** custom hooks 
   *** context_API & useContext Hook(This features coming React V6 only -> more readability ) instead of using prop trilling
*/