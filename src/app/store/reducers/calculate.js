import { collectValuesType } from "../types";

export default function authReducer(state =-1, action) {
    const { type, payload } = action;
    switch (type) {
        case collectValuesType.SET_TOTAL_COST:
            let total_cost=payload
            return total_cost
        default:
            return state
    }
}