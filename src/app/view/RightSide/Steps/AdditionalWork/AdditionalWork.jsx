
import { TextField } from '@consta/uikit/TextField';
import { Checkbox } from '@consta/uikit/Checkbox';
import { Select } from '@consta/uikit/Select';
import { Button } from '@consta/uikit/Button';
import hooks from "./Hooks";
import { PaymentItem, CountItem } from '../../../../components';

function AdditionalWork(props) {
    const { value, items, setValue } = hooks()

    return (
        <div className="payment-cont">
            <PaymentItem active={true} number={<span className='icon-search'></span>} title="Работы" />
            {/* <div className='middle-line'></div> */}
            <div className='select-icon'>
                <Select
                    placeholder="Вид строительства"
                    items={items}
                    value={value}
                    onChange={({ value }) => setValue(value)}
                />
                <span className='icon-delete'></span>
            </div>
            {value?<div className='input-cont'>
                <div className="input">
                    <TextField label="% выполнения работ собственными силами"
                        type="number"
                        placeholder="Обязательное" />
                </div>
                <div className="input">
                    <TextField
                        label="% выполнения работ субподряд"
                        type="number"
                        placeholder="Обязательное" />
                </div>
                <Checkbox view="primary" className='checkbox-cont' checked label="Объект располагается на территории Южного федерального округа" />
                <CountItem title="Количество Федеральных образований" count="2" />
                <CountItem title="Количество Федеральных образований" count="2" />
                <CountItem title="Количество Федеральных образований" count="2" />
                <CountItem title="Количество Федеральных образований" count="2" />
            </div>:null}
            <div className='middle-line'></div>
            <div className='button-cont'>
                <Button className={!value?'outline-button outline-button-passive':'outline-button'} label="+ Добавить новый вид работ" />
            </div>
        </div>

    );
}

export default AdditionalWork;
