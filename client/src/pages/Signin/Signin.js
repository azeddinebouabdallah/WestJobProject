import React, {useState} from 'react'
import './Signin.css'

import NavigationBar from '../../components/NavigationBar/NavigationBar'
import AuthenticationForm from '../../components/AuthenticationForm/AuthenticationForm'

function Signin() {

    return (
        <div className='signin-page'>
            <NavigationBar/>
            <AuthenticationForm/>
        </div>
    )

}

export default Signin