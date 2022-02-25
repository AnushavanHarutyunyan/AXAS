import { TextField } from '@consta/uikit/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { collectValuesType } from '../../store/types';
import { CollectValuesAction } from "../../store/actions";
import OP from "object-path";
function PercentItem(props) {
    const { data } = props;
    const { title, variable } = data;
    const value = useSelector((state => {
        return OP.get(state.values, variable)
    }))
    const dispatch = useDispatch();
    return (
        <div className="input">
            <TextField label={title}
                value={value}
                onChange={(e) => {
                    dispatch(
                        CollectValuesAction.collectValueAction({
                            key: variable,
                            value: e.value
                        })
                        // {
                        //     type: collectValuesType.COLLECT_VALUE,
                        //     payload: {
                        //         key: variable,
                        //         value: e.value
                        //     }
                        // }
                    )
                }}
                type="number"
                placeholder="Обязательное" />
        </div>
    );
}
export default PercentItem;