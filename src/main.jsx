import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ErrorBoundary from './Clase 24/ErrorBoundary.jsx'
import Context from './Context.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <ErrorBoundary>
    <Context>
      <BrowserRouter>    
        <App />
      </BrowserRouter>  
    </Context>
  // </ErrorBoundary>
)
