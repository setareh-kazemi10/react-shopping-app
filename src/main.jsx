import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/animate.css';
import './assets/styles/magnific-popup.css';
import './assets/styles/main.css';
import './assets/styles/meanmenu.min.css';
import './assets/styles/coursel.css';
import './assets/styles/responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer />
  </StrictMode>
)
