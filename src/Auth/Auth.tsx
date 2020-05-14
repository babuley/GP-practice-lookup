import auth0, {WebAuth} from "auth0-js";

export default class Auth {
    
    constructor(history:History) {        
        this.history = history;
        this.userProfile = null;
        this.auth0 = new WebAuth({            
            domain: process.env.REACT_APP_AUTH0_DOMAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
            responseType:"token id_token",
            scope:"openid profile email"
        });
    }
       
    login = () =>{
       this.auth0.authorize();     
    };

    handleAuthentication = (history:History) => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                this.history.push("/");
            } else if (err) {
                this.history.push("/");
                alert(`Error:${err.error}. Check the console for details`);
                console.log(err);
            }
        });
    }

    setSession = (authResult) => {
        console.log(authResult);
        const expiresAt = JSON.stringify(authResult.expiresIn * 1000  + new Date().getTime());

        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
    };

    isAuthenticated() {
        const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }

    logout = () => {
        let keys = ["access_token","id_token","expires_at" ];
        keys.forEach(k => {
            localStorage.removeItem(k);
        });
        this.userProfile = null;
        this.auth0.logout({
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            returnTo: process.env.REACT_APP_AUTH0_RETURN_TO

        });
    }

    getAccessToken = () => {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
            throw new Error("Missing access token");
        }
        return accessToken;
    };

    getProfile = (callback) => {
        if (this.userProfile) return callback(this.userProfile);
        this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
            if (profile) this.userProfile = profile;
            callback(profile, err);
        });
    };


}