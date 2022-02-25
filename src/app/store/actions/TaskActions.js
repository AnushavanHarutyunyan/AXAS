import { taskType } from "../types/index";

export const getTasksAction = (data) => {
    return {
        type: taskType.GET_TASKS,
        payload: data
    }
}
export const getTaskAction = (data) => {
    return {
        type: taskType.GET_TASK,
        payload: data
    }
}
export const setTaskAction = (data) => {
    return {
        type: taskType.SET_TASK,
        payload: data
    }
}
export const setTasksAction = (data) => {
    return {
        type: taskType.SET_TASKS,
        payload: data
    }
}
export const addTasksAction = (data) => {
    return {
        type: taskType.Add_TASKS,
        payload: data
    }
}
