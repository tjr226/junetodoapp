import React from 'react';
import { connect } from 'react-redux';
import ToDoItem from './ToDoItem';

import { addTask, unhideAllTasks } from '../Actions'

class ToDoList extends React.Component {
    state = {
        newTask: ''
    }

    addTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.newTask)
        this.setState({
            newTask: '',
        })
    };

    unhideAllTasks = e => {
        e.preventDefault();
        this.props.unhideAllTasks();
    }

    handleChanges = e => this.setState({ newTask: e.target.value });

    render() {
        // console.log(this.props)
        // console.log("todolist object", this.props.toDoList)
        const uncompletedToDoList = this.props.toDoList.filter(todo => todo.completed === false);
        const unhiddenToDoList = uncompletedToDoList.filter(todo => todo.hidden === false);
        const completedToDoList = this.props.toDoList.filter(todo => todo.completed === true);
        return (
            <div>
                <h2>ToDoList</h2>
                <button onClick={this.unhideAllTasks}>(show all hidden tasks)</button>
                <h4>things to do</h4>
                {unhiddenToDoList.map(todo => <ToDoItem key={todo.id} todo={todo} />)}
                <input onChange={this.handleChanges} value={this.state.newTask} />
                <button onClick={this.addTask}>Add Task</button>
            </div>
        )
    }
}


const mapStateToProps = state => {
    // console.log("state is", state)
    return {
        toDoList: state.todoreducer.toDoList,
    };
};

export default connect(mapStateToProps, { addTask, unhideAllTasks })(ToDoList)