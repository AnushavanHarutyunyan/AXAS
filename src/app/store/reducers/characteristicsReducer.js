import { characteristicsTypes } from "../types";

export default function characteristicsReducer(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
        case characteristicsTypes.SET_CHARACTERISTICS_LIST:
            let data = { ...state, ...payload }
            return data;
        default:
            return state
    }
}