import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h4>Página não encontrada!</h4>
            <Link to="/">Página Inicial</Link>
        </div>
    )
}

export default NotFound
