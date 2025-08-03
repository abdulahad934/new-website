import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom'; // ✅ Updated here
import ShopContextProvider from './context/ShopContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> {/* ✅ Changed from BrowserRouter to HashRouter */}
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </HashRouter>
  </StrictMode>
);
