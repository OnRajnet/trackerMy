import React, {useEffect, useState} from 'react'
import {Button} from "@mui/material";
import { Redirect, Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    home: {
      flex: 2,
      padding: 20,
        textAlign: "center",
    }
  }));

export default function Match() {

    const classes = useStyles();

    return (
            <div>
                <Link to="/createMatch" variant="body2">
                <Button variant="contained">
                    Vytvoř zápas
                </Button>
                </Link>

                <Link to="/matchDetail" variant="body2">
                <Button variant="contained">
                    Ukaž zápasy
                </Button>
                </Link>
        </div>

    )
}
