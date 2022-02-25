import { collectValuesType } from '../types';
import OP from 'object-path';

export default function authReducer(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
        case collectValuesType.COLLECT_VALUE:
            let tmp = { ...state };
            const { key, value } = payload;
            OP.set(tmp, key, value);
            return tmp;
        case collectValuesType.SET_TASK_INFO:
            let create_state = { main: { ...state, ...payload } };
            return create_state;
        default:
            return state;
    }
}
