import React, { useState, useEffect } from 'react';
import {DataGrid} from "@mui/x-data-grid";


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
    }, [playerData])

    return(
        <div>
            {/* Trener part */}
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
                    />)
                })
            }


        </div>
    );

}
