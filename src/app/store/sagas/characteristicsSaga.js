import { call, takeLatest, put } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { characteristicsTypes } from "../types";
import { CharacteristicsActions } from "../actions";
import {
    characteristicsConstructionTypes,
    characteristicsDevelopmentTypes,
    characteristicsDesignDirections,
    typeWork
} from "../../services/api/characteristics";
import { setApiAuthorizationHeader } from "../../services";
const token = localStorage.getItem("access_token");
const create_array = (array) => {
    let new_array = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        new_array.push({ label: element, id: index + 1 })
    }
    return new_array
}
function* characteristics_lists() {
    try {
        setApiAuthorizationHeader(token);
        // typeWork
        const construction_types = yield call(characteristicsConstructionTypes);
        const development_types = yield call(characteristicsDevelopmentTypes);
        const design_directions = yield call(characteristicsDesignDirections);
        const type_work = yield call(typeWork);
        if (construction_types) {
            yield put(CharacteristicsActions.setCharacteristicsList({
                construction_types: create_array(construction_types)
            }));
        }
        if (development_types) {
            yield put(CharacteristicsActions.setCharacteristicsList({
                development_types: create_array(development_types)
            }));
        }
        if (design_directions) {
            yield put(CharacteristicsActions.setCharacteristicsList({
                design_directions: create_array(design_directions)
            }));
        }
        if (type_work) {
            yield put(CharacteristicsActions.setCharacteristicsList({
                type_work: create_array(type_work)
            }));
        }
    } catch (error) {
        // notify(error.message)
    }
}
export default function* watchCharacteristicsSaga() {
    yield takeLatest(characteristicsTypes.GET_CHARACTERISTICS_LIST, characteristics_lists);
}
export { watchCharacteristicsSaga }