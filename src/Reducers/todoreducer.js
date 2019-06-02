import {ADD_TASK, COMPLETE_TASK } from '../Actions';
import moment from 'moment';

const initialState = {
    toDoList: [
        { task: 'Learn Redux', id: 0, completed: false, day_spacing: 5, next_date_to_show: moment() },

        { task: 'Eat dinner', id: 1, completed: false, day_spacing: 5, next_date_to_show: moment() }
    ],  
    nextID: 2
}

export const todoreducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            // var now = moment().format();
            // console.log(now);
            return {
                toDoList: [...state.toDoList, {
                        task: action.payload,
                        id: state.nextID,
                        completed: false,
                    }],
                nextID: state.nextID + 1
            };
        case COMPLETE_TASK:
            // console.log('complete task');
            return {
                ...state,
                toDoList: state.toDoList.map(todo => todo.id === action.payload ? 
                    { ...todo, completed: !todo.completed } : todo)
            };
        // case PUSH_TASK:
        //     console.log("pushtask payload is", action.payload)
        //     return {
        //         ...state,
        //         toDoList: state.toDoList.map(todo => todo.id === action.payload.taskID ?
        //             {...todo, 
        //                 next_update_date: moment().subtract(action.payload.timeToPush.hoursToPush, 'hours').subtract( 
        //                     action.payload.timeToPush.daysToPush, 'days')
        //              } :
        //             todo)
        //     }
        default:
            return state;
    }
}