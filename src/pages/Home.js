import React from 'react'
import { useEffect } from 'react'

const Home = () => {

    //code a move the page to top 
    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

export default Home
