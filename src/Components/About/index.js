import React, { useState } from 'react';
import Loading from '../../Pages/Home/Loading';
import Footer from '../Footer';
import Header from '../Header';

import './style.css'

export default function About() {

    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 2000);

    return (
        <>
            <Header active="about" />
            {
                loading ?
                    <Loading />
                    :
                    <div className='about-container'>
                        <div className='about-card'>
                            <div className='about-card-info'>
                                <h1>LUCAS GABRIEL RUIZ</h1>
                                <h3>Full Stack Web Developer</h3>
                                <h4>Contacto con links:</h4>
                                <ul>
                                    <li>
                                        Teléfono: <a className='about-signature' href='https://wa.link/jlcq5p'>
                                            +543885051995
                                        </a>
                                    </li>
                                    <li>
                                        LinkedIn: <a className='about-signature' href='http://linkedin.com/in/lucasgabrielruiz'>
                                            Lucas Gabriel Ruiz
                                        </a>
                                    </li>
                                    <li>
                                        <a className='about-signature' href='https://github.com/lucasruiz12'>
                                            Link a GitHub
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
            }
            <Footer />
        </>
    )
}