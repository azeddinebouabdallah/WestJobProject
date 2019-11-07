import React from 'react'

import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Policy from '../../components/Policy/Policy'

import './Instructions.css'

function Instructions(props) {
    return (
        <div className='instructions'>
            <NavigationBar/>
            <Policy/>
        </div>
    )
}

export default Instructions