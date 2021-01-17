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
                        <h1>{card.ticker}</h1>
                        <h2 className={card.action === 'Buy' ? "green" : card.action === "Hold" ? 'orange' : "red"}>{card.action}</h2>
                        <p>{card.tone}</p> 
                        <img src={card.action === 'Buy' ? Up: card.action === 'Sell' ? Down : Hold } alt="action" className="action"/>
                        <p>{card.count} people mentioned this.</p> 
                </div> 
            })}
        </>
    )

}
