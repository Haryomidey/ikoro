import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/main.routes';
import './index.css';
import './global.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer className='text-xs' />
  </StrictMode>
);
