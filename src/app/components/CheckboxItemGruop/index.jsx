import { Checkbox } from '@consta/uikit/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { collectValuesType } from '../../store/types';
import { CollectValuesAction } from '../../store/actions';
import OP from 'object-path';

function CheckboxItemGruop(props) {
    const { data } = props;
    const { variable, children } = data;
    const value = useSelector((state) => {
        return OP.get(state.values, variable);
    });
    const dispatch = useDispatch();
    return children.map(({ title, id }) => {
        return (
            <div className="checkbox-item">
                <Checkbox
                    view="primary"
                    checked={value && value.includes(id)}
                    onChange={(e) => {
                        let tmp = value ? [...value] : [];

                        let index = tmp.indexOf(id);
                        if (index === -1) {
                            tmp.push(id);
                        } else {
                            tmp.splice(index, 1);
                        }
                        dispatch(
                            CollectValuesAction.collectValueAction({
                                key: variable,
                                value: tmp,
                            })
                            // {
                            //     type: collectValuesType.COLLECT_VALUE,
                            //     payload: {
                            //         key: variable,
                            //         value: e.checked
                            //     }
                            // }
                        );
                    }}
                    className="checkbox-cont"
                    label={title}
                />
            </div>
        );
    });
}
export default CheckboxItemGruop;
