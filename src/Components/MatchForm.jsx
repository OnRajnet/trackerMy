import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import cs from 'date-fns/locale/cs';

import TextField from '@mui/material/TextField';
import {makeStyles} from "@material-ui/core/styles";
import {createFotballMatch} from "../Util/api";
import {useSnackbar} from "../Context/SnackbarContext";


export default function MatchForm ({ playerList }) {

    console.log(playerList)

    const [ formPlayers, setFormPlayers ] = useState([{ name: '' }]);

    const [startDateTime ,setStartDateTime] = React.useState(new Date());
    const [endDateTime ,setEndDateTime] = React.useState(new Date());

    const { openSnackbar, hideSnackbar } = useSnackbar();

    const handleChangeSelect = (index, value) => {
        const values = [...formPlayers]

        values[index].name = value;

        setFormPlayers(values);
    }

    const handleAddFormPlayer = () => {
        setFormPlayers([...formPlayers, { name: '' }])
    }
    useEffect(() => {
        console.log(...formPlayers);

    }, [formPlayers])

    const useStyles = makeStyles((theme) => ({
        home: {
            padding: 10,
            margin:50,
        },
    }));

    const handleSubmit = async (e) =>{
        hideSnackbar();
        try {
            await createFotballMatch((formPlayers || []).map(player => player.name), startDateTime.getTime(), endDateTime.getTime())
            openSnackbar('success','Zápas úspěšně vytvořen')
        }catch (error){
            console.log('error');
            openSnackbar('error', 'Zápas nelze vytvořit ze zadaných údajů');
        }
    }
    const classes = useStyles();

    return (
        <div className={classes.home}>
            <Button
                variant="contained"
                size="medium"
                onClick={handleAddFormPlayer}
            >
                Přidat hřáče
            </Button>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                { 
                    formPlayers && formPlayers.map((formPlayer, index) => {
                    return <Select
                                key={index}
                                placeholder={"Výběr hráče"}
                                sx={{ m: 1, width: '15ch' }}
                                value={formPlayer.name}
                                onChange={(event) => handleChangeSelect(index, event.target.value)}
                            >
                                { 
                                    playerList && playerList.map((player, index) => {
                                    return <MenuItem 
                                                key={index}
                                                value={player}
                                            >
                                                {player}
                                            </MenuItem>
                                    }) 
                                }
                            </Select>
                    })
                }
            </div>
        </Box>
            <div style={{
                padding:10,
            }}>
                <h3>
                    Výběr datumu:
                </h3>
                <br/>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={cs}>
                    <DateTimePicker
                        label="Začátek zápasu"
                        variant="outlined"
                        value={startDateTime}
                        onChange={setStartDateTime}
                        renderInput={(props) => <TextField {...props} />}
                        />

                    <DateTimePicker
                        label="Konec zápasu"
                        value={endDateTime}
                        onChange={setEndDateTime}
                        variant="contained"
                        renderInput={(params) => <TextField {...params} />}
                        className={classes.home}
                    />
                </LocalizationProvider>
                <br/>
                <br/>
                <br/>

{/*                <LocalizationProvider dateAdapter={AdapterDateFns} locale={cs}>
                        <DateTimePicker
                            label="Konec zápasu"
                            value={endDateTime}
                            onChange={setEndDateTime}
                            variant="contained"
                            renderInput={(params) => <TextField {...params} />}
                        />
                </LocalizationProvider>
                <br/>
                <br/>*/}
            </div>

            <Button variant="contained" size="large" type="submit" onClick={handleSubmit}>
                Vytvořit zápas
            </Button>
    </div>
    );
}
