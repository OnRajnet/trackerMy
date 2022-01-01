import React, {useEffect, useState} from 'react'
import {getAllPlayer} from "../../Util/api";
import MatchForm from "../../Components/MatchForm";


export default function CreateMatch (){

    const [ playerList, setPlayerList ] = useState([]);

    const fetchPLayerList = async () => {
        const { id } = await getAllPlayer();
        setPlayerList(id);
    }

    useEffect(() => {
        fetchPLayerList()
    }, [])


    return(
        <div>
            <div style={{
                textAlign: "center",
            }}>

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