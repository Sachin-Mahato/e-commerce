import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvider } from './context/Context.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter >
            <AppContextProvider>
            <CartContextProvider>
                <App />
            </CartContextProvider>
            </AppContextProvider>
        </BrowserRouter>
    </StrictMode>
)
