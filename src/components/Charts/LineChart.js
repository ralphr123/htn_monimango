import React from 'react';
import {Line} from 'react-chartjs-2';

const LineChart = ({xValues, yValues}) => {
    return (
        <div>
            <Line data={{
                labels: xValues,
                datasets: [{
                    label: '',
                    data: yValues,
                    fill: false,
                    borderColor: '#ec9913',
                    borderWidth: 1
                }]
            }}
            options = {{
                maintainAspectRatio: false
            }}
            height={300} width={100} />
        </div>
    )
}

export default LineChart;