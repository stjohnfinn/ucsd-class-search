import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import App from './App'
import SearchClasses from './components/SearchClasses'
import SelectClasses from './components/SelectClasses'
import SelectMajor from './components/SelectMajor'

import './style/index.css'

import { createRoot } from 'react-dom/client'
import Start from './components/Start'
const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Navigate to="/select-major" />} />
                <Route path="select-major" element={<SelectMajor />} />
                <Route path="select-classes" element={<SelectClasses />} />
                <Route path="search-classes" element={<SearchClasses />} />
            </Route>
        </Routes>
    </BrowserRouter>
)