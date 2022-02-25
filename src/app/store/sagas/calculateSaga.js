import { call, takeLatest, put } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CollectValuesAction } from "../actions";
import { collectValuesType } from "../types";
import { calculate_total_cost } from "../../services/api/calculate";
import { setApiAuthorizationHeader } from "../../services";
const token = localStorage.getItem("access_token");
const notify = (text) => {
    toast.error(text ? text : "Someting went wrong", {
        position: toast.POSITION.TOP_CENTER,
    });
}
const successnotify = (text) => {
    toast.success(text ? text : "Someting went wrong", {
        position: toast.POSITION.TOP_CENTER,
    });
}
function* calculate_total_cost_of_work(data) {
    let main = data.payload.main;
    delete data.payload.main
    let post_data = {
        ...data.payload,
        ...main
    }
    try {
        setApiAuthorizationHeader(token);
        const response = yield call(calculate_total_cost, post_data)
        if (response) {
            successnotify("task added")
            yield put(CollectValuesAction.setTotalCostAction(response))
        }
    }
    catch (error) {
        notify(error.message)
    }
}
export default function* watchCalculateSaga() {
    yield takeLatest(collectValuesType.CALCULATE_TOTAL_COST_OF_WORK, calculate_total_cost_of_work);
}
export { watchCalculateSaga }