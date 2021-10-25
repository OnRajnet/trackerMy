import React from 'react'
import {Button} from "@mui/material";
import {createFotballMatch} from "../../Util/api";

export default function Match() {
    return (
        <div>
            <Button onSubmit={createFotballMatch}>
                Vytvoř zápas
            </Button>
        </div>
    )
}
