import { Select } from '@consta/uikit/Select';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import OP from "object-path";
import BaseElement from '../BaseElement';
import { CollectValuesAction } from "../../store/actions";
import { joinByDot } from '../../utils/join';
import { characteristicsSelector } from "../../store/selectors";

function SelectItemWithColleps(props) {
    const [my_value, setValue] = useState();
    const { data } = props;
    const { title, variable, child, options } = data;
    const value = useSelector((state => {
        return OP.get(state.values, joinByDot(variable, 'type'))
    }))
    const dispatch = useDispatch();
    const characteristics_data = useSelector(characteristicsSelector.characteristicsSelectors)
    let option = []
    if (typeof options === "string") {
        option = characteristics_data[options]
    } else {
        option = options
    }
    return <div className='select-item-with-colleps'>
        <Select
            placeholder={title}
            items={option}
            value={option.find((item) => {
                return item.id === value
            })}
            onChange={({ value }) => {
                setValue(value.id);
                dispatch(
                    CollectValuesAction.collectValueAction({
                        key: joinByDot(variable, 'type'),
                        value: value.id
                    })
                )
            }}
        />
        <div className='input-with-colleps-conts'>
            {my_value && child[my_value].map((item, index) => {
                return <BaseElement
                    key={index}
                    data={{ ...item, variable: joinByDot(variable, item.variable) }}
                />
            })}
        </div>
    </div>
}
export default SelectItemWithColleps;