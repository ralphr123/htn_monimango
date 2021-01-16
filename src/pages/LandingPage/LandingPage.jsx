import React from 'react'
import PersonalDetailsForm from '../../components/PersonalDetailsForm/PersonalDetailsForm';
import './LandingPage.css'
import logo from '../../images/MoniMango_logo.svg'
import { Link } from 'react-tiger-transition';
import screenshot from '../../images/screenshot.png';

export default function LandingPage() {
    return (
        <>
        <div className="main-container">
            <div className="details-container">
                <div className="form-container center">
                    <h1>Enter Details to <span>Continue</span></h1>
                    <PersonalDetailsForm/>
                    <Link to="/main" transition="glide-left" className="skip">
                        Skip now
                    </Link>
                </div>
            
            </div>
            <div className="about-container">
                <div className="logo">
                    <img src={logo} alt="MoniMango" className="logo-img"/>
                    <h1 className="logo-name">MoniMango</h1>
                </div>
                <div className="description">
                Social Media has a large influence on the stock market.

            Our app aims to look at what stocks are currently being favoured or dismissed by people on social media using a sentimental analysis model.
                </div>
                <img src={screenshot} alt="Screenshot" class="screenshot"/>
            </div>
        </div>
        
        </>
    )
}
