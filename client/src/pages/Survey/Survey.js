import React from 'react'

import NavigationBar from '../../components/NavigationBar/NavigationBar'
import PostForm from '../../components/PostForm/PostForm'

import './Survey.css'

function Sruvey (props) {

    return (
        <div className='survey'>
            <NavigationBar/>
            <PostForm/>
        </div>
    )
}

export default Sruvey