import React from 'react'
import "./BlogPage.css"
import SideBar from './../Sidebar/SideBar'
import HomePage from '../Homepage/HomePage'
import Post from "../Homepage/Post"
import CategoryList from '../Sidebar/CategoryList'
function BlogPage() {
    return (
        <div className='mainPage'>
                {/* <div className="container"> */}
                    {/* <SideBar/> */}
                    <CategoryList />
                    {/* <div className="main-content"> */}
                        <Post />
                    {/* </div> */}
                {/* </div> */}
        </div>
    )
}

export default BlogPage
