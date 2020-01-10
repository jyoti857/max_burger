import React from 'react';
import Burger from '../../component/burger';
import BuildControls from '../../component/burger/buildControls';
import Modal from '../../component/UI/Modal';
import BurgerSummary from '../../component/burger/BurgerSummary';


const INGREDIENTS_PRICES = {
    salad: 0.4,
    meat: 1.3,
    bacon: 0.7,
    cheese: 0.3,
};
class BurgerBuilder extends React.Component{
    state = {
        ingredients: {
          meat: 0, 
          salad: 0,
          cheese: 0,
          bacon: 0,
        },
        totalPrice: 4,
        isPurchaseable: false,
        isPurchasing: false,
      }
      addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition =  INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice  = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients}); 
        this.updatePurchaseOrderHandler(updatedIngredients);
      }
      removeIngredientHandler = type => {
          const oldCount = this.state.ingredients[type];
          if(oldCount>0){
              const updatedCount = oldCount - 1;
              const updatedIngredients = {
                  ...this.state.ingredients
              };
              updatedIngredients[type] = updatedCount;
              const priceRemoval = INGREDIENTS_PRICES[type];
              const oldPrice = this.state.totalPrice;
              const newPrice = oldPrice - priceRemoval;
              this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
              this.updatePurchaseOrderHandler(updatedIngredients);
          }
      }

      updatePurchaseOrderHandler = ingredients =>{
          const sum = Object.keys(ingredients).map(igKey => {
              return ingredients[igKey]
          }).reduce((sum, ele) => sum+ele, 0);
          console.log("sum --->", sum);
          this.setState({isPurchaseable: sum>0})
      }

      purchaseHandler = () => {
          this.setState({isPurchasing: true});
      }
      modalCloseHandler = () => {
          this.setState({isPurchasing: false});
      }
      purchaseContinueHandler = () => {
          alert('Thanks, your order is in process !');
      }
      purchaseCancelHandler = () => {
          this.setState({isPurchasing: false});
      }
    render(){
        return(
            <>
                <Burger ingredients = {this.state.ingredients} price = {this.state.totalPrice} />
                <Modal show = {this.state.isPurchasing} modalClose = {this.modalCloseHandler}>
                    <BurgerSummary  
                        ingredients = {this.state.ingredients}
                        purchaseContinued ={this.purchaseContinueHandler}
                        purchaseCancelled = {this.purchaseCancelHandler}/>
                </Modal>
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler} 
                    ingredientRemoved = {this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    ordered = {this.purchaseHandler}
                    orderHandler = {this.state.isPurchaseable} />
            </>
        )
    }
}

export default BurgerBuilder;