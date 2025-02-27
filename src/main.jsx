import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Auth from './pages/auth/Auth.jsx'
import AppTopBar from './components/blocks/AppTopBar.jsx'
import Profile from './pages/profile/Profile.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <AppTopBar />
            <div className='md:px-40'>
                <Routes>
                    <Route index element={<App />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </BrowserRouter>
    </StrictMode>
)
