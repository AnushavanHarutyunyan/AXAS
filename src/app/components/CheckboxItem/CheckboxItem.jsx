import { Checkbox } from '@consta/uikit/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { collectValuesType } from '../../store/types';
import { CollectValuesAction } from "../../store/actions";
import OP from "object-path";

function CheckboxItem(props) {
    const { data } = props;
    const { title, variable } = data;
    const value = useSelector((state => {
        return OP.get(state.values, variable)
    }))
    const dispatch = useDispatch();
    return (
        <div className='checkbox-item'>
            <Checkbox view="primary"
                checked={value}
                onChange={(e) => {
                    dispatch(
                        CollectValuesAction.collectValueAction({
                            key: variable,
                            value: e.checked
                        })
                        // {
                        //     type: collectValuesType.COLLECT_VALUE,
                        //     payload: {
                        //         key: variable,
                        //         value: e.checked
                        //     }
                        // }
                    )
                }}
                className='checkbox-cont'
                label={title} />
        </div>
    );
}
export default CheckboxItem;