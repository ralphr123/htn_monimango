import React, { useState, useEffect } from 'react';
import BarChart from '../../components/Charts/BarChart';
import Header from '../../components/Header/Header';
import StockList from '../../components/StockList/StockList';
import './MainPage.css';
import MoniMango from '../../images/MoniMango_logo_orange.svg';
import axios from 'axios';

export default function MainPage() {

    const [cards, setCards] = useState([]);

    useEffect(()=> {
        if (!window.sessionStorage.getItem("mm_response")) {
            axios.get('https://cryptic-woodland-77043.herokuapp.com/reddit')
            .then((response) => {
                window.sessionStorage.setItem("mm_response", JSON.stringify(response.data));
                setCards(response.data);
                document.getElementById("animation").className = "none";
                document.getElementById("animation-container").className = "none";
                document.getElementById("chart-container").className = "opacity-1";
            });
        } else {
            setCards(JSON.parse(window.sessionStorage.getItem("mm_response")));
            document.getElementById("animation").className = "none";
            document.getElementById("animation-container").className = "none";
            document.getElementById("chart-container").className = "opacity-1";
        }
        
    }, [])
    

    return (
        <div className="main">
            <Header/>
            {
                window.localStorage.getItem("mm_user") ? 
                <div className="welcome">
                    <div className="welcome-title">Welcome back, <span className="dark-orange">
                        {JSON.parse(window.localStorage.getItem("mm_user")).name}
                    </span></div>
                    <div className="welcome-subtitle">Here's today's pickings.</div>
                </div> :
                ""
            }
            <div className="content-container">
                <div className="flex-center" id="animation-container">
                    <img src={MoniMango} alt="logo" className="moni-mango" id="animation"/>
                </div>
                <div className="descr-center">
                    <div className="descr-cont">
                        <h2>Our API</h2>
                        <p className="descr">
                            We look through 750 top reddit posts in r/investing, r/stocks, and r/wallstreetbets.
                            We scan for the names of 500+ of the most popular stock tickers. 
                            We use the IBM Watson tone analyzer to predict the mood around those stocks. 
                            We show you the data. <br /> <br/>

                            <strong>These listing do not count as proffessional advice. The IBM tone analyzer is far from perfect,
                            especially with the type of language used on these subreddits. Use this app's investment advice
                            at your own risk.</strong> 
                        </p>
                    </div>
                </div>
                <BarChart data={cards} className="opacity-0" id="chart-container"/>
                <StockList cards={cards}/> 
            </div>
        </div>
        
    )
}
