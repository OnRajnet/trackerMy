import React, {useState} from 'react';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {Button} from "@mui/material";
import {getPlayerDataPerformance} from "../../Util/api";
import PlayerDataPerformanceGridByTrener from "./PlayerDataPerformanceGridByTrener";
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

export default function PlayerDataPerformanceByTrener({playerList}) {

    const classes = useStyles()
    const [ pickedName, setPickedName ] = useState([{name:'' }]);
    const [playerData, setPlayerData] = useState([])
    const nameToString = pickedName.map(({name}) => `${name}`)

    const handleClick = async () => {
        if (pickedName.name) {
            return;
        }
        const data = await getPlayerDataPerformance(nameToString);

        const isExistPlayer = playerData.findIndex(player => player.login === data.login);

        if (isExistPlayer === -1) {
            setPlayerData([
                ...playerData,
                {...data}
            ]);
        }
    }

    const handleChangeSelect = (index, value) => {
        const values = [...pickedName]

        values[index].name = value;

        setPickedName(values);
    }

    return(
        <div className={classes.home}>
            <h2>Vyber hráče na kterého se chceš podívat</h2>

            <div>
                {
                    pickedName && pickedName.map((pickedName, index) => {
                        return <Select
                            key={index}
                            placeholder={"Výběr hráče"}
                            sx={{ m: 1, width: '15ch' }}
                            value={pickedName.name}
                            onChange={(event) => handleChangeSelect(index, event.target.value)}
                        >
                            {
                                playerList && playerList.map((id, index) => {
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

                <Button variant="contained" onClick={handleClick}>Zobraz data vybraného hráče</Button>

            </div>

            <div>
                {/*    Trener part*/}
                <PlayerDataPerformanceGridByTrener playerData={playerData}/>

            </div>

        </div>
    );

}
