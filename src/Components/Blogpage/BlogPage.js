import React from 'react'
import "./BlogPage.css"
import SideBar from './../Sidebar/SideBar'
import HomePage from '../Homepage/HomePage'
function BlogPage() {
    return (
        <div>
            <main>
                <div className="container">
                    <SideBar/>
                    <div className="main-content">
                        <HomePage />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BlogPage
