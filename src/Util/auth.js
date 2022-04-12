function getAccessToken () {
    return window.localStorage.getItem("Token");
}

function setAccessTokenAndLogin (token, login) {
    window.localStorage.setItem("Token", token)
    window.localStorage.setItem("Login", login)
}

function getLogin () {
    const login = window.localStorage.getItem('Login');

    if (!login) {
        return '';
    }
    return login;
}

export default {
    getLogin,
    getAccessToken,
    setAccessTokenAndLogin,
};
export {getLogin}
  
  