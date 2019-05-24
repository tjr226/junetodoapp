import React from "react";
import { connect } from "react-redux";
import { pushTask } from '../Actions';

class PushTaskForm extends React.Component {
    state = {
        timeToPush: {
            hoursToPush: 0,
            daysToPush: 0,
        }
    }

    handleChange = e => {
        this.setState({
            timeToPush: {
                ...this.state.timeToPush,
                [e.target.name]: e.target.value
            }
        })
    }

    pushTask = e => {
        e.preventDefault();
        this.props.pushTask(this.props.id, this.state.timeToPush);
        this.setState({
            timeToPush: {
                hoursToPush: 0,
                daysToPush: 0,
            }
        })
    }

    render () {
        return (
            <form onSubmit={this.pushTask}>
                <input 
                type="number"
                name="hoursToPush"
                value={this.state.timeToPush.hoursToPush}
                onChange={this.handleChange}
                />
                <input
                type="number"
                name="daysToPush"
                value={this.state.timeToPush.daysToPush}
                onChange={this.handleChange}
                />
                <button>Push Task</button>
            </form>
        )
    }
}

// const mapStateToProps = state => ({
//     friendsList: state.friendsReducer.friendsList
// })

export default connect(
    null,
    { pushTask }
)(PushTaskForm)

