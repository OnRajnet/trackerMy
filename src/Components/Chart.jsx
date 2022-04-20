import React from "react"
import {Doughnut, Bar} from "react-chartjs-2";
import {ArcElement} from 'chart.js'
import Chart from 'chart.js/auto'
Chart.register(ArcElement);

const options = {
    maintainAspectRatio:false,
    scales: {
        yAxes: [
            {
                tick:{
                    beginAtZero: true
                }
            }
        ]
    }
};


function BarChart({chartData}) {
    return (
        <div>
            <div>
                <Bar
                    data={chartData}
                    height={400}
                    width={600}
                    options={options}
                />
            </div>
        </div>
    )
}

export default BarChart