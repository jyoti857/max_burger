import React from 'react';

class Person extends React.Component{
    

    static getDerivedStateFromProps(state, props){
        console.log('derived ---> ', props, state);
        return state;
    }
    shouldComponentUpdate(nextProps, prevProps){
        console.log("this is from shouldComponentUpdate nextProps --->", nextProps);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("get snapshot before update prevState ---> ");
        return {message: " that comes from getSnapshotBeforeUpdate"}
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("component did update, ", snapshot)
    }
    render(){
        console.log("rendering from Person component,,,");
        const {name, flag, onValueChange, onUpdateName, age} = this.props;
        return(
            <div>
                This is of person component {name} and age {age}
                <br />
                <input  name = 'name' 
                    value = {name} 
                    onChange = {onValueChange}/>
                <br />
                <button onClick = {onUpdateName}>Click here </button>
                <br />
                <h1>{flag ? name: ""}</h1>

            </div>
        )
    }
}

export default Person;