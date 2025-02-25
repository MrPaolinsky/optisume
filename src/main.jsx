import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import  Auth  from './pages/auth/Auth.jsx'
import AppTopBar from './components/AppTopBar.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppTopBar ></AppTopBar>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
