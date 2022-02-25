import { all } from "redux-saga/effects";
import { watchLoginSaga } from "./LoginSaga";
import { watchTaskSaga } from "./TasksSaga";
import { watchCalculateSaga } from "./calculateSaga";
import { watchCharacteristicsSaga } from "./characteristicsSaga";
function* rootSaga() {
  yield all([
    watchLoginSaga(),
    watchTaskSaga(),
    watchCalculateSaga(),
    watchCharacteristicsSaga()
  ]);
}
export default rootSaga;
