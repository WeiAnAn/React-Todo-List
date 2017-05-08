import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodoInput from '../AddTodoInput/AddTodoInput.jsx';
import TodoList from '../TodoList/TodoList.jsx';
import FilterButton from '../FilterButton/FilterButton.jsx';
import DeleteCompletedButton from '../DeleteCompletedButton/DeleteCompletedButton.jsx';
import { addTodo, deleteTodo, editTodo, completeTodo, deleteCompletedTodo } from '../../Actions/Action.jsx';

class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "ALL"
        }
    }
    

    addTodo(todo){
        this.props.dispatch(addTodo(todo));
    }
    deleteTodo(index){
        this.props.dispatch(deleteTodo(index));
    }
    editTodo(index, todo){
        this.props.dispatch(editTodo(index, todo));
    }
    completeTodo(index){
        this.props.dispatch(completeTodo(index));
    }
    filterAll(){
        this.setState({
            filter: "ALL"
        })
    }
    filterActive(){
        this.setState({
            filter: 'ACTIVE'
        })
    }
    filterCompleted(){
        this.setState({
            filter: 'COMPLETED'
        })
    }
    deleteCompletedTodo(){
        this.props.dispatch(deleteCompletedTodo());
    }

    render() {
        
        return (
            <div className="todo-container">
                <AddTodoInput addTodo={this.addTodo.bind(this)}></AddTodoInput>
                <FilterButton filter={this.state.filter}
                    filterAll={ this.filterAll.bind(this) }
                    filterActive={ this.filterActive.bind(this) }
                    filterCompleted={ this.filterCompleted.bind(this) }></FilterButton>
                <TodoList todos={this.props.todos}
                    filter={this.state.filter}
                    deleteTodo={this.deleteTodo.bind(this)}
                    editTodo={this.editTodo.bind(this)}
                    completeTodo={this.completeTodo.bind(this)} ></TodoList>
                <DeleteCompletedButton
                    deleteCompletedTodo={this.deleteCompletedTodo.bind(this)}></DeleteCompletedButton>
            </div>
        );
    }
}

export default connect((state)=>{
    return {todos: state.todos}
})(TodoContainer);