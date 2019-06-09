import React from 'react';
import { connect } from 'react-redux';
import { completeTask } from '../Actions';
import moment from 'moment';
import styled from 'styled-components'
import PushTask from './PushTask';

const TaskDiv = styled.div`
    display:flex;
    flex-direction:column;
    `

const TaskText = styled.p`
    text-align: center;
`

const TaskButtonsDiv = styled.div`
    width: 300px;
`

class ToDoItem extends React.Component {
    state = {
        timeToPush: {
            hours_to_push: "",
            days_to_push: ""
        }
    }

    completeTask = e => {
        e.preventDefault();
        this.props.completeTask(this.props.todo.id);
    }

    hideTask = e => {
        e.preventDefault();
        this.props.hideTask(this.props.todo.id);
    }

    render() {
        let halfwidth = {
            width: '50%'
        }

        return (
            <TaskDiv>
                <TaskText>{this.props.todo.task}</TaskText>
                <TaskText>{moment(this.props.todo.next_update_date).fromNow()}</TaskText>
                <PushTask taskID={this.props.todo.id} />
                <TaskButtonsDiv>
                    <button className="btn btn-secondary" style={halfwidth}>Hide</button>
                    <button className="btn btn-secondary" style={halfwidth}>Complete</button>
                </TaskButtonsDiv>
            </TaskDiv>
        )
    }
};

export default connect(null, { completeTask })(ToDoItem)




