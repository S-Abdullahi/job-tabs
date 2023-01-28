import React from 'react';
import Description from './Description'
import Menu from './Menu'

export default function App(){
    return (
        <div>
            <h1 className='title'>Job Description</h1>
            <div className='main-con'>
                <Menu/>
                <Description/>
            </div>
        </div>
    )
}