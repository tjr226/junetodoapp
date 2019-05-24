export const ADD_TASK = "ADD_TASK" ; 
export const COMPLETE_TASK = "COMPLETE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const HIDE_TASK = "HIDE_TASK";
export const UNHIDE_ALL_TASKS = "UNHIDE_ALL_TASKS";
export const PUSH_TASK = "PUSH_TASK";

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

export const deleteTask = taskID => {
    // console.log(taskID);
    return {
        type: DELETE_TASK,
        payload: taskID
    }
}

export const hideTask = taskID => {
    return {
        type: HIDE_TASK,
        payload: taskID
    }
}

export const unhideAllTasks = () => {
    return {
        type: UNHIDE_ALL_TASKS,
    }
}

export const pushTask = (taskID, timeToPush) => {
    console.log("push task working")
    return {
        type: PUSH_TASK,
        payload: {taskID: taskID, timeToPush: timeToPush}
    }
}
