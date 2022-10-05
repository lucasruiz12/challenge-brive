import React from 'react'
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import './style.css'

import fakeUsers from '../../Data/fakeUsers.json'
import TableUsers from './TableUsers';

import './style.css'

export default function Home() {

    return (
        <>
            <Header active="home" />
            <TableUsers fakeUsers={fakeUsers} />
            <Footer />
        </>
    )
}