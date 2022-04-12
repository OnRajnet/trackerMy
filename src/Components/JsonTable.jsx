import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import JsonData from '../data.json';
import {useEffect, useState} from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function ColumnGroupingTable() {
    const [row, setRow] = useState([])

    useEffect(() =>{
        setRow(JsonData)
    }, [row])


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Kolo</StyledTableCell>
                        <StyledTableCell>Čas</StyledTableCell>
                        <StyledTableCell align="right">Datum</StyledTableCell>
                        <StyledTableCell align="right">Soupeř</StyledTableCell>
                        <StyledTableCell align="right">Místo</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {row.map((item) =>{
                        return(
                            <StyledTableRow key={item.id}>
                                <StyledTableCell component="th" scope="row">{item.id}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{item.time}</StyledTableCell>
                                <StyledTableCell align="right">{item.date}</StyledTableCell>
                                <StyledTableCell align="right">{item.opponent}</StyledTableCell>
                                <StyledTableCell align="right">{item.place}</StyledTableCell>
                            </StyledTableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
