import React from 'react'
import { Link } from 'react-tiger-transition';
import logo from '../../images/MoniMango_logo_orange.svg';
import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="logo-holder">
                <Link to ="/" transition="glide-right" className="remove-link">
                    <img src={logo} alt="MoniMango" className="logo-icon"/>
                        <h1 className="name">MoniMango</h1>
                    </Link>
            </div>
        </div>
    )
}
