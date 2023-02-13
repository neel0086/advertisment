import React from 'react'
import "./NavBar.css"
function NavBar() {
    return (
        <header className='nav-header sticky'>
            <nav className="navbar">
                <a className="text-black font-titleFont text-2xl font-semibold" href="#">Trendify</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="text-black font-titleFont text-lg font-medium tracking-widest" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="text-black font-titleFont text-lg font-medium tracking-widest" href="#">Vendors</a>
                    </li>
                    <li className="nav-item">
                        <a className="text-black font-titleFont text-lg font-medium tracking-widest" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
