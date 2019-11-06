import React, {useState, useEffect} from 'react'

function AuthenticationForm(props){

    return (<div id="authentication-form">
        <h2>Login:</h2>
        <input placeholder='email'></input>
        <input placeholder='username'></input>
        <button>Login</button>
    </div>)
}

export default AuthenticationForm