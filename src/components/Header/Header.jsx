import React from 'react'
import logo from '../../images/MoniMango_logo_orange.svg';
import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="logoholder">
                    <img src={logo} alt="MoniMango" className="logo-icon"/>
                    <h1 className="name">MoniMango</h1>
            </div>
        </div>
    )
}
