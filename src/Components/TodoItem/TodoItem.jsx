import React, { Component } from 'react';
import './TodoItem.scss';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            editInput: this.props.todo,
            completed: this.props.completed
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.todo != this.props.todo ||
            nextProps.completed != this.props.completed ||
            nextState.editInput != this.state.editInput ||
            nextState.completed != this.state.completed){
                return true;
            }
        return false;
    }
    
    componentWillReceiveProps(nextProps) {
        if( nextProps.completed != this.state.completed)
            this.setState({
                completed: nextProps.completed
            })
    }
    
    

    editTodoInput(){
        this.setState({
            editInput: this.props.todo
        })
        let input = this.refs.editInput;
        let todo = this.refs.todo;
        input.removeAttribute('readonly');
        input.removeAttribute('hidden')
        input.focus();
        todo.setAttribute('hidden',true);
        
    }

    editInputOnChange(e){
        this.setState({
            editInput: e.target.value
        })
    }

    editInputOnBlur(e, index){
        this.props.editTodo(index, this.state.editInput);
        e.target.setAttribute('readonly',true);
        e.target.setAttribute('hidden',true);
        this.refs.todo.removeAttribute('hidden');
    }

    checkboxOnChange(index){
        this.props.completeTodo(index);
        this.setState({
            completed: !this.state.completed
        })
    }

    editInputPressEnter(e){
        if(e.charCode == 13)
            e.target.blur();
    }

    render() {
        return (
            <li className="todoItem">
                <input className="completed-checkbox" 
                    type="checkbox" checked={this.state.completed}
                    onChange={()=>{ this.checkboxOnChange(this.props.index) }}/>
                <input type="text" ref="editInput" className="edit-todo-input"
                    hidden readOnly
                    value={this.state.editInput}
                    onChange={(e)=>{ this.editInputOnChange(e) }}
                    onBlur={(e)=> { this.editInputOnBlur(e, this.props.index)}}
                    onKeyPress={(e)=> { this.editInputPressEnter(e)}}
                     />
                <span ref="todo" 
                    className={ this.state.completed ? "finished": ""}>
                    {this.props.todo}
                </span>
                <i className="material-icons"
                    onClick={()=>{
                        this.props.deleteTodo(this.props.index)
                    }}>delete</i>
                <i className="material-icons"
                onClick={()=>{
                    this.editTodoInput();
                }}>edit</i>
            </li>           
        );
    }
}
export default TodoItem;