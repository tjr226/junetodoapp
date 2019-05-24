import {ADD_TASK, HIDE_TASK,COMPLETE_TASK, DELETE_TASK, UNHIDE_ALL_TASKS, PUSH_TASK} from '../Actions';
import moment from 'moment';

const initialState = {
    toDoList: [
        { task: 'Learn Redux', id: 0, completed: false, hidden: false, next_update_date: "" },

        { task: 'Eat dinner', id: 1, completed: false, hidden: false, next_update_date: "" }
    ],  
    nextID: 2
}

export const todoreducer = (state = initialState, action) => {
    // console.log("reducer state", state);
    // console.log("reducer action payload", action.payload);
    // console.log("reducer action", action)
    switch (action.type) {
        case ADD_TASK:
            var now = moment().format();
            console.log(now);
            return {
                toDoList: [...state.toDoList, {
                        task:action.payload,
                        id: state.nextID,
                        completed: false,
                        hidden: false,
                        next_update_date: now,
                    }],
                nextID: state.nextID + 1
            };
        case HIDE_TASK:
            return {
                ...state,
                toDoList: state.toDoList.map(todo => todo.id === action.payload ? 
                    {...todo, hidden: !todo.hidden } : todo)
                };
        case COMPLETE_TASK:
            // console.log('complete task');
            return {
                ...state,
                toDoList: state.toDoList.map(todo => todo.id === action.payload ? 
                    { ...todo, completed: !todo.completed } : todo)
            };
        case DELETE_TASK:
            // console.log('delete task');
            return {
                ...state,
                toDoList: state.toDoList.filter(todo => todo.id !== action.payload)
            };
        case UNHIDE_ALL_TASKS:
            return {
                toDoList: state.toDoList.map(todo => todo = {...todo, hidden: false})
            }
        case PUSH_TASK:
            console.log("pushtask payload is", action.payload)
            return {
                ...state,
                toDoList: state.toDoList.map(todo => todo.id === action.payload.taskID ?
                    {...todo, 
                        next_update_date: moment().subtract(action.payload.timeToPush.hoursToPush, 'hours').subtract( 
                            action.payload.timeToPush.daysToPush, 'days')
                     } :
                    todo)
            }
        default:
            return state;
    }
}