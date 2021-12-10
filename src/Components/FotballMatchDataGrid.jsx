import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns';
import cs from 'date-fns/locale/cs';
import {useEffect, useState} from "react";

const columns = [
    { 
        field: 'id',
        headerName: 'ID', 
        type:"number",
        width: 110
    },
    {
        field: 'footballMatchId',
        headerName: 'footballMatchId',
        width: 150,
        editable: true,
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
        width: 300,
        editable: true,
    },
    {
        field: 'endTime',
        headerName: 'Konec zápasu',
        type: 'number',
        width: 300,
        editable: true,
    },
    {
        field: 'totalSteps',
        headerName: 'Celkový počet kroků',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 300,
    },
    {
        field: 'avgSteps',
        headerName: 'Průbměr kroků',
        type: 'number',
        width: 300,
        editable: true,
    },
    {
        field: 'totalDistance',
        headerName: 'Celková vzdálenost',
        type: 'number',
        width: 300,
        editable: true,
    },
    {
        field: 'avgDistance',
        headerName: 'Průměrná vzdálenost',
        type: 'number',
        width: 300,
        editable: true,
    },
    {
        field: 'avgSpeed',
        headerName: 'Průměrná rychlost',
        type: 'number',
        width: 300,
        editable: true,
    },
    {
        field: 'players',
        headerName: 'Hráči',
        type: 'array',
        width: 300,
        editable: true,
    },

];

function getFormatDate(params) {
    return format(new Date(params), 'dd.MM.yyyy  kk:mm:ss', {locale: cs});
}

export default function FotballMatchDataGrid({currentMatchData}) {


    const rows = [
        {
            id: 1,
            footballMatchId:currentMatchData.footballMatchId,
            trainer: currentMatchData.trainer,
            startTime: getFormatDate(1),
            endTime: getFormatDate(1),
            totalSteps: currentMatchData.totalSteps,
            avgSteps: currentMatchData.avgSteps,
            totalDistance: currentMatchData.totalDistance,
            avgDistance: currentMatchData.avgDistance,
            avgSpeed: currentMatchData.avgSpeed,
            players: currentMatchData.players
        },
    ];

    return (
        <div style={{ height: 600, width: '100%' }}>
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
