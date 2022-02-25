import { taskType } from "../types";

export default function authReducer(state = [], action) {
    const { type, payload } = action
    switch (type) {
        case taskType.SET_TASKS:
            let data = [...payload]
            return data;

        default:
            return state
    }
}