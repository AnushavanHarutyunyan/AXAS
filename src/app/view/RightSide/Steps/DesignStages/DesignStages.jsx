
import { TextField } from '@consta/uikit/TextField';
import { Checkbox } from '@consta/uikit/Checkbox';
import { Select } from '@consta/uikit/Select';
import hooks from "./Hooks";
import { PaymentItem, StageItem, CountItem } from '../../../../components';

function DesignStages(props) {
    const { value, items, setValue } = hooks()
    return (
        <div className='payment-cont'>
            <PaymentItem
                number={<span className='icon-characteristics'></span>}
                title="Общие характеристики проекта"
                collapse={true}
                context={
                    <div className='select-cont'>
                        <Select
                            placeholder="Вид строительства"
                            items={items}
                            value={value}
                            onChange={({ value }) => setValue(value)}
                        />
                        <Select
                            placeholder="Тип разработки"
                            items={items}
                            value={value}
                            onChange={({ value }) => setValue(value)}
                        />
                        <Select
                            placeholder="Направление проектирования"
                            items={items}
                            value={value}
                            onChange={({ value }) => setValue(value)}
                        />
                    </div>
                }
            />
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
                        <CountItem title="Количество Субъектов Федерации" count="2" />
                        <CountItem title="Количество Муниципальных образований" count="2" />
                        <CountItem title="Количество кадастровых планов территории" count="2" />
                        <CountItem title="Количество сельских и городских поселений" count="2" />
                        <CountItem title="Объект располагается на территории Южного федерального округа" count="2" />
                        <CountItem title="Количество подключений" count="2" />
                    </div>} />
                    <StageItem
                        title="СИД 2 этап"
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
                            <CountItem title="Количество Субъектов Федерации" count="2" />
                            <CountItem title="Количество Муниципальных образований" count="2" />
                            <CountItem title="Количество кадастровых планов территории" count="2" />
                            <CountItem title="Количество сельских и городских поселений" count="2" />
                            <CountItem title="Объект располагается на территории Южного федерального округа" count="2" />
                            <CountItem title="Количество подключений" count="2" />
                            <CountItem title="Количество ЗОУИТ" count="2" />
                            <CountItem title="Количество чертежей в томе 2" count="2" />
                            <CountItem title="Количество чертежей в томе 4" count="2" />
                            <CountItem title="Количество чертежей в томе 6" count="2" />
                            <CountItem title="Количество чертежей в томе 7" count="2" />
                            <CountItem title="Количество проектов ДПТ" count="2" />
                        </div>} />
                    <StageItem
                        title="СИД 2 этап. Логистическое обеспечение"
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
                            <CountItem title="Количество Субъектов Федерации" count="2" />
                            <CountItem title="Количество Муниципальных образований" count="2" />
                            <CountItem title="Количество кадастровых планов территории" count="2" />
                            <CountItem title="Количество сельских и городских поселений" count="2" />
                            <CountItem title="Объект располагается на территории Южного федерального округа" count="2" />
                        </div>} />
                    <StageItem
                        title="СИД 3 этап"
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
                            <CountItem title="Количество Субъектов Федерации" count="2" />
                            <CountItem title="Количество Муниципальных образований" count="2" />
                            <CountItem title="Количество кадастровых планов территории" count="2" />
                            <CountItem title="Количество сельских и городских поселений" count="2" />
                            <CountItem title="Объект располагается на территории Южного федерального округа" count="2" />
                            <CountItem title="Количество подключений" count="2" />
                            <CountItem title="Количество ЗОУИТ" count="2" />
                            <CountItem title="Количество чертежей в томе 2" count="2" />
                            <CountItem title="Количество чертежей в томе 4" count="2" />
                            <CountItem title="Количество чертежей в томе 6" count="2" />
                            <CountItem title="Количество чертежей в томе 7" count="2" />
                            <CountItem title="Количество проектов ДПТ" count="2" />
                        </div>} />
                </div>}
                title="Сбор исходных данных" />
            <PaymentItem number={<span className='icon-search'></span>} title="Инженерные изыскания" />
            <PaymentItem number={<span className='icon-project-document'></span>} title="Проектная документация" />
            <PaymentItem number={<span className='icon-pen-documnet'></span>} title="Рабочая документация" />
            <PaymentItem number={<span className='icon-settings'></span>} title="Разработка ТЧДЗ" />
            <PaymentItem number={<span className='icon-development'></span>} title="Разработка ОТР" />
            <PaymentItem number={<span className='icon-other'></span>} title="Прочее" />
        </div>
    );
}

export default DesignStages;
