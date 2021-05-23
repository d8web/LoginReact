import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>Página Home</h2>
            <Link to="/about">Pagina about</Link>
        </div>
    )
}

export default Home