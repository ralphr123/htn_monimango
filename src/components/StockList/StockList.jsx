import React from 'react';
import './Stock.css';
import Up from '../../images/sticker/up.png';
import Down from '../../images/sticker/down.png';
import Hold from '../../images/sticker/hold.png';
export default function StockList({cards}) {
    
    return (
        <>
            {cards.map((card, index)=>{ 
                return <div key = {index} className="card">
                        <h1>{card.stockName} <span>({card.stockTick})</span></h1>
                        <h2 className={card.status === 'buy' ? "green" : card.status === "hold" ? 'orange' : "red"}>{card.status}</h2> 
                        <img src={card.status === 'buy' ? Up: card.status === 'sell' ? Down : Hold } alt="status" class="status"/>
                        <p>{card.mention} people mentioned this.</p> 
                </div> 
            })}
        </>
    )

}
