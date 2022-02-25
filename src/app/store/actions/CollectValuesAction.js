import { collectValuesType } from '../types/index';

export const calculateTotalCostOfWorkAction = (data) => {
    return {
        type: collectValuesType.CALCULATE_TOTAL_COST_OF_WORK,
        payload: data,
    };
};
export const collectValueAction = (data) => {
    return {
        type: collectValuesType.COLLECT_VALUE,
        payload: data,
    };
};
export const setTotalCostAction = (data) => {
    return {
        type: collectValuesType.SET_TOTAL_COST,
        payload: data,
    };
};
export const setTaskInfo = (data) => {
    return {
        type: collectValuesType.SET_TASK_INFO,
        payload: data,
    };
};
