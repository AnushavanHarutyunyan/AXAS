import { propSize } from '@consta/uikit/__internal__/src/components/SelectComponents/types';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    taskActions,
    addTasksAction,
    CollectValuesAction,
} from '../../store/actions';
import { taskSelector } from '../../store/selectors';

export default (props) => {
    const task_array = useSelector(taskSelector.taskArraySelector);
    const dispatch = useDispatch();
    const get_task_array = () => dispatch(taskActions.getTasksAction());
    const set_task_info = (data) =>
        dispatch(CollectValuesAction.setTaskInfo(data));
    const handleClickRow = (item) => {
        // console.log(task_id, "iddddddddddddddd");
        props.history.push(`/estimate/${item.id}`);
        // console.log(task_id, e)
    };
    useEffect(() => {
        get_task_array();
    }, []);
    return {
        task_array,
        set_task_info,
        handleClickRow,
    };
};
