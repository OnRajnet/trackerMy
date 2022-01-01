import React, {useEffect, useState} from "react";
import {getFotbalMatchById, getFotbalMatchId} from "../../Util/api";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FotballMatchDataGrid from "../../Components/FotballMatchDataGrid";
import {Button} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    home: {
        flex: 1,
        padding: 20,
        textAlign: "center",
    },
    button:{
        margin:20,
    }
}));

export default function MatchDetail(){

    const classes = useStyles()
    const [ idList, setIdList ] = useState([]);
    const [ pickedId, setPickedId ] = useState([{id:'' }]);
    const [currentMatchData, setCurrentMatchData] = useState("");
    const idToString = pickedId.map(({id}) => `${id}`)

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
        const response =  await getFotbalMatchById(idToString);
        setCurrentMatchData(response);

    }

    useEffect(() => {
        fetchIdList()
    }, [pickedId])

    return(
        <div className={classes.home}>
            <h2>Vyber zápas, který chceš vidět</h2>

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
                <Button variant={"contained"} onClick={handleShowMatch}>Ukaž zápas {idToString}</Button>
            </div>
            <div>

                <FotballMatchDataGrid currentMatchData={currentMatchData}/>

            </div>

        </div>


    )
}