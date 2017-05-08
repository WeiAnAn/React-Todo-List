import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import todos from './src/Reducers/todos.js';
import App from './src/Components/App.jsx';

let reducers = combineReducers({
    todos : todos
})

let store = createStore(
    reducers, 
    { todos: [{todo:"todo",completed:false}]},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('app')
)