import React from 'react';
import './Stock.css';
import Up from '../../images/sticker/up.png';
import Down from '../../images/sticker/down.png';
import Hold from '../../images/sticker/hold.png';
import { ImGrin as JoyIcon, ImBaffled as FearIcon, ImSad as SadIcon, ImNeutral as TentativeIcon, ImWink as ConfidentIcon, ImWondering as AnalyticalIcon, ImAngry as AngryIcon } from 'react-icons/im';
import { Link, Route } from 'react-tiger-transition';
import DetailsPage from '../../pages/DetailsPage/DetailsPage';

export default function StockList({cards}) {

    const handleCardClick = (e) => {
        e.stopPropagation();
        if (e.target.getAttribute("data-ticker")) {
            window.location.replace(`/main/${e.target.getAttribute("data-ticker")}`)
        }
    }

    return (
        <>
            {cards.map((card, index)=>{ 
                return <div key = {index} className="card" data-ticker={card.ticker} onClick={(e) => handleCardClick(e)}>
                        <h1 data-ticker={card.ticker} onClick={(e) => handleCardClick(e)}>{card.ticker}</h1>
                        <h2 className={card.action === 'Buy' ? "green" : card.action === "Hold" ? 'orange' : "red"} data-ticker={card.ticker} onClick={(e) => handleCardClick(e)}>{card.action}</h2>
                        <h3 data-ticker={card.ticker} onClick={(e) => handleCardClick(e)}>Analyzed emotion: {card.tone}</h3>
                        <p data-ticker={card.ticker} onClick={(e) => handleCardClick(e)}>{card.tone === 'Joy' ? <JoyIcon size={30} className="icon"/> : card.tone === 'Sadness' ? <SadIcon size={30} className="icon"/> : card.tone === 'Tentative' ? <TentativeIcon size={30} className="icon"/> : card.tone ==='Analytical' ? <AnalyticalIcon size={30} className="icon"/> : card.tone === 'Fear' ? <FearIcon size={30} className="icon"/> : card.tone === 'Confident' ? <ConfidentIcon size={30} className="icon"/> : card.tone === "Anger" ? <AngryIcon size={30} className="icon"/> : ""}</p>  
                        <img src={card.action === 'Buy' ? Up: card.action === 'Sell' ? Down : Hold } alt="action" className="action" data-ticker={card.ticker} onClick={(e) => handleCardClick(e)}/>
                        <p data-ticker={card.ticker} onClick={(e) => handleCardClick(e)}>{card.count} posts mentioned this. <Link to={`/main/${card.ticker}`} transition="glide-left" className="orange">
                            details
                        </Link></p> 
                </div> 
            })}
            <Route path ={`main/:ticker`}><DetailsPage/></Route>
        </>
    )

}
