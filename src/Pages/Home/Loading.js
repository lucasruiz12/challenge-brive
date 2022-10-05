import React from "react";
import logo from '../../Assets/logo.png'

export default function Loading() {

    return (
        <span className="loader">
            <img src={logo} alt="noimg" />
        </span>
    )
}