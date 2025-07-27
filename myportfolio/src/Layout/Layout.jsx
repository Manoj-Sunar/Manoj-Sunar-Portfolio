import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout