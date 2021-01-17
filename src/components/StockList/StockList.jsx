import React from 'react';
import './Stock.css';
import Up from '../../images/sticker/up.png';
import Down from '../../images/sticker/down.png';
import Hold from '../../images/sticker/hold.png';
import { ImGrin as JoyIcon, ImBaffled as FearIcon, ImSad as SadIcon, ImNeutral as TentativeIcon, ImWink as ConfidentIcon, ImWondering as AnalyticalIcon } from 'react-icons/im';
export default function StockList({cards}) {
    
    return (
        <>
            {cards.map((card, index)=>{ 
                return <div key = {index} className="card">
                        <h1>{card.ticker}</h1>
                        <h2 className={card.action === 'Buy' ? "green" : card.action === "Hold" ? 'orange' : "red"}>{card.action}</h2>
                        <h3>{card.tone}</h3>
                        <p> {card.tone === 'Joy' ? <JoyIcon size={20}/> : card.tone === 'Sadness' ? <SadIcon size={20}/> : card.tone === 'Tentative' ? <TentativeIcon size={20}/> : card.tone ==='Analytical' ? <AnalyticalIcon size={20}/> : card.tone === 'Fear' ? <FearIcon size={20}/> : card.tone === 'Confident' ? <ConfidentIcon size={20}/> : ''}</p> 
                        <img src={card.action === 'Buy' ? Up: card.action === 'Sell' ? Down : Hold } alt="action" className="action"/>
                        <p>{card.count} people mentioned this.</p> 
                </div> 
            })}
        </>
    )

}
