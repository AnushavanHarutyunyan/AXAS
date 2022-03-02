import { useDispatch, useSelector } from 'react-redux';
import { CollectValuesAction } from '../../store/actions';
import OP from 'object-path';
import './inputText.css';

function InputText(props) {
    const { data } = props;
    const { title, variable, options } = data;
    let value = useSelector((state) => {
        return OP.get(state.values, variable);
    });
    console.log(props);
    const dispatch = useDispatch();
    return (
        <div className="input_text">
            <input
                type="text"
                value={value}
                className="input_element"
                placeholder={data.title}
                onChange={({ target }) => {
                    value = target.value;
                    dispatch(
                        CollectValuesAction.collectValueAction({
                            key: variable,
                            value: value,
                        })
                    );
                }}
            ></input>
        </div>
    );
}

export default InputText;
