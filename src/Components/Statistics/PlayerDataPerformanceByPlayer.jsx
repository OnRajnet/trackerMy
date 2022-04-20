import React, {Fragment, useEffect, useState} from 'react';
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
        field: 'steps',
        headerName: 'Kroky',
        width: 150,
        editable: true,
    },
    {
        field: 'distance',
        headerName: 'Vzdálenost',
        type: 'number',
        width: 150,
        editable: true,
    },
    {
        field: 'maxSpeed',
        headerName: 'Maximální počet kroků',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 220,
    },
    {
        field: 'minSpeed',
        headerName: 'Minimální rychlost',
        type: 'number',
        width: 200,
        editable: true,
    },
    {
        field: 'avgSpeed',
        headerName: 'Průměrná rychlost',
        type: 'number',
        width: 200,
        editable: true,
    },
];


export default function PlayerDataPerformanceByPlayer({ playerData }) {

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
 }, [playerData])


    const chartData = {
        labels:["Celkový počet kroků", "Celková vzdálenost"],
        datasets:[{
            label: "Výkon",
            data: [rows[0]?.reduce((total, obj) => obj.steps + total,0),
                rows[0]?.reduce((total, obj) => obj.distance + total,0),
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

    return(
        <div>
        {/*    Player part*/}
            { rows.length > 0 && rows.map((row, index) => {
                return (
                    <Fragment>
                        <Chart chartData={chartData} options/>
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
                    </Fragment>

                )
            })
            }

        </div>
    )

}
