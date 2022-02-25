import "./style.css";
import BaseElement from '../../components/BaseElement';
import { stracture } from '../../HOC';
import { Menu } from '../../components';
import hooks from './Hooks';

function RightSide(props) {
    const { value, items } = hooks(props);
    return (
        <div className='home-cont'>
            <Menu />
            <BaseElement data={stracture}></BaseElement>
        </div>
    );
}

export default RightSide;
