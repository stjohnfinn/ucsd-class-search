import Header from './components/Header'
import { Link, Outlet, useNavigate } from 'react-router-dom'

import './style/index.css'
import './style/App.css'

export default function App() {

    const navigate = useNavigate()

    return (
        <div className='appComponent'>
            <Header />
            <Outlet />
        </div>
    )
}