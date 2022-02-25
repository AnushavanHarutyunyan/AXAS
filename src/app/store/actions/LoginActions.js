import { loginTypes } from "../types/index"

export const loginAction = ({ login, password }) => {
    return {
        type: loginTypes.LOGIN,
        payload: {
            login,
            password,
        }
    }
}
export const loginSuccessAction = () => {
    return {
        type: loginTypes.LOGIN_SUCCESS
    }
}
export const loginLoadingAction = () => {
    return {
        type: loginTypes.LOGIN_LOADING
    }
}
export const setErrorMassageAction = (massage) => {
    return {
        type: loginTypes.SET_ERROR_MESSAGE,
        payload: massage
    }
}