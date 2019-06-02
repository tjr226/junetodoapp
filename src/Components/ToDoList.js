import React from 'react';
import { connect } from 'react-redux';
import ToDoItem from './ToDoItem';

import { addTask } from '../Actions'

import styled from 'styled-components'

const WideDiv = styled.div`
    width: 300px;
`

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

    handleChanges = e => this.setState({ newTask: e.target.value });

    render() {
        // console.log(this.props)
        // console.log("todolist object", this.props.toDoList)
        const uncompletedToDoList = this.props.toDoList.filter(todo => todo.completed === false);
        // const completedToDoList = this.props.toDoList.filter(todo => todo.completed === true);
        return (
            <div>
                <h2>NotToday</h2>
                {/* <form onSubmit={this.addTask}>
                    <input onChange={this.handleChanges} value={this.state.newTask} />
                    <button>Add Task</button>
                </form> */}
                <WideDiv>
                <button class="btn btn-primary">Add Task</button>
                </WideDiv>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-primary">
                        Active
                    </label>
                    <label class="btn btn-primary">
                            Radio
                    </label>
                    <label class="btn btn-primary">
                            Radio
                    </label>
                </div>
                <h4>stuff</h4>
                {uncompletedToDoList.map(todo => <ToDoItem key={todo.id} todo={todo} />)}
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

export default connect(mapStateToProps, { addTask })(ToDoList)