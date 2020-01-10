import React from 'react';
import BuildControl from '../BuildControl';
import './index.css';


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]
const BuildControls = props => {
    console.log("build Build controls props ---> ", props)
    return <div className = 'BuildControls'>
        <div style = {{margin: '10px 250px'}}>Price: <strong>{props.price.toFixed(2)}</strong></div>
        {
            controls.map(control => (
                <BuildControl key = {control.label}
                        label = {control.label}
                        added = {() => props.ingredientAdded(control.type)}
                        removed = {() => props.ingredientRemoved(control.type)}
                    />
            ))
        }
        <button 
            className = 'OrderButton' 
            disabled={!props.orderHandler}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
}

export default BuildControls;