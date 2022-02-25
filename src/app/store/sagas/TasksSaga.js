import { call, takeLatest, put } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { taskActions, CollectValuesAction } from '../actions';
import { taskType } from '../types';
import {
    tasksRequest,
    addTasksRequest,
    taskRequest,
} from '../../services/api/tasks';
import { setApiAuthorizationHeader } from '../../services';
const token = localStorage.getItem('access_token');
const notify = (text) => {
    toast.error(text ? text : 'Someting went wrong', {
        position: toast.POSITION.TOP_CENTER,
    });
};
const successnotify = (text) => {
    toast.success(text ? text : 'Someting went wrong', {
        position: toast.POSITION.TOP_CENTER,
    });
};
function* get_tasks() {
    try {
        setApiAuthorizationHeader(token);
        const response = yield call(tasksRequest);
        if (response) {
            yield put(taskActions.setTasksAction(response));
        }
    } catch (error) {
        notify(error.message);
    }
}
function* get_task(data) {
    try {
        setApiAuthorizationHeader(token);
        const response = yield call(() => taskRequest(data.payload));
        if (response) {
            yield put(CollectValuesAction.setTaskInfo(response));
        }
    } catch (error) {
        notify(error.message);
    }
}
function* add_tasks() {
    try {
        var dt = new Date();
        setApiAuthorizationHeader(token);
        const response = yield call(addTasksRequest, {
            task_id: dt.getTime(),
            task_category: 'Обустройство Романовского месторождения',
            task_name: 'Куст скважин 25',
            editor: 'Руслан Ковалев',
        });
        if (response) {
            successnotify('task added');
            // yield put(taskActions.setTasksAction(response))
        }
    } catch (error) {
        notify(error.message);
    }
}
export default function* watchTaskSaga() {
    yield takeLatest(taskType.GET_TASKS, get_tasks);
    yield takeLatest(taskType.Add_TASKS, add_tasks);
    yield takeLatest(taskType.GET_TASK, get_task);
}
export { watchTaskSaga };
