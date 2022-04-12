import React, { useEffect, useState } from "react";
import {fetchWeaherData, weatherDataFetch} from "../Util/api";
import {Button} from "@mui/material";
import {Card} from "@material-ui/core";

export default function WeatherApp() {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
            console.log(lat)
            console.log(long)
        }
        fetchData();
    }, [lat,long])

    async function dataFetch(){
        const actualData = await weatherDataFetch(lat, long)
        setData(actualData)
        console.log(" Data jsou ")
        console.log(data)
    }

    return (
        <div>
            Weather
            <Button onClick={dataFetch}>
                FETCH
            </Button>
        </div>
    );
}