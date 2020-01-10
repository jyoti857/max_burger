import React from 'react';
import './App.css';
// import Person from './persons/person';
// import Layout from './component/layout';
import BurgerBuilder from './containers/burger_builder';
import Aux from './hoc/Aux';
import Toolbar from './component/navigation/toolbar';

class App extends React.Component{

  
  render(){
    return(
      <Aux>
        <Toolbar />
        <BurgerBuilder />
      </Aux>
    )
  }
 
  // state = {
  //     name: "jyoti",
  //     flag : false,
  // }
  // onValueChange = e => {
  //     const {name, value} = e.target;
  //     this.setState({[name]: value})
  //     if(name) this.setState({flag: false})
  // }
  // onUpdateName = () => {
  //     this.setState({flag: !this.state.flag})
  // }
  // render() {
  //   const {name, flag} = this.state;
  //   return (
  //     <div className="App">
  //       <Person  name = {name} age  ='13' 
  //         onUpdateName = {this.onUpdateName}
  //         onValueChange  = {this.onValueChange}
  //         flag = {flag}
  //         />
  //     </div>
  //   );
  // }
}

export default App;
