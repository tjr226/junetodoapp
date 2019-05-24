import React from 'react';
import { connect } from 'react-redux';
import { hideTask, completeTask, deleteTask } from '../Actions';

class ToDoItem extends React.Component {
    hideTask = e => {
        e.preventDefault();
        this.props.hideTask(this.props.todo.id);
    }
    
    completeTask = e => {
        e.preventDefault();
        this.props.completeTask(this.props.todo.id);
    }

    deleteTask = e => {
        e.preventDefault();
        this.props.deleteTask(this.props.todo.id);
    }


    render() {
        return (
            <div>
                <p>{this.props.todo.task}</p> 
                <p>{this.props.todo.time_expectation}</p>
                <button onClick={this.hideTask}>Hide</button>
                <button onClick={this.completeTask}>Complete</button>
            </div>
        )
    }
};

export default connect(null, { hideTask, completeTask, deleteTask })(ToDoItem)