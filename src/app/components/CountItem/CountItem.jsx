import { Text } from '@consta/uikit/Text';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CollectValuesAction } from '../../store/actions';
import OP from 'object-path';
import './style.css';

function CountItem(props) {
    const { data } = props;
    const { title, variable } = data;
    const value = useSelector((state) => {
        return OP.get(state.values, variable);
    });
    const list = useSelector((state) => state.values);
    const dispatch = useDispatch();
    return (
        <div className="count-item">
            <Text className="title" size="s">
                {title}
            </Text>
            <div className="count">
                <input
                    value={value}
                    onChange={(e) => {
                        dispatch(
                            CollectValuesAction.collectValueAction({
                                key: variable,
                                value: e.target.value,
                            })
                        );
                    }}
                ></input>
            </div>
        </div>
    );
}

export default CountItem;
