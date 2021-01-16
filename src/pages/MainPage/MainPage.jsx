import React, { useState } from 'react';
import BarChart from '../../components/Charts/BarChart';
import StockList from '../../components/StockList/StockList';
import './MainPage.css';

export default function MainPage() {

    const [cards, setCards] = useState([
        {
            stockName: "Google",
            stockTick: "GOOG",
            status: "buy",
            mention: 100
        },
        {
            stockName: "NIO",
            stockTick: "NIO",
            status: "buy",
            mention: 32
        },
        {
            stockName: "Salesforce",
            stockTick: "CRM",
            status: "hold",
            mention: 3
        },
        {
            stockName: "Tesla",
            stockTick: "TSLA",
            status: "sell",
            mention: 159
        },
        {
            stockName: "Facebook",
            stockTick: "FB",
            status: "buy",
            mention: 200
        }
    ])

    return (
        <div className="container">
            <div className="upchart"></div>
            <BarChart data={cards}/>
            <StockList cards={cards}/>
        </div>
        
    )
}
