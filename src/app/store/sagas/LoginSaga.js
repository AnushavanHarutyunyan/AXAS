import { call, takeLatest, put } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services";
import { loginRequest } from "../../services/api/login";
import { loginActions } from "../actions";
import { loginTypes } from "../types";
const notify = (text) => {
    toast.error(text ? text : "Someting went wrong", {
        position: toast.POSITION.TOP_CENTER,
    });
}

function* login({ payload }) {
    try {
        yield put(loginActions.loginLoadingAction())
        const response = yield call(loginRequest, payload)
        if (response.access_token) {
            localStorage.setItem("access_token", response.access_token)
            // api.defaults.headers.common["Authorization"] = "Bearer" + response.access
            yield put(loginActions.loginSuccessAction())
            yield put(loginActions.loginLoadingAction())
            window.location = "/home"
        }
    } catch (error) {
        localStorage.setItem("access", 'response.access')
        yield put(loginActions.loginSuccessAction())
        yield put(loginActions.loginLoadingAction())
        notify(error.message)
        // yield put (authActions.setErrorMassageAction(error.message))
    }
}

export default function* watchLoginSaga() {
    yield takeLatest(loginTypes.LOGIN, login)
}

export { watchLoginSaga }