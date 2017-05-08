import React, { Component } from 'react';
import './FilterButton.scss';

class FilterButton extends Component {
    render() {
        return (
            <div className="filter-button">
                <span className={ this.props.filter === "ALL" ? "active": "" }
                    onClick={ this.props.filterAll }>All</span>
                <span className={ this.props.filter === "ACTIVE" ? 'active': "" }
                    onClick={ this.props.filterActive }>Active</span>
                <span className={ this.props.filter === "COMPLETED" ? 'active': "" }
                    onClick={ this.props.filterCompleted } >Completed</span>
            </div>
        );
    }
}

export default FilterButton;