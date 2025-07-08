import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import Provider from './store.js'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Provider>
         <App />
       </Provider>
    </BrowserRouter>
  </StrictMode>
)
