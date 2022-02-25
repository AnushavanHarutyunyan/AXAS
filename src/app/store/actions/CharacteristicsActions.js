import { characteristicsTypes } from "../types/index";

export const getCharacteristicsList = () => {
    return {
        type: characteristicsTypes.GET_CHARACTERISTICS_LIST
    }
}

export const setCharacteristicsList = (data) => {
    return {
        type: characteristicsTypes.SET_CHARACTERISTICS_LIST,
        payload: data
    }
}