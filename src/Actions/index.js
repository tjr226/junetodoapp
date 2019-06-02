export const ADD_TASK = "ADD_TASK" ; 
export const COMPLETE_TASK = "COMPLETE_TASK";

export const addTask = taskText => {
    // console.log(taskText);
    return {
        type: ADD_TASK,
        payload: taskText
    }
}

export const completeTask = taskID => {
    console.log(taskID, "is completed");
    return {
        type: COMPLETE_TASK,
        payload: taskID
    }
}
