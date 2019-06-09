import { ADD_TASK, COMPLETE_TASK, PUSH_TASK } from '../Actions';
import moment from 'moment';

const initialState = {
    toDoList: [
        { task: 'Learn Redux', id: 0, completed: false, hidden: false, next_update_date: moment().add(1, 'days') },

        { task: 'Eat dinner', id: 1, completed: false, hidden: false, next_update_date: moment() }
    ],
    nextID: 2
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

export const todoreducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            // var now = moment().format();
            // console.log(now);
            return {
                toDoList: [...state.toDoList, {
                    task: action.payload.task_text,
                    id: state.nextID,
                    completed: false,
                    hidden: false,
                    next_update_date: moment().add(action.payload.hours_to_push, 'hours').add(
                        action.payload.days_to_push, 'days')
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
        case PUSH_TASK:
            console.log("pushtask payload is", action.payload)
            
            return {
                ...state,
                toDoList: state.toDoList.map(todo => todo.id === action.payload.taskID
                    ?
                    {
                        ...todo,
                        next_update_date: moment().subtract(action.payload.hours_to_push, 'hours').subtract(
                            action.payload.days_to_push, 'days')
                    }
                    :
                    todo)
            }
        default:
            return state;
    }
}