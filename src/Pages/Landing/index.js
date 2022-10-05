import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Home/Loading'
import logo from '../../Assets/logo.png'
import './style.css'

export default function Landing() {

    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 2000);

    return (
        <>
            {loading ?
                <>
                    <div className='landing-container'>
                        <h1 style={{color: "transparent"}}>-</h1>
                    </div>
                    <Loading />
                </>
                :
                <>
                    <div className='landing-container'>
                        <h1>BIENVENIDO</h1>
                    </div>
                    <div className='landing-container'>
                        <button className='landing-btn'>
                            <Link to='/home'>
                                <img src={logo} alt="noimg" />
                            </Link>
                        </button>
                    </div>
                    <div className='landing-container'>
                        <h1>↑↑ Click para empezar ↑↑</h1>
                    </div>
                </>
            }
        </>
    )
}