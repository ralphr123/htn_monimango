import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import LineChart from '../../components/Charts/LineChart';
import { Link } from 'react-tiger-transition';
import './DetailsPage.css';
import { AiOutlineArrowLeft as Back} from 'react-icons/ai';
export default function DetailsPage() {

    const [xValues, setXValues] = useState([]);
    const [yValues, setYValues] = useState([]);
    const [information, setInformation] = useState( 
        {
            name:'',
            description:''
        }

    );

    const location = useLocation();
    const tickerName = location.pathname.replace("/main/", "");
    const API = '5E6AWU6AK5ZEKALN';
    
    useEffect(() => {
        let stockChartXValues = [];
        let stockChartYValues = [];
        if (tickerName && tickerName !== "" && tickerName !== "/main") {
            axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${tickerName}&apikey=${API}`)
            .then(response => {
                for(var key in response.data['Monthly Time Series']) {
                    stockChartXValues.push(key);
                    stockChartYValues.push(response.data['Monthly Time Series'][key]['1. open']);
                }
                setXValues(stockChartXValues.reverse());
                setYValues(stockChartYValues.reverse());
            })
    
            axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${tickerName}&apikey=${API}`)
            .then (response => {
                setInformation({
                    name: response.data.Name,
                    description: response.data.Description
                })
            })
        }
    }, [tickerName])

    return (
        <div className="details-page-container">
            <Header/>
            <Link to="/main" transition="glide-right" className="back-link">
                <Back size={40}/>
            </Link>
            <div className="stock-container">
                <br/>
                <LineChart xValues={xValues} yValues={yValues}/>
                <h1 className="stock-title">{information.name} ({tickerName})</h1>
                <br/>
                <p>{information.description}</p>
            </div>
           
        </div>
    )
}
