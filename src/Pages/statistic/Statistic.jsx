import React, {useState, useEffect} from 'react';
import {getAllPlayer, getPlayerDataPerformance} from "../../Util/api";
import { useAuth, getLogin } from '../../Context/AuthContext';
import PlayerDataPerformanceByPlayer from "../../Components/Statistics/PlayerDataPerformanceByPlayer";
import PlayerDataPerformanceByTrener from "../../Components/Statistics/PlayerDataPerformanceByTrener";

export default function Statistic() {
    const { currentAuth } = useAuth();
    const [isTrainer] = useState(currentAuth === 'trener')
    const [playerData, setPlayerData] = useState("")
    const [ playerList, setPlayerList ] = useState([]);

    const fetchPLayerList = async () => {
        const { id } = await getAllPlayer();
        setPlayerList(id);
    }

    const fetchPlayerData = async (login) => {
        const { data } = await getPlayerDataPerformance(login);
        setPlayerData(data);
    }

    useEffect(() => {
        if (currentAuth && !isTrainer) {
            fetchPLayerList();
        }

        
        if (currentAuth && isTrainer) {
            fetchPlayerData(currentAuth);
        }
        
    }, [currentAuth])


    return (
        <div style={{ height: 400, width: '100%' }}>

            { isTrainer && <>
                {/*Hřáčská část*/}
                asdfas
                <PlayerDataPerformanceByPlayer playerData={playerData} />
            </>
            }
            {
                !isTrainer &&<>
                    {/*Trenérská část*/}
                    <PlayerDataPerformanceByTrener playerList={playerList} />
                </>
            }


        </div>
    );
}
