import * as firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Gicon from '../../../images/google.png';
import './Login.css';
import Logo from '../../../images/logos/logo.png';
import { UserContext } from "../../../App";
import firebaseConfig from "./firebase.config";




const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                storeAuthToken();
                history.replace(from)

            }).catch(error => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

//Added jwt
    const storeAuthToken = () =>{
        firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
            sessionStorage.setItem('token',idToken);
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="">
            <div className="text-center mt-4 d-flex justify-content-center">
            <img  style={{width:'180px'}} src={Logo} alt=""/>
            </div>
        <div className="d-flex align-items-center justify-content-center">
            <div className="text-center loginform">
            <h2 className="pb-2">Login With</h2>
            <button className="form-control" onClick={handleGoogleSignIn}><img src={Gicon} className="gicon" />Continue with Google</button>
            <p className="pt-2">Don't have an account? <Link to="/login">Create an account</Link></p>
        </div>
        </div>
        </div>
    );
};

export default Login;