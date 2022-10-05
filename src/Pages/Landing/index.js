import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Landing() {
    return (
        <>
            <h2>Landing</h2>
            <Link to='/home'>
                <button>
                    ENTRAR
                </button>
            </Link>
        </>
    )
}