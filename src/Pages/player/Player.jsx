import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {PlayerPerformanceData} from "../../dummyData";

const columns = [
    { field: 'footballmatchId', headerName: 'matchID', width: 200 },
    {
        field: 'player',
        headerName: 'player',
        width: 200,
        editable: false,
    },
    {
        field: 'steps',
        headerName: 'steps',
        width: 150,
        type: 'number',
        editable: false,
    },
    {
        field: 'distance',
        headerName: 'distance',
        type: 'number',
        width: 200,
        editable: false,
    },
    {
        field: 'maxSpeed',
        headerName: 'maxSpeed',
        type: 'number',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
    },
    {
        field: 'minSpeed',
        headerName: 'minSpeed',
        type: 'number',
        width: 200,
        editable: false,
    },
    {
        field: 'avgSpeed',
        headerName: 'avgSpeed',
        type: 'number',
        width: 200,
        editable: false,
    },
];


export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={PlayerPerformanceData}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
