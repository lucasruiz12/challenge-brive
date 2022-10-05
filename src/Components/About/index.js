import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

import './style.css'

export default function About() {
    return (
        <>
            <Header active="about" />
            <h2>About</h2>
            <Footer />
        </>
    )
}