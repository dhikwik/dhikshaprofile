import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app';
import { GoogleOAuthProvider } from '@react-oauth/google';
  

 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GoogleOAuthProvider clientId="1083724509542-4crgo1u28pknaj54p8t49g3sk1fqp4ss.apps.googleusercontent.com">
<React.StrictMode>
    <App />
</React.StrictMode>
</GoogleOAuthProvider>)