import React from 'react'

import NavigationBar from '../../components/NavigationBar/NavigationBar'

import './Greeting.css'

function Greeting (props) {
    return (
        <div className='greeting'>
            <NavigationBar/>
            <h1 className='greeting-msg'>
                Thank you for your time
            </h1>
        </div>
    )
}

export default Greeting