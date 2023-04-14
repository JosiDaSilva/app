
import { Auth0Provider } from "@auth0/auth0-react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Auth0Provider
    domain="dev-guzwswiry1o6a5uh.us.auth0.com"
    clientId="ee1Y5iv3neOXXalgb0VpeIQcMA0HzZQs"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  
    <App />
    
  </Auth0Provider>
  </React.StrictMode>
)
