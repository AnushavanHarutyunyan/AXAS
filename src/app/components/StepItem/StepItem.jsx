import { Text } from '@consta/uikit/Text';
import './style.css';
import { Round } from '../index';
import arrowright from '../../../assets/img/arrow-right.svg';
function StepItem(props) {
    const { data, onChange, active } = props;
    const { title, icon, children, variable } = data;
    // useEffect(() => {
    //     if (!props.active) {
    //         setOpen(false)
    //     }
    // }, [props.active])
    return (
        <div
            onClick={() => {
                onChange(children, variable);
            }}
            className={active ? 'step-item step-item-active' : 'step-item'}
        >
            <div className="round-text">
                <Round active={active} number={icon} />
                <Text size="l">{title}</Text>
            </div>
            <img src={arrowright} className="icon-arrow-right"></img>
        </div>
    );
}
export default StepItem;
