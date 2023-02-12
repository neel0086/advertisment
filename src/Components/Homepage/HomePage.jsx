import React from 'react'
import './HomePage.css'
import Post from './Post'
function HomePage() {
    return (
        <div>
            
            <div class="container">
                <div class="row">
                    <div class="blog-post col-sm-6">
                        
                            <Post />
                    </div>
                    <div class="blog-post col-sm-6">
                        <Post />
                    </div>
                    <div class="blog-post col-sm-6">
                        <Post />
                    </div>
                    <div class="blog-post col-sm-6">
                        <Post />
                    </div>
                </div>
                <div class="row">
                    <div class="blog-post col-sm-6">
                        <Post />
                    </div>
                    <div class="blog-post col-sm-6">
                        <Post />
                    </div>
                    <div class="blog-post col-sm-6">
                        <Post />
                    </div>
                    <div class="blog-post col-sm-6">
                        <Post />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage
