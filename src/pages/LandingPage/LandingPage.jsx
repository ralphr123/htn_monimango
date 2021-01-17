import React from 'react'
import PersonalDetailsForm from '../../components/PersonalDetailsForm/PersonalDetailsForm';
import './LandingPage.css'
import logo from '../../images/MoniMango_logo.svg'
import { Link } from 'react-tiger-transition';
import screenshot from '../../images/screenshot.png';
import Slide from 'react-reveal/Slide';
import Carousel from '../../components/Carousel/Carousel';
export default function LandingPage() {

    if (window.localStorage.getItem("mm_user")) window.location.replace("/main");

    return (
        <>
        <div className="main-container">
            <div className="details-container">
                <div className="form-container center">
                    <div class="form-title">Sign up for our newsletter!</div>
                    <PersonalDetailsForm/>
                    <br />
                    <br />
                    <br />
                    <Link to="/main" transition="glide-left" className="skip">
                        Skip  for now
                    </Link>
                </div>
            </div>
            <div className="about-container">
                <Carousel defaultWait={3000}>

                <Slide right>
                    <div className="content">
                        <div className="logo">
                            <img src={logo} alt="MoniMango" className="logo-img"/>
                            <h1 className="logo-name">MoniMango</h1>
                        </div>
                        <div className="description">
                        Social Media has a large influence on the stock market.
                        <br/>
                        MoniMango aims to look at what stocks are currently being favoured or dismissed by people on social media using a sentimental analysis model.
                        <br/>   
                        <br/>
                        Not sure what to do with your current shares? Looking to dive into the stock market? We'll help you know what others are thinking.
                        </div>
                    </div>
                </Slide>
                <Slide right>
                    <div className="content two">
                        <img src={screenshot} alt="Screenshot" className="screenshot"/>
                        <div className="description 2">
                            Find out the top stocks that are being mentioned on famous social media platsforms like Reddit. Receive recommendations on whether to buy hold or sell.
                        </div>
                    </div>
                </Slide>
                </Carousel>

                
            </div>
        </div>
        
        </>
    )
}
