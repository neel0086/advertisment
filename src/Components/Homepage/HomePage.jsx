import React from 'react'
import './HomePage.css'
import Post from './Post'
function HomePage() {
    return (
        <div className='home_page'>
            
            <div className='container'>
                <div class="row">
                    <div class="blog-post col-lg-4 col-md-6 col-sm-12">
                        
                            <Post />
                    </div>
                    <div class="blog-post col-lg-4 col-md-6 col-sm-12">
                        <Post />
                    </div>
                    <div class="blog-post col-lg-4 col-md-6 col-sm-12">
                        <Post />
                    </div>
                    <div class="blog-post col-lg-4 col-md-6 col-sm-12">
                        <Post />
                    </div>
                </div>
                <div class="row">
                    <div class="blog-post col-lg-4 col-md-6 col-sm-12">
                        <Post />
                    </div>
                    <div class="blog-post col-lg-4 col-md-6 col-sm-12">
                        <Post />
                    </div>
                    <div class="blog-post col-lg-4 col-md-6 col-sm-12">
                        <Post />
                    </div>
                    <div class="blog-post col-lg-4 col-md-6 col-sm-12">
                        <Post />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage
