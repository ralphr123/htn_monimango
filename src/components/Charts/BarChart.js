import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = ({data, className, id}) => {
    return (
        <div className={className} id={id}>
            <Bar data={{
                labels: data.map(card=>card.ticker),
                datasets: [{
                    label: '# of Mentions',
                    data: data.map(card=>card.count),
                    backgroundColor: [
                        'rgb(243,156,18, 0.2)',
                        'rgb(243,156,18, 0.2)',
                        'rgb(243,156,18, 0.2)',
                        'rgb(243,156,18, 0.2)',
                        'rgb(243,156,18, 0.2)',
                        'rgb(243,156,18, 0.2)'
                    ],
                    borderColor: [
                        'rgb(196,127,18, 1)',
                        'rgb(196,127,18, 1)',
                        'rgb(196,127,18, 1)',
                        'rgb(196,127,18, 1)',
                        'rgb(196,127,18, 1)',
                        'rgb(196,127,18, 1)'
                    ],
                    borderWidth: 1
                }]
            }}
            options = {{
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Mentions per stock - Last 24 Hours',
                    fontSize: 20
                },
                legend: {
                    display: false
                 }
            }}
            height={500} width={100} />
           
        </div>
    )
}

export default BarChart;