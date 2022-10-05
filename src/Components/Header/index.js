import React from 'react';
import { Link } from 'react-router-dom'
// import { Modal, Button, Row, Col } from 'react-bootstrap';
import './style.css'

export default function Header(props) {

    const { active } = props

    return (
        <header className='container'>
            <nav className="nav-bar">
                <ul className='nav-items'>
                    <Link to='/'>
                        <li className={active === 'welcome' ? 'item-active' : 'item'}>Welcome</li>
                    </Link>
                    <Link to='/home'>
                        <li className={active === 'home' ? 'item-active' : 'item'}>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className={active === 'about' ? 'item-active' : 'item'}>About</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}