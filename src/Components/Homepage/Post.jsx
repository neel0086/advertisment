import React from 'react'
import "./Post.css"
function Post() {
    return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Post Title</h5>
                    <p class="card-text">Post content goes here</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <i class="fa fa-thumbs-up mr-3"></i>
                        <span>Likeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa fa-comment mr-3"></i>
                        <span>Comment</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa fa-share mr-3"></i>
                        <span>Share</span>
                    </div>
                </div>
                
            </div>

    )
}

export default Post
