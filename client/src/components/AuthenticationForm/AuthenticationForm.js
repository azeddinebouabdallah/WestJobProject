import React, {useState, useEffect} from 'react'

import {Input, Button, Card} from 'semantic-ui-react'

import './AuthenticationForm.css'

function AuthenticationForm(props){

    return (<div className="authentication-form">
        <Card>
        <h2>Collaborate in the Event:</h2>
        <Input placeholder='Firstname' className='input' type="text"/>
        <Input placeholder='Lastname' type="text" className='input'/>
        <Input placeholder='Email' type="text" className='input'/>
        <Button primary>Start</Button>
        </Card>
    </div>)
}

export default AuthenticationForm