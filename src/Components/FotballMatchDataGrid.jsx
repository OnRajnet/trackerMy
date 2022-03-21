import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns';
import cs from 'date-fns/locale/cs';
import {useEffect, useState} from "react";

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

function getFormatDate(params) {
    return format(new Date(params), 'dd.MM.yyyy  kk:mm:ss', {locale: cs});
}

export default function FotballMatchDataGrid({ currentMatchData }) {
    const [row, setRow] = useState([]);
    const [rowsMatch, setRowsMatch] = useState([]);

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

    return (
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
    );
}
