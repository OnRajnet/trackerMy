import React, {useEffect, useState} from 'react'
import {Button} from "@mui/material";
import { Redirect, Link } from "react-router-dom";

export default function Match() {

    return (
            <div>
                <Link to="/createMatch" variant="body2">
                <Button>
                    Vytvoř zápas
                </Button>
                </Link>

                <Link to="/matchDetail" variant="body2">
                <Button>
                    Ukaž zápasy
                </Button>
                </Link>
        </div>

    )
}
