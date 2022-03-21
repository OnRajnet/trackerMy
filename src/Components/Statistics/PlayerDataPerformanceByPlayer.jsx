import React, {useEffect, useState} from 'react';
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

    return(
        <div>
        {/*    Player part*/}
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
    )

}
