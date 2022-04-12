import React, { useState, useEffect } from 'react';
import {DataGrid} from "@mui/x-data-grid";
import Chart from "../Chart";


const columns = [
    {
        field: 'footballMatchId',
        headerName: 'footballMatchId',
        width: 180,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'player',
        headerName: 'Hráč',
        width: 150,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'steps',
        headerName: 'Kroky',
        width: 150,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'distance',
        headerName: 'Vzdálenost',
        type: 'number',
        width: 150,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'maxSpeed',
        headerName: 'Maximální počet kroků',
        width: 220,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'minSpeed',
        headerName: 'Minimální rychlost',
        type: 'number',
        width: 200,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'avgSpeed',
        headerName: 'Průměrná rychlost',
        type: 'number',
        width: 200,
        headerAlign: 'center',
        align: 'center',
    },
];

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


export default function PlayerDataPerformanceGridByTrener({ playerData }) {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        let items = [];

        playerData.forEach(player => {
            items = [
                ...items,
                player.performances,
            ]
        });

        setRows(items);
        {console.log(rows)}
    }, [playerData])

    const sumBy = (key, obj) => obj.reduce((a, b) => a + b[key], 0);

    const chartData = {
        labels:["Celkový počet kroků", "Celková vzdálenost","Průměrná vzdálenost", "Průměrná rychlost (*1000)", "Počet hráčů v zápase"],
        datasets:[{
            label: "Výkon",
            data: [
                sumBy('steps', rows)
            ],


                //(rows[0]?.reduce((counter, item) => {
                //counter = +counter + +item.steps
                //console.log(counter)
                //console.log(rows)
                //return [counter]},0)),
                //(rows[0]?.reduce((counter, item) => {
                // counter = +counter + +item.distance
                // console.log(counter)
                // console.log(rows)
                // return [counter]},0))
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
            borderWidth:3,
        }
        ],
    };


    return(
        <div>
            {/* Trener part */}

            {rows.length > 0 &&
                <div>
                    <h1>Graf zápasu </h1>
                    <Chart chartData={chartData} options = {options}/>
                </div>
            }

            { rows.length > 0 && rows.map((row, index) => {
                    return (
                        <DataGrid
                        key={`data-grid-${index}`}
                        rows={row}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                        autoHeight
                        getRowId={(row) => row.footballMatchId}
                        style={{
                        marginTop:30,
                        }
                        }
                    />
                    )
                })
            }
        </div>
    );

}
