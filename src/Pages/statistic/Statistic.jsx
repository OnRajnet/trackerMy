import React, {useState, useEffect, useLayoutEffect} from 'react';
import {getAllPlayer, getPlayerDataPerformance} from "../../Util/api";
import { useAuth } from '../../Context/AuthContext';
import PlayerDataPerformanceByTrener from "../../Components/Statistics/PlayerDataPerformanceByTrener";
import PlayerDataPerformanceByPlayer from  "../../Components/Statistics/PlayerDataPerformanceGridByTrener";
import {TRENER} from "../../Helper/GlobalVariable";


export default function Statistic() {
    const { currentAuth } = useAuth();
    const isTrainer = currentAuth === TRENER
    const [playerData, setPlayerData] = useState([]);
    const [ playerList, setPlayerList ] = useState([]);

    const fetchPLayerList = async () => {
        const { id } = await getAllPlayer();
        setPlayerList(id);
    }

    const fetchPlayerData = async (login) => {
        const data = await getPlayerDataPerformance(login);
        setPlayerData([
            ...playerData,
            {...data}
        ]);
    }


    useEffect(() => {
        if (currentAuth && isTrainer) {
            fetchPLayerList();
        }
        if (currentAuth && !isTrainer) {
            fetchPlayerData(currentAuth);
        }
    },[currentAuth])

    return (
        <div style={{ height: 400, width: '100%' }}>
            { currentAuth && !isTrainer && <>
                {/*Hřáčská část*/}
                <PlayerDataPerformanceByPlayer playerData={playerData} />

            </>
            }
            {
               currentAuth && isTrainer &&<>
                    {/*Trenérská část*/}
                    <PlayerDataPerformanceByTrener playerList={playerList} />
                </>
            }


        </div>
    );
}
