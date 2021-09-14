import React, {Component} from 'react';
import GoogleLogin from "react-google-login";

class GLogin extends Component {

    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }

    render() {
        return (
            <div>
                <GoogleLogin
                    clientId="436937248920-g5o3f9ae85pab1nbta6jinn8r0fq90cf.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}/>
            </div>
        );
    }
}

export default GLogin;
