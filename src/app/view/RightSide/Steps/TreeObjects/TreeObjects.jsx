
import { TextField } from '@consta/uikit/TextField';
import { Checkbox } from '@consta/uikit/Checkbox';
import { Select } from '@consta/uikit/Select';
import { Button } from '@consta/uikit/Button';
import hooks from "./Hooks";
import { PaymentItem, StageItem, CountItem } from '../../../../components';
import edit from '../../../../../assets/img/edit.svg';

function TreeObjects(props) {
    const { value, items, show, setShow, setValue } = hooks()
    return (
        <div className='payment-cont'>
            <div className='big-round-title'>
                <div className="tree-round"><span className='icon-cubes'></span></div>
                <span className="tree-item-title">Куст скважин - 25</span>
                <img className='icon-edit' src={edit}></img>
            </div>
            <PaymentItem active={true} number={<span className='icon-search'></span>} title="Технические характеристики" />
            <div className='select-icon'>
                <Select
                    placeholder="Выберите техническую характеристику"
                    items={items}
                    value={value}
                    onChange={({ value }) => setValue(value)}
                />
                <CountItem title="Значение" count="2" />
                <span className='icon-delete'></span>
                {/* <span className='count-title'>Значение</span>
                <div className='count'><span>2</span></div>
                <span className='icon-delete'></span> */}
            </div>
            <div className='select-icon'>
                <Select
                    placeholder="Выберите техническую характеристику"
                    items={items}
                    value={value}
                    onChange={({ value }) => setValue(value)}
                />
                <CountItem title="Значение" count="2" />
                {/* <span className='count-title'>Значение</span>
                <div className='count'><span>2</span></div>*/}
                <span className='icon-delete'></span>
            </div>
            <div className='button-cont'>
                <Button className='outline-button' label="+ Добавить новую характеристику" />
            </div>
            <div className='middle-line'></div>
            {!show ? <div className='button-cont'>
                <Button onClick={() => setShow(true)} label="Добавить особые условия проектирования" />
            </div> :
                <PaymentItem
                    collapse={true}
                    number={<span className='icon-download'></span>}
                    context={<div className='stage-cont'><StageItem
                        title="СИД 1 этап"
                        context={<div className='input-cont'>
                            <div className='text-field-cont'>
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
                            </div>
                            <Checkbox view="primary" className='checkbox-cont' checked label="Объект располагается на территории Южного федерального округа" />
                            <CountItem title="Количество Федеральных образований" count="2" />
                            <CountItem title="Количество Федеральных образований" count="2" />
                            <CountItem title="Количество Федеральных образований" count="2" />
                            <CountItem title="Количество Федеральных образований" count="2" />
                        </div>} />
                        <StageItem
                            title="СИД 1 этап"
                            context={<div className='input-cont'>
                                <div className='text-field-cont'>
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
                                </div>
                                <Checkbox view="primary" className='checkbox-cont' checked label="Объект располагается на территории Южного федерального округа" />
                                <CountItem title="Количество Федеральных образований" count="2" />
                                <CountItem title="Количество Федеральных образований" count="2" />
                                <CountItem title="Количество Федеральных образований" count="2" />
                                <CountItem title="Количество Федеральных образований" count="2" />
                            </div>} />
                        <StageItem
                            title="СИД 1 этап"
                            context={<div className='input-cont'>
                                <div className='text-field-cont'>
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
                                </div>
                                <Checkbox view="primary" className='checkbox-cont' checked label="Объект располагается на территории Южного федерального округа" />
                                <CountItem title="Количество Федеральных образований" count="2" />
                                <CountItem title="Количество Федеральных образований" count="2" />
                                <CountItem title="Количество Федеральных образований" count="2" />
                                <CountItem title="Количество Федеральных образований" count="2" />
                            </div>} />
                    </div>}
                    title="Сбор исходных данных" />}

        </div>
    );
}

export default TreeObjects;
