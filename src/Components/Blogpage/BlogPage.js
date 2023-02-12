import React from 'react'
import "./BlogPage.css"
function BlogPage() {
    return (
        <div>
            <header>
                <nav class="navbar">
                    <a href="#">Template</a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <div class="container">
                    <div class="side-bar">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div class="main-content">
                        <div class="header">
                            <h1>Hello</h1>
                            <p>WelcomeI</p>
                        </div>
                        <div class="chat-container">
                            <div class="chat-header">
                                <h3>Start a conversation</h3>
                            </div>
                            <div class="chat-body">
                                <form>
                                    <input type="text" placeholder="Type a message..." />
                                    <button type="submit">Send</button>
                                </form>
                                <div class="message-container">
                                    <div class="user-message">
                                        <p>Hello, how can I help you today?</p>
                                    </div>
                                    <div class="bot-message">
                                        <p>Hi, I'm looking for information on a specific topic.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BlogPage
