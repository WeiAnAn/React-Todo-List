import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem.jsx';

class TodoList extends Component {

    

    render() {
        
        let todo = this.props.todos.map((item, index)=>{
            return (
                <TodoItem todo={item.todo} completed={item.completed}
                    key={index} index={index}
                    deleteTodo={this.props.deleteTodo}
                    editTodo={this.props.editTodo}
                    completeTodo={this.props.completeTodo}></TodoItem>
            )
        }).filter((item, index)=>{
            if(this.props.filter === "ALL")
                return true;
            if(this.props.filter === "ACTIVE")
                return !this.props.todos[index].completed;
            if(this.props.filter === 'COMPLETED')
                return this.props.todos[index].completed;
        })
        return (
            <ul className="todoList">
                {todo}                
            </ul>
        );
    }
}
export default TodoList;