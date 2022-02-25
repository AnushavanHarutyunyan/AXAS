import MenuItem from '../MenuItem';
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import "./style.css";
import { CollectValuesAction } from "../../store/actions"

function Menu(props) {
    const value = useSelector((state => state.values));
    const dispatch = useDispatch()
    return (
        <div className='left-menu'>
            <MenuItem
                active={window.location.href.includes("/estimate")}
                icon="icon-plus"
                onClick={() => {
                    props.history.push("/home")
                }} />
            <MenuItem icon="icon-square4"
                active={window.location.href.includes("/estimate")}
                onClick={() => props.history.push("/home")} />
            {window.location.href.includes("/estimate")
                ? <MenuItem icon="icon-file"
                    onClick={() => { dispatch(CollectValuesAction.calculateTotalCostOfWorkAction(value)) }} />
                : null}
        </div>
    );
}

export default withRouter(Menu);