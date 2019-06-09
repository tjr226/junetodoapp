import React from 'react';
import { connect } from 'react-redux';
import ToDoItem from './ToDoItem';

import { addTask } from '../Actions'

import styled from 'styled-components'
import AddTask from './AddTask';
import moment from 'moment';

const ButtonRow = styled.div`
    padding: 5px 0px;
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
        let thirdwidth = {
            width: '33%'
        }

        const listToShow = this.props.toDoList.filter(
            todo => todo.completed === false).filter(
                todo => todo.hidden === false);
        const sortedListToShow = listToShow.sort((a,b) => 
            moment(a.next_update_date).format("X") - moment(b.next_update_date).format("X"))

        return (
            <div>
                <h2>NotToday</h2>
                <AddTask />
                <h4>View options</h4>
                <ButtonRow>
                    <button className="btn btn-outline-primary" style={thirdwidth}>
                        Next Five
                    </button>
                    <button className="btn btn-outline-primary" style={thirdwidth}>
                        Next Twenty
                    </button>
                    <button className="btn btn-outline-primary" style={thirdwidth}>
                        All
                    </button>
                </ButtonRow>
                <h4>Tasks</h4>
                {sortedListToShow.map(todo => <ToDoItem key={todo.id} todo={todo} />)}
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