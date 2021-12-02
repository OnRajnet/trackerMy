import { Base64 } from 'js-base64';
import axios from './client';
import auth from './auth';

async function saveUserToDb(login, password){
    try {
        const { data }  = await axios.post('/api/user', {login: login, password: password},{})
            .catch(function (error){
                if (error.response.status == 401){
                    console.log("Login je již obsazený")
                }
            })

    } catch (error) {
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
    
    const appToken = window.localStorage.getItem("Token")
    const config = {headers: {authorization: 'Bearer ' + appToken}}
    const appLogin = window.localStorage.getItem("Login")

    const { data } = await axios.get("/api/player/" + appLogin + "/consent",config)

    return data
}

function logOutApp(){
    window.localStorage.clear()
}



async function getAllPlayer(){
    const appToken = window.localStorage.getItem("Token")
    const config = {headers: {authorization: 'Bearer ' + appToken}}

    const {data} = await axios.get('api/player',{config})

    return data
}

async function getPlayerStat(appLogin){
    try {
        const response = await axios.get('api/player/' + appLogin)
        return response;
    } catch(e) {
        console.error(e)
    }
}

async function createFotballMatch(player, startTime, endTime){
    const appToken = window.localStorage.getItem("Token")
    const config = {headers: {authorization: 'Bearer ' + appToken}}

    try {
        await axios.post('api/match',{player: player, startTime: startTime, endTime: endTime},config)

    }
    catch (e){
        console.log(e)
    }

}

async function changePassword(oldPassword, newPassword){
    const appLogin = window.localStorage.getItem("Login")
    const appToken = window.localStorage.getItem("Token")
    const config = {headers: {authorization: 'Bearer ' + appToken}}

    try {
        const data = await axios.put(`/api/user/` + appLogin,{newPassword: newPassword, oldPassword: oldPassword},config)
    }
    catch (e){
        console.log(e)
        return e
    }
}

async function getFotbalMatchId(){
    const appToken = window.localStorage.getItem("Token")
    const config = {headers: {authorization: 'Bearer ' + appToken}}
    try{
        const {data} = await axios.get('/api/match/', config)
        return data
    }catch (e){
        console.log(e);
    }
}

async function getFotbalMatchFromId(id){
    const appToken = window.localStorage.getItem("Token")
    const config = {headers: {authorization: 'Bearer ' + appToken}}
    try {
        const {data} = await axios.get('/api/match/' + id, config)
        return data
    }catch (e){
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
    changePassword,
    getFotbalMatchId,
    getFotbalMatchFromId
}







