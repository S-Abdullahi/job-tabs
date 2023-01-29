import React from 'react';

export default function Menu({comp, displayJD}){
    return (
            <button className='menu-item' onClick={()=>displayJD(comp)}>{comp}</button>
    )
}