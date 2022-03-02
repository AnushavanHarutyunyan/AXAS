import { Select } from '@consta/uikit/Select';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import OP from 'object-path';
import { useDispatch } from 'react-redux';
import { CollectValuesAction } from '../../store/actions';
import { characteristicsSelector } from '../../store/selectors';

function SelectItem(props) {
    const { data } = props;
    const { title, variable, options } = data;
    const value = useSelector((state) => {
        return OP.get(state.values, variable);
    });
    // const main = useSelector((state => {
    //     return OP.get(state.values, 'main')
    // }))
    const characteristics_data = useSelector(
        characteristicsSelector.characteristicsSelectors
    );
    const dispatch = useDispatch();
    let option = [];

    if (typeof options === 'string') {
        option = characteristics_data[options];
    } else {
        option = options;
    }

    return (
        <Select
            placeholder={title}
            items={option ? option : []}
            value={
                option
                    ? option.find((item) => {
                          return item.id === value;
                      })
                    : ''
            }
            onChange={(target) => {
                const { value } = target;
                dispatch(
                    CollectValuesAction.collectValueAction({
                        key: variable,
                        value: value.id,
                    })
                    // {
                    //     type: collectValuesType.COLLECT_VALUE,
                    //         payload: {
                    //     key: variable,
                    //     value: value.id
                    // }
                    // }
                );
            }}
        />
    );
}
export default SelectItem;
