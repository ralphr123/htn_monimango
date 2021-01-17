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
                    <div className="form-title">Sign up for our newsletter!</div>
                    <PersonalDetailsForm/>
                    <Link to="/main" transition="glide-left" className="skip">
                        Skip  for now
                    </Link>
                </div>
            </div>
            <div className="about-container">
                <Carousel defaultWait={8000}>

                <Slide right>
                    <div className="content">
                        <div className="logo">
                            <img src={logo} alt="MoniMango" className="logo-img"/>
                            <h1 className="logo-name">MoniMango</h1>
                        </div>
                        <div className="description">
                        Social media has a large influence on the stock market, even more so today.
                        Reddit is one of the largest social media platforms on Earth.
                        <br/>
                        <br/>
                        MoniMango analyzes Reddit posts from the last 24 hours, picking out the most mentioned stocks and analyzing them for you.
                        <br/>   
                        <br/>
                        Not sure what to do with your current shares? Curious to know what other people are thinking? MoniMango will fill you in.
                        </div>
                    </div>
                </Slide>
                <Slide right>
                    <div className="content two">
                        <img src={screenshot} alt="Screenshot" className="screenshot"/>
                        <div className="description 2">
                            We use a top of the line IBM Watson Tone Analyzer to approximate the group-sentiment for the most mentioned stocks on Reddit.
                        </div>
                    </div>
                </Slide>
                </Carousel>

                
            </div>
        </div>
        
        </>
    )
}
