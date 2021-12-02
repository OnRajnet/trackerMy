import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns';

const columns = [
    { 
        field: 'Id', 
        headerName: 'ID', 
        type:"number",
        width: 90 
    },
    { 
        field: 'fotballMatchId', 
        headerName: 'ID', 
        type:"number",
        width: 90 
    },
    {
        field: 'trainer',
        headerName: 'Trenér',
        width: 150,
        editable: true,
    },
    {
        field: 'startTime',
        headerName: 'Začátek zápasu',
        width: 150,
        editable: true,
    },
    {
        field: 'endTime',
        headerName: 'Konec zápasu',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'totalSteps',
        headerName: 'Celkový počet kroků',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
    },
    {
        field: 'avgSteps',
        headerName: 'Průbměr kroků',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'totalDistance',
        headerName: 'Celková vzdálenost',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'avgDistance',
        headerName: 'Průměrná vzdálenost',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'avgSpeed',
        headerName: 'Průměrná rychlost',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'players',
        headerName: 'Hráči',
        type: 'array',
        width: 110,
        editable: true,
    },

];
const rows = [
    {
        Id: 1,
        footballMatchId: 1,
        trainer: "trener",
        startTime: getFormatDate(1636894800000),
        endTime: getFormatDate(1636897800000),
        totalSteps: 3949,
        avgSteps: 3949.0,
        totalDistance: 2941.4875043569855,
        avgDistance: 2941.4875043569855,
        avgSpeed: 1.114611839953037,
        players: []
    }
];

function getFormatDate(params) {
    return format(new Date(params), 'dd.MM.yyyy mm:ss');
}

export default function FotballMatchDataGrid() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
