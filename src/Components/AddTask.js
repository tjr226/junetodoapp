import React from 'react';
import { connect } from 'react-redux';

import { addTask } from '../Actions'

// import styled from 'styled-components'

// const ButtonRow = styled.div`
//     padding: 5px 0px;
//     `

class AddTask extends React.Component {
    state = {
            task_text: "",
            hours_to_push: "",
            days_to_push: ""
    }

    addTask = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.addTask(this.state)
        this.setState({
                task_text: "",
                hours_to_push: "",
                days_to_push: ""
        })
    };

    handleChanges = e => this.setState({ [e.target.name] : e.target.value });

    render() {
        let fullwidth = {
            width: '100%'
        }

        return (
            <div>
                <form onSubmit={this.addTask}>
                    <div className="form-group">
                        <textarea
                            rows="5"
                            className="form-control"
                            placeholder="New Task"
                            onChange={this.handleChanges}
                            value={this.state.task_text}
                            name="task_text"
                        />
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Hours to push"
                            onChange={this.handleChanges}
                            value={this.state.hours_to_push}
                            name="hours_to_push"
                        />
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Days to push"
                            onChange={this.handleChanges}
                            value={this.state.days_to_push}
                            name="days_to_push"
                        />
                        <button className="btn btn-primary" style={fullwidth}>
                            Add Task
                    </button>
                    </div>
                </form>
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

export default connect(mapStateToProps, { addTask })(AddTask)