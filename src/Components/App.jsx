import React, { Component } from 'react';
import Title from './Title/Title.jsx';
import TodoContainer from './TodoContainer/TodoContainer.jsx';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Title></Title>
                <TodoContainer></TodoContainer>
            </div>
        );
    }
}



export default App;