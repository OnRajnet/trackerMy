import { Base64 } from 'js-base64';
import axios from './client';
import snackbarContext from '../Context/SnackbarContext';
import auth from './auth';
import {GlobalStoreContext} from "../Context/GlobalStoreContext";
import React, {useState, useContext} from "react";


const appLogin = window.localStorage.getItem("Login")
const appToken = window.localStorage.getItem("Token")
const [store, setStore] = useContext(GlobalStoreContext)

async function saveUserToDb(login, password){
    try {
        const { data }  = await axios.post('/api/user', {login: login, password: password},{})
            .catch(function (error){
                if (error.response.status == 401){
                    console.log("Login je již obsazený")
                }
            })

    }catch (error) {
            console.log(error)

    }

}

async function loginPLayer (login, password){
    const varToken = Base64.encode(login + ":" + password, true)

    const config = { headers: { Authorization: `Basic ${varToken}` }}

    try {
        const { data } = await axios.post('/api/auth/token', {}, config)
            .catch(function (error){
                if (error.response.status == 401){
                    console.log("uživatel není nebo špatné heslo")
                }
            })


        if (data) {
            auth.setAccessTokenAndLogin(data, login);
        }
    } catch (error) {
        console.warn(error)
    }
}

async function getGoogleUserConsentLink() {
    const config = {headers: {authorization: 'Bearer ' + appToken}}

    const { data } = await axios.get("/api/player/" + appLogin + "/consent",config)

    return data
}

function logOutApp(){
    window.localStorage.clear()
}



async function getAllPlayer(){
    const appToken = window.localStorage.getItem("Token")
    const login = "user"
    const config = {headers: {authorization: 'Bearer ' + appToken}}

    const {data} = await axios.get('api/player'+ {login},{config})

    return data
}

async function getPlayerStat(){

    const config = {headers: {authorization: 'Bearer ' + appToken}}

    const {data} = await axios.get('api/player/' + appLogin, config)

    console.log(data)
    setStore(data)
    return data
}

async function createFotballMatch(player, startTime, endTime){
    const config = {headers: {authorization: 'Bearer ' + appToken}}

    try {
        await axios.post('api/match' + appLogin,{player: player, startTime: startTime, endTime: endTime},config)

    }
    catch (e){
        console.log(e)
    }

}


export {
    logOutApp,
    loginPLayer,
    saveUserToDb,
    getGoogleUserConsentLink,
    getAllPlayer,
    getPlayerStat,
    createFotballMatch,
}







