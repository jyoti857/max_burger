import React from 'react';
import './index.css';
import BurgerIngredients from './burger_ingredients';
const Burger = props => {

    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredients key={igKey + i} type = {igKey} />
        })
    }).reduce((acc, ele) => acc.concat(ele), []);
    console.log("transformed Ingredients ---> ", transformedIngredients);
    if(transformedIngredients.length < 1){
        transformedIngredients =  <p>Please add ingredients to make a Burger</p>
    }
    return(
        <div className = 'Burger'>
            <BurgerIngredients  type ='bread-top'/>
            {/* <BurgerIngredients  type ='cheese'/>
            <BurgerIngredients  type ='meat'/> */}
            {transformedIngredients}
            <BurgerIngredients  type ='bread-bottom'/>
        </div>
    )
}

export default Burger;