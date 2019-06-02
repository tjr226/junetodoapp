import React from 'react';
import { connect } from 'react-redux';
import { completeTask } from '../Actions';
import moment from 'moment';
import styled from 'styled-components'

const TaskDiv = styled.div`
    display:flex;
    flex-direction:column;
    width: 300px;
    `

const TaskText = styled.p`
    text-align: center;
`

const TaskButtonsDiv = styled.div`
    width: 300px;
`

class ToDoItem extends React.Component {

    completeTask = e => {
        e.preventDefault();
        this.props.completeTask(this.props.todo.id);
    }

    render() {
        let thirdwidth = {
            width: '33%'
        }
        return (
            <TaskDiv>
                <TaskText>{this.props.todo.task}</TaskText>
                {/* <button class="btn btn-secondary" onClick={this.completeTask}>Complete</button> */}
                <TaskButtonsDiv>
                        <button class="btn btn-secondary" style={thirdwidth}>✓</button>
                        <button class="btn btn-secondary" style={thirdwidth}>++</button>
                        <button class="btn btn-secondary" style={thirdwidth}>edit</button>
                </TaskButtonsDiv>
            </TaskDiv>
        )
    }
};

export default connect(null, { completeTask })(ToDoItem)




