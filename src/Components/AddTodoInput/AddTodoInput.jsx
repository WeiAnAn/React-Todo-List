import React, { Component } from 'react';
import { addTodo } from '../../Actions/Action.jsx';
import './AddTodoInput.scss';

class AddTodoInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoInput: ""
        }
    }
    onChangeTodoInput(e){
        this.setState({
            todoInput : e.target.value,
        })
    }
    
    inputPressEnter(e){
        if(e.charCode == 13){
            this.props.addTodo(this.state.todoInput);
            this.setState({
                todoInput: ""
            })
        }
    }

    render() {
        
        return (
            <input type="text" placeholder="press enter to add Todo" 
                value={this.state.todoInput} className="addTodoInput"
                onChange={this.onChangeTodoInput.bind(this)}
                onKeyPress={(e)=>this.inputPressEnter(e)}/>
        );
    }
}

export default AddTodoInput;