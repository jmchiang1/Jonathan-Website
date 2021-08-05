import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <video autoPlay loop muted>
                <source src='../public/../Videos/frame.mp4' type='video/mp4'/>
            </video>
            <h1 className="homepage-name">Welcome, I'm Jonathan</h1>
            <br />
            <h1 className="homepage-description">Fullstack Software Engineer</h1>
        </div>
    )
}

export default Home

