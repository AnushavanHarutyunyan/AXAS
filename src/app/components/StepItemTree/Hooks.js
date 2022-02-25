import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collectValuesType } from '../../store/types';
import { joinByDot } from '../../utils/join';
import OP from 'object-path';
import { objectTypes } from '../../HOC';

const treeArray = [
    {
        title: 'Этап строительства',
        sequence: 0,
        isHaveChildren: true,
        atLast: false,
    },
    {
        title: 'Этап строительства',
        sequence: 1,
        isHaveChildren: false,
        atLast: true,
    },
];

export default (props) => {
    const { data } = props;
    const { variable } = data;
    const [isOpen, setOpen] = useState(false);
    const dispatch = useDispatch();
    // const [step, setStep] = useState("designStages");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showTree, setShowTree] = useState(false);
    const [value, setValue] = useState();
    const [tree, setTree] = useState(treeArray);
    const [name, setName] = useState('');
    const values = useSelector((state) => {
        return OP.get(state.values, variable);
    });

    useEffect(() => {
        if (values && tree.length === 2) {
            setTree([
                ...tree,
                ...values.map((item) => {
                    let value = objectTypes.find(
                        (i) => i.id === item.object_type
                    );
                    return {
                        title: item.name,
                        sequence: 1,
                        note: true,
                        isHaveChildren: false,
                        atLast: false,
                        ...value,
                    };
                }),
            ]);
            setShowTree(true);
        }
    }, [values]);
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
    const addItem = (item) => {
        let tmp = [...tree];
        // if (item.sequence === 1) {
        //     let add_item = { ...item, atLast: true, sequence: 2 }
        //     tmp.splice(tmp.length - 1, 0, item, add_item);
        // } else if (item.sequence === 2) {

        //     tmp.splice(tmp.length - 2, 0, item);
        // }
        const index = tmp.length - 1;
        tmp.splice(index, 0, item);
        dispatch({
            type: collectValuesType.COLLECT_VALUE,
            payload: {
                key: joinByDot(variable, index - 1),
                value: {
                    name: item.title,
                    object_type: item.id,
                    tech_chars: {},
                },
            },
        });
        setTree(tmp);
    };
    const onDelete = (index) => {
        let tmp = [...tree];
        tmp.splice(index, 1);
        setTree(tmp);
        let tmp_values = [...values];
        tmp_values.splice(index - 1, 1);
        dispatch({
            type: collectValuesType.COLLECT_VALUE,
            payload: {
                key: variable,
                value: tmp_values,
            },
        });
    };
    return {
        tree,
        isOpen,
        value,
        items,
        isModalOpen,
        treeArray,
        // step,
        showTree,
        isOpen,
        setOpen,
        setShowTree,
        // setStep,
        setIsModalOpen,
        setOpen,
        setValue,
        addItem,
        name,
        setName,
        onDelete,
    };
};
