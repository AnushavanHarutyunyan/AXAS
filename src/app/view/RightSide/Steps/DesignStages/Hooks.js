import { useState } from "react";
export default () => {
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

    return {
        value,
        items,
        setValue
    }
}