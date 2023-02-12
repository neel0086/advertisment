import React from 'react'
import "./NavBar.css"
function NavBar() {
    return (
        <header >
            <nav className="navbar">
                <a href="#">Template</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
