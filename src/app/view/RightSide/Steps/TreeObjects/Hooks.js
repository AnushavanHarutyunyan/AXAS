import { useState } from "react";
export default () => {
    const [value, setValue] = useState();
    const [show, setShow] = useState();
    const items = [
        {
            label: 'Техническая характеристика #1',
            id: 1,
        },
        {
            label: 'Техническая характеристика #2',
            id: 2,
        },
        {
            label: 'Техническая характеристика #3',
            id: 3,
        },
    ];

    return {
        value,
        items,
        show, 
        setShow,
        setValue
    }
}