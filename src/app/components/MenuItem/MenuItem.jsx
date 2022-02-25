import { Text, textPropSize } from '@consta/uikit/Text';
import "./style.css";
function MenuItem(props) {
    return (
        <div className={props.active?'menu-item menu-item-active':'menu-item'} onClick={()=>props.onClick()}>
            <span className={props.icon}></span>
        </div>
    );
}

export default MenuItem;