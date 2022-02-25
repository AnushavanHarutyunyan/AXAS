
import { Select } from '@consta/uikit/Select';
import { Text } from '@consta/uikit/Text';
import { useState } from "react";
function SelectWithValue(props) {
    const { data } = props;
    const { title } = data;
    const [value, setValue] = useState();
    const items = [
        {
            label: 'Первый',
            id: 1,
            disabled: true,
        },
        {
            label: 'Второй',
            id: 2,
            disabled: false,
        },
        {
            label: 'Третий',
            id: 3,
            disabled: true,
        },
    ];
    return <>
        <Select
            placeholder={title}
            items={items}
            value={value}
            onChange={({ value }) => setValue(value)}
        />
        <div className="count-item">
            <Text className='title' size='s'>Значение</Text>
            <div className='count'><input value={props.count ? props.count : 2}></input></div>
        </div>
        {/* <span className='icon-delete'></span> */}
    </>
}
export default SelectWithValue;