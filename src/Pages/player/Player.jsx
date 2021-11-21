import React, {useMemo, useState, useEffect} from 'react';
import Button from "@mui/material/Button";
import {getPlayerStat} from "../../Util/api";
import { useAuth } from '../../Context/AuthContext';
import Table from '../../Helper/Table';





export default function DataTable() {
    const { currentAuth } = useAuth();
    const [dataTable, setDataTable] = useState({login:'', role:'', performance:[]});

    const handleLoadPlayerStat = async () => {
        try {
            const { data } = await getPlayerStat(currentAuth);
            setDataTable(data)
            console.log(dataTable)

        } catch (e) {
            console.error(e)
        }
    }




    const columns = useMemo(
        () =>[
            {

                //first
                Header: 'Údaje',
                columns: [
                    {
                        Header:'Login',
                        accesor: 'login'
                    },
                    {
                        Header:'Role',
                        accesor: 'role'
                    }
                ]
            },
            //Second
            {
                Header: 'Výkon',
                columns: [
                    {
                        Header: 'steps',
                        accesor: 'performance.steps'
                    }
                ]
            }
        ],
        []
    );

    return (
        <div style={{ height: 400, width: '100%' }}>
            <div>
                <Button
                    onClick={handleLoadPlayerStat}
                >Načti data</Button>
            </div>

            {/*<Table columns={columns} data={dataTable} />*/}
        </div>
    );
}
