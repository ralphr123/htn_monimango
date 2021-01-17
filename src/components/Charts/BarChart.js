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
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }}
            options = {{
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Number of mentions about a stock',
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