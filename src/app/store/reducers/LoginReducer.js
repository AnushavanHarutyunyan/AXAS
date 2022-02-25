import { loginTypes } from "../types";
const INIT_STATE = {
    isAuth: false,
    errorMassage: null,
    loading: false

}
export default function authReducer(state = INIT_STATE, action) {
    const { type, payload } = action
    switch (type) {
        case loginTypes.LOGIN_SUCCESS:
            return { ...state, isAuth: true }
        case loginTypes.SET_ERROR_MESSAGE:
            return { ...state, errorMassage: payload ? payload : null }
        case loginTypes.LOGIN_LOADING:
            return { ...state, loading: !state.loading }
        default:
            return state
    }
}