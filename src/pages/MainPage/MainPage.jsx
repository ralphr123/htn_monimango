import React, { useState, useEffect } from 'react';
import BarChart from '../../components/Charts/BarChart';
import Header from '../../components/Header/Header';
import StockList from '../../components/StockList/StockList';
import './MainPage.css';
import MoniMango from '../../images/MoniMango_logo_orange.svg';
import axios from 'axios';

export default function MainPage() {

    const [cards, setCards] = useState([
        {
            "count":37,
            "ticker":"GME",
            "action":"Sell",
            "tone":"Sadness"
        },
        {
            "count":11,
            "ticker":"BB",
            "action":"Buy",
            "tone":"Joy"
        },
        {  
            "count":5,
            "ticker":"PLTR",
            "action":"Hold",
            "tone":"Tentative"
        }
        ,{ 
            "count":5,
            "ticker":"TSLA",
            "action":"Hold",
            "tone":"Analytical"
        },
        {
            "count":3,
            "ticker":"FB",
            "action":"Buy",
            "tone":"Joy"
        }
    ]);

    // useEffect(()=> {
    //     if (!window.sessionStorage.getItem("mm_response")) {
    //         axios.get('https://wicked-phantom-05767.herokuapp.com/https://cryptic-woodland-77043.herokuapp.com/reddit')
    //         .then((response) => {
    //             console.log(response.data);
    //             window.sessionStorage.setItem("mm_response", JSON.stringify(response.data));
    //             setCards(response.data);
    //             document.getElementById("animation").className = "none";
    //             document.getElementById("animation-container").className = "none";
    //             document.getElementById("chart-container").className = "opacity-1";
    //         });
    //     } else {
    //         setCards(JSON.parse(window.sessionStorage.getItem("mm_response")));
    //         document.getElementById("animation").className = "none";
    //         document.getElementById("animation-container").className = "none";
    //         document.getElementById("chart-container").className = "opacity-1";
    //     }
        
    // }, [])
    

    return (
        <div className="main">
            <Header/>
            <div className="content-container">
                <div className="flex-center" id="animation-container">
                    <img src={MoniMango} alt="logo" className="moni-mango" id="animation"/>
                </div>
                <BarChart data={cards} className="opacity-0" id="chart-container"/>
                <StockList cards={cards}/> 
            </div>
        </div>
        
    )
}
