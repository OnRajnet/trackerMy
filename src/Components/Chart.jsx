import React from "react"
import {Doughnut, Bar} from "react-chartjs-2";
import {ArcElement} from 'chart.js'
import Chart from 'chart.js/auto'
Chart.register(ArcElement);

const data = {
    labels:["RED", "BLUE", "YELLOW","GREEN", "PURPLE", "ORANGE"],
    datasets:[{
        label: '# of Votes',
        data:[12,19,3,5,2,3],
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
        borderWidth:1,
    }
    ],
};

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
}

function BarChart({chartData}, {options}) {
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