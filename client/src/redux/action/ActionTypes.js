

const ActionTypes = {

    //AUTH
    SIGNIN_SUCCESS : "SIGNINSUCCESS" ,
    SIGNIN_ERROR : "SIGNINRROR",

    //Register
    SIGNUP_SUCCESS : "SIGNUPSUCCESS",
    SIGNUP_ERROR : "SIGNUPERROR",
    //TRANSFER
    GET_TRANSFERS : "GET_TRANSFERS",
    GET_TRANSFERS_ERROR : "GET_TRANSFER_ERRORs",

    //Google, Apple , Facebook login
    GOOGLE_LOGIN_SUCCESS : "SUCCESS",
    GOOGLE_LOGIN_ERROR : "ERROR",
    FACEBOOK_LOGIN_SUCCESS : "SUCCESS",
    FACEBOOK_LOGIN_ERROR : "ERROR",
    APPLE_LOGIN_SUCCESS : "SUCCESS",
    APPLE_LOGIN_ERROR : "ERROR",
}

export default ActionTypes ;