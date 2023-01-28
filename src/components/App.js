import React from 'react';
import Description from './Description'
import Menu from './Menu'

export default function App(){
    return (
        <div>
            <h1>Job Description</h1>
            <div>
                <Menu/>
                <Description/>
            </div>
        </div>
    )
}