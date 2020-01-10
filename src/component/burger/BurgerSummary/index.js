import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button';



const BurgerSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key = {igKey}><span style = {{textTransform: 'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]}</li>
    })
    return(
        <Aux>
            <h3>Place your order</h3>
            <p>A delicious burger with the following ingredients: {ingredientSummary}</p>
            <p>Continue to Order,,,</p>
            <Button btnType = 'Danger' clicked = {props.purchaseCancelled}>Cancel</Button>
            <Button btnType = 'Success' clicked = {props.purchaseContinued}>Continue</Button>
        </Aux>
    )
}

export default BurgerSummary;