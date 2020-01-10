import React from 'react';
import './index.css';

const BuildControl = props =>{
    return(
        <div className = 'BuildControl'>
            <div className = 'Label'>{props.label}</div>
            <button className = 'Less' onClick = {props.removed}>less</button>
            <button className= 'More' onClick = {props.added}>more</button>
        </div>
    )
}

export default BuildControl;