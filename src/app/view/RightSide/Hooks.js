import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CharacteristicsActions, taskActions } from '../../store/actions';
export default (props) => {
    const [isOpen, setOpen] = useState(false);
    const [step, setStep] = useState('designStages');
    const [value, setValue] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showTree, setShowTree] = useState(false);
    const list = useSelector((state) => state.values);
    const dispatch = useDispatch();
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
    useEffect(() => {
        if (props.match.params.id) {
            dispatch(taskActions.getTaskAction(props.match.params.id));
        }
        dispatch(CharacteristicsActions.getCharacteristicsList());
    }, []);
    return {
        isOpen,
        value,
        items,
        isModalOpen,
        step,
        showTree,
        setShowTree,
        setStep,
        setIsModalOpen,
        setOpen,
        setValue,
    };
};
