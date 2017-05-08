import React, { Component } from 'react';
import "./DeleteCompletedButton.scss";

class ClearCompletedButton extends Component {
    render() {
        return (
            <div className="delete-completed-button" >
                <span onClick={this.props.deleteCompletedTodo}>Delete Completed</span>  
            </div>
        );
    }
}

export default ClearCompletedButton;