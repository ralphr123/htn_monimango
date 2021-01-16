import React, { useState } from 'react';

export default function StockList() {

    const [cards, setCards] = useState([
        {
            stockName: "Google",
            stockTick: "GOOG",
            status: "Buy",
            comment: "376 people mentioned this stock."
        },
        {
            stockName: "NIO",
            stockTick: "NIO",
            status: "Buy",
            comment: "32 people mentioned this stock."
        },
        {
            stockName: "Salesforce",
            stockTick: "CRM",
            status: "Hold",
            comment: "3 people mentioned this stock."
        },
        {
            stockName: "Tesla",
            stockTick: "TSLA",
            status: "Sell",
            comment: "1,403 people mentioned this stock."
        },
        {
            stockName: "Facebook",
            stockTick: "FB",
            status: "Buy",
            comment: "376 people mentioned this stock."
        }
    ])

    
    return (
        <>
            {cards.map((card, index)=>{ 
                return <div key = {index}>
                        <h1>{card.stockName}</h1>
                        <p>{card.stockTick}</p>  
                        <p>{card.status}</p> 
                        <p>{card.comment}</p> 
                </div> 
            })}
        </>
    )

}
