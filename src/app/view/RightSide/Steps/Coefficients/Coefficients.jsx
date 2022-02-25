
import { Text, } from '@consta/uikit/Text';
// import { withRouter } from "react-router-dom";
import { CountItem } from '../../../../components';

function Coefficients(props) {
    return (
        <div className="payment-cont">
            <Text size='m' className='coefficients-heading'>Коэффициенты</Text>
            <div className='middle-line'></div>
            <div className='count-item-cont'>
                <CountItem title="Количество Федеральных образований" count="2" />
                <CountItem title="Количество Федеральных образований" count="2" />
                <CountItem title="Количество Федеральных образований" count="2" />
                <CountItem title="Количество Федеральных образований" count="2" />
            </div>
        </div>
    );
}

export default Coefficients;
