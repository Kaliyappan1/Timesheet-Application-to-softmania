import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="843351904648-1vj31ntjisceld0b3fbq7fak3g3t7qff.apps.googleusercontent.com"> 
    <App />
      </GoogleOAuthProvider>
  </React.StrictMode>
)
