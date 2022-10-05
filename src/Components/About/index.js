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
                    <h2>About</h2>
            }
            <Footer />
        </>
    )
}