import constant from "../constants"
import axios from "axios";
import constants from "../constants";
import {encode, decode, Base64} from 'js-base64';

window.localStorage.setItem("a", "abc")
window.localStorage.getItem("a")

function loginWithToken(login, authToken)
{
    fetch(constant + '/api/auth/handleGoogleAuthToken/' + login)
        .then(res => res.json())
        .then((data) => {
            this.setState({contacts: data})
        })
        .catch(console.log)
}
export {loginWithToken}

function saveUserToDb(login, password){
    try {
        axios.post(constants + "/api/user", {login: login, password: password},)
            .then((response =>{
                    console.log(response.statusText)
                },(error) =>{
                    console.log(error.statusText)
                }
            ))
    }catch (e) {
    }

}
export {saveUserToDb}

function loginPLayer(login, password){

    const varToken = Base64.encode(login + ":" + password, true)

   axios.post(constants + "/api/auth/token",{}, {
       headers: {
           Authorization: 'Basic ' + varToken
       }})
       .then((response =>{
           if (response.status == 200){
               window.localStorage.setItem("Token", response.data);
               console.log("Succes")
               window.location = "/home"
           }
       }))
}
export {loginPLayer}



