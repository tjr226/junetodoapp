import React from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';
// import styled from 'styled-components'
import { pushTask } from '../Actions';

class PushTask extends React.Component {
    state = {
        hours_to_push: "",
        days_to_push: ""
    }

    pushTask = e => {
        e.preventDefault();
        this.props.pushTask({
            taskID: this.props.taskID, 
            hours_to_push: this.state.hours_to_push, 
            days_to_push: this.state.days_to_push
            })
        this.setState({
            hours_to_push: "",
            days_to_push: ""
        })
    }

    handleChanges = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        let fullwidth = {
            width: '100%'
        }

        return (
            <form onSubmit={this.addTask}>
            <div className="form-group">
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
                    Push Task
                </button>
            </div>
        </form>
        )
    }
}

// const mapStateToProps = state => {
//     // console.log("state is", state)
//     return {

//     };
// };

export default connect(null, { pushTask })(PushTask)