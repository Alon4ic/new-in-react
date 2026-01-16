import React from "react"
import logo from "../assets/Chef Claude Icon.png"
export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="chef claude icon" className="header-logo" />
            <h1 className="header-title">Chef Claude</h1>
        </header>
    )
}