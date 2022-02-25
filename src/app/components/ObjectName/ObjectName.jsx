import './style.css';
import edit from '../../../assets/img/edit.svg';
import OP from 'object-path';
import { useSelector } from 'react-redux';
function ObjectName(props) {
    const { data } = props;
    const { title, variable } = data;
    const value = useSelector((state) => {
        const index = variable.indexOf('tech_chars');
        const key = variable.substring(0, index - 1);
        return OP.get(state.values, key + '.name');
    });
    return (
        <div className="big-round-title">
            <div className="tree-round">
                <span className="icon-cubes"></span>
            </div>
            <span className="tree-item-title">{value}</span>
            <img className="icon-edit" src={edit}></img>
        </div>
    );
}
export default ObjectName;
