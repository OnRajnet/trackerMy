import React, {useEffect, useState} from 'react'
import {getAllPlayer} from "../../Util/api";
import Button from "@mui/material/Button";
import MatchForm from "../../Components/MatchForm";


export default function CreateMatch (){

    const [ playerList, setPlayerList ] = useState([]);

    const fetchPLayerList = async () => {
        const { id } = await getAllPlayer();
        setPlayerList(id);
    }

    const handleClick = () => {
        fetchPLayerList();
    }

    useEffect(() => {
        fetchPLayerList()
    }, [])


    return(
        <div>
            <div>

                <h1>Formulář pro vytvoření nového zápasu</h1>
                { /* playerList &&  
                    <ul>
                        { playerList.map((player, index) => {
                            return <li key={index}>{player}</li>
                        }) }
                    </ul>
                    */}   
            </div>
                  
            <MatchForm playerList={playerList} />
        </div>

    )
}