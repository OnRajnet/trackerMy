import React, {useEffect, useState} from "react";
import {getFotbalMatchById, getFotbalMatchId} from "../../Util/api";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FotballMatchDataGrid from "../../Components/FotballMatchDataGrid";

export default function MatchDetail(){

    const [ idList, setIdList ] = useState([]);
    const [ pickedId, setPickedId ] = useState([{id:'' }]);
    const [currentMatchData, setCurrentMatchData] = useState("");

    const fetchIdList = async () => {
        const { id }  = await getFotbalMatchId();
        setIdList(id);
    }

    const handleChangeSelect = (index, value) => {
        const values = [...pickedId]

        values[index].id = value;

        setPickedId(values);
    }

    const handleShowMatch = async () =>{
       const response =  await getFotbalMatchById(1);
        setCurrentMatchData(response);

    }

    useEffect(() => {
        fetchIdList()
        console.log(pickedId)
    }, [pickedId])

    return(
        <div style={{ height: 400, width: '100%' }}>
            <h2>Vyber zápas</h2>

            <div>
                {
                    pickedId && pickedId.map((pickedId, index) => {
                        return <Select
                            key={index}
                            placeholder={"Výběr ID"}
                            sx={{ m: 1, width: '15ch' }}
                            value={pickedId.id}
                            onChange={(event) => handleChangeSelect(index, event.target.value)}
                        >
                            {
                                idList && idList.map((id, index) => {
                                    return <MenuItem
                                        key={index}
                                        value={id}
                                    >
                                        {id}
                                    </MenuItem>
                                })
                            }
                        </Select>
                    })
                }
            </div>

            <div>

                <button onClick={handleShowMatch}>Ukaž zápas</button>

                <FotballMatchDataGrid currentMatchData={currentMatchData} />

            </div>

        </div>


    )
}