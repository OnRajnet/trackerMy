import React, {useEffect, useState} from 'react'
import {Button} from "@mui/material";
import { Redirect, Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import {useAuth} from "../../Context/AuthContext";

const useStyles = makeStyles((theme) => ({
    home: {
      flex: 2,
      padding: 20,
        textAlign: "center",
    },
    button:{
        margin:20,
    }
  }));

export default function Match() {

    const classes = useStyles();

    return (
            <div className={classes.home}>
                <p>
                    Karta ZÁPAS, <br/>
                    zde je možnost vybrat mezi vytvořením nového zápasu a nebo zobrazení již vytvořeného zápasu.
                </p>
                    <Link to="/createMatch" variant="body2" className={classes.button}>
                    <Button variant="contained">
                        Vytvoř zápas
                    </Button>
                    </Link>

                <Link to="/matchDetail" variant="body2" className={classes.button}>
                <Button variant="contained">
                    Ukaž zápasy
                </Button>
                </Link>

        </div>

    )
}
