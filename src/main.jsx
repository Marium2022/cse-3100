import { createRoot } from 'react-dom/client';
import './index.css'; // Importing global styles
import App from './App.jsx'; // Importing the main App component
import { BrowserRouter } from 'react-router-dom'; // React Router for routing

// Rendering the root component
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
