import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns';
import cs from 'date-fns/locale/cs';
import {useEffect, useState} from "react";
import Chart from "./Chart";

const columns = [
    {
        field: 'footballMatchId',
        headerName: 'footballMatchId',
        width: 180,
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: 'trainer',
        headerName: 'Trenér',
        width: 150,
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: 'startTime',
        headerName: 'Začátek zápasu',
        width: 180,
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: 'endTime',
        headerName: 'Konec zápasu',
        width: 180,
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: 'totalSteps',
        headerName: 'Celkový počet kroků',
        width: 210,
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: 'avgSteps',
        headerName: 'Průbměr kroků',
        type: 'number',
        width: 180,
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: 'totalDistance',
        headerName: 'Celková vzdálenost',
        type: 'number',
        width: 210,
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: 'avgDistance',
        headerName: 'Průměrná vzdálenost',
        type: 'number',
        width: 300,
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: 'avgSpeed',
        headerName: 'Průměrná rychlost',
        type: 'number',
        width: 210,
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: 'players',
        headerName: 'Hráči',
        width: 300,
        headerAlign: 'center',
        align: 'center'
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

function getFormatDate(params) {
    return format(new Date(params), 'dd.MM.yyyy  kk:mm:ss', {locale: cs});
}

export default function FotballMatchDataGrid({ currentMatchData }) {
    const [row, setRow] = useState([]);

    // zpracování dat
    useEffect(() => {
        if (!currentMatchData) {
            return;
        }

        const { players, startTime, endTime, ...restData } = currentMatchData;
        
        const footballMatch = {
            ...restData,
            players: (players || []).map((player) => player.player).join(', '),
            startTime: getFormatDate(startTime),
            endTime: getFormatDate(endTime)
        }
        setRow([footballMatch]);



    }, [currentMatchData])

    const chartData = {
        labels:["Celkový počet kroků", "Průměrný počet kroků", "Celková vzdálenost","Průměrná vzdálenost", "Průměrná rychlost (*1000)"],
        datasets:[{
            label: "Výkon",
            data: [row[0]?.totalSteps,
                   row[0]?.avgSteps,
                   row[0]?.totalDistance,
                   row[0]?.avgDistance,
                   row[0]?.avgSpeed*1000,
            ],
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


    // Zobrazení dat
    return (
        <div>

            {row.length > 0 &&
                <div>
                    <h1>Graf zápasu {currentMatchData.footballMatchId} </h1>
                    <Chart chartData={chartData}/>
                </div>
            }
            <div>
            { row.length > 0 &&
                <DataGrid
                    rows={row}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    autoHeight
                    getRowId={(row) => row.footballMatchId}
                    style={{marginTop:30}}
                />
            }
        </div>
        </div>
    );
}
