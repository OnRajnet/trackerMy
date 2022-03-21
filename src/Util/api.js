import { Base64 } from 'js-base64';
import axios from './client';
import auth from './auth';

async function saveUserToDb(login, password){
    try {
        await axios.post('/api/user', {login: login, plainPass: password},{})
    } catch (error) {
        return error.log(error);
    }
}

async function loginPLayer (login, password){
    const varToken = Base64.encode(login + ":" + password, true)

    const config = { headers: { Authorization: `Basic ${varToken}` }}

    try {
        const { data } = await axios.post('/api/auth/token', {}, config)
        if (data) {
            auth.setAccessTokenAndLogin(data, login);
        }
    } catch (error) {
        return error.log(error)
    }
}

async function getGoogleUserConsentLink() {
    const appLogin = window.localStorage.getItem("Login")
    const url = `/api/player/${appLogin}/consent`
    const { data } = await axios.get(url)

    return data
}

function logOutApp(){
    window.localStorage.clear()
}

async function getAllPlayer(){
    const url = '/api/player'
    const { data } = await axios.get(url)

    return data
}
async function getPlayerDataPerformance(login){

    try {
        const url = `/api/player/${login}`;
        const { data } = await axios.get(url)
        return data
    }catch (error){
        console.log(error)
        return error
    }

}

async function createFotballMatch(player, startTime, endTime){
    const url = '/api/match/'
    try {
        await axios.post(url,{playersLogins: player, startTime: startTime, endTime: endTime})

    }
    catch (error){
        return error.log(error)
    }

}

async function changePassword(oldPassword, newPassword){
    const appLogin = window.localStorage.getItem("Login")
    const url = `/api/user/${appLogin}`
    try {
        await axios.put(url,{newPassword: newPassword, oldPassword: oldPassword})
    }
    catch (error){
        console.log(error)
        return error
    }
}

async function getFotbalMatchId(){
    const url = 'api/match/'
    try{
        const {data} = await axios.get(url)
        return data
    }catch (error){
        console.log(error);
    }
}

async function getFotbalMatchById(id){
    const url = `/api/match/${id}`
    try {
        const {data} = await axios.get(url)
        return data
    }catch (error){
        console.log(error)
    }
}

export {
    logOutApp,
    loginPLayer,
    saveUserToDb,
    getGoogleUserConsentLink,
    getAllPlayer,
    getPlayerDataPerformance,
    createFotballMatch,
    changePassword,
    getFotbalMatchId,
    getFotbalMatchById
}







