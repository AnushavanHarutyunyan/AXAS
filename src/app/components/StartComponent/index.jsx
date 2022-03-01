import { Select } from '@consta/uikit/Select';
import { Text } from '@consta/uikit/Text';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import BaseElement from '../BaseElement';
import Hoc from '../../HOC';
import { joinByDot } from '../../utils/join';
import { totalCostSelector } from '../../store/selectors';
import { useDispatch } from 'react-redux';
import OP from 'object-path';
import { CollectValuesAction } from '../../store/actions';
import edit from '../../../assets/img/edit.svg';
import UpploadFile from '../UpploadFile/UpploadFile';
import RideSideComp from '../RigthSideComp/RigthSideComp';

const StartComponent = (props) => {
    const { data } = props;
    const { children, variable } = data;
    const [step, setStep] = useState(null);
    const [active, setActive] = useState(null);
    const [focus, setFocus] = useState(true);
    const totalCost = useSelector(totalCostSelector.totalCost);
    const dispatch = useDispatch();
    const list = [
        {
            label: 'Инвестиционный проект 1',
            id: 'Инвестиционный проект 1',
        },
        {
            label: 'Инвестиционный проект 2',
            id: 'Инвестиционный проект 2',
        },
        {
            label: 'Инвестиционный проект 3',
            id: 'Инвестиционный проект 3',
        },
    ];

    //----------------------------------------------------------------
    const selectItem = useSelector((state) => {
        return OP.get(state.values, joinByDot('main', 'task_category'));
    });
    const name = useSelector((state) => {
        return OP.get(state.values, joinByDot('main', 'task_name'));
    });
    return (
        <div className="right-side">
            <div className="right-side-menu">
                <div>
                    <div>
                        {/* <Text className='heading' size='2xl'>{name}</Text> */}
                        <input
                            className="heading"
                            value={name}
                            autoFocus={focus}
                            readOnly={focus}
                            onChange={(e) => {
                                dispatch(
                                    CollectValuesAction.collectValueAction({
                                        key: joinByDot('main', 'task_name'),
                                        value: e.target.value,
                                    })
                                );
                            }}
                        />
                        <img src={edit} onClick={() => setFocus(!focus)} />
                    </div>

                    {/* <Select
                        placeholder="Выберите значение"
                        value={list.find((item) => item.id === selectItem)}
                        onChange={({ value }) => {
                            dispatch(
                                CollectValuesAction.collectValueAction({
                                    key: joinByDot('main', 'task_category'),
                                    value: value.id,
                                })
                            );
                        }}
                        items={list}
                    /> */}
                    <div>
                        {/* <Text className="project-name" size="s">
                            1.1 Перечень приоритетных проектов на 10-летний
                            период
                        </Text>
                        <UpploadFile />
                        <Text className="project-name" size="s">
                            1.2 Решения ПАО «Газпром» по обоснованиям инвестиций
                        </Text>
                        <UpploadFile />
                        <Text className="project-name" size="s">
                            1.3 Комплексные целевые Программы развития и
                            реконструкции объектов ПАО «Газпром»
                        </Text>
                        <UpploadFile />
                        <Text className="project-name" size="s">
                            1.4 Поручение Председателя Правления, заместителя
                            Председателя Правления ПАО «Газпром», в т.ч.
                            протоколы совещаний
                        </Text>
                        <UpploadFile />
                        <Text className="project-name" size="s">
                            1.5 Протокол Комиссии газовой промышленности ПАО
                            «Газпром» по разработке месторождений и
                            использованию недр, содержащий решение о
                            достаточности проектного документа на разработку
                            месторождения в качестве основания для включения
                            затрат на разработку проекта обустройства
                            месторождения в План капитального строительства (в
                            раздел «План ПИР»), основанное на положительном
                            заключении по данному вопросу заинтересованных
                            структурных подразделений администрации ПАО
                            «Газпром»
                        </Text> */}
                        {children.map((item, index) => {
                            return (
                                <BaseElement
                                    key={index}
                                    data={{
                                        ...item,
                                        variable: joinByDot(
                                            'main',
                                            variable,
                                            item.variable
                                        ),
                                    }}
                                    active={index === active}
                                    onChange={(children, variable) => {
                                        setActive(index);
                                        setStep({ children, variable });
                                    }}
                                ></BaseElement>
                            );
                        })}
                        {/* <StepItem number="1" title="Этапы проектирования" active={step === "designStages"} onClick={() => setStep("designStages")} />
            <StepItem number="2"
                active={step === "treeObjects"}
                onClick={() => setStep("treeObjects")}
                collapse={true}
                title="Дерево объектов"
                context={
                    !showTree
                        ? <div className='buttons'>
                            <Button onClick={() => setIsModalOpen(true)}
                                label="Добавить этап строительства"></Button>
                            <span className='buttons-middle-title'>или</span>
                            <Button label="Перетащите готовый файл"></Button>
                        </div>
                        : <div className='tree-view'>
                            <TreeItem title="Этап строительства" sequence={0} children={true} atLast={false} />
                            <TreeItem title="Куст скважин - 25" sequence={1} note={true} children={true} atLast={false} />
                            <TreeItem title="Компрессорная станция 014" sequence={2} children={false} atLast={false} />
                            <TreeItem title="Этап строительства" sequence={2} children={false} atLast={false} />
                            <TreeItem title="Этап строительства" sequence={2} children={false} atLast={false} />
                            <TreeItem title="Этап строительства" sequence={2} children={false}
                                onClick={() => setIsModalOpen(true)} atLast={true} />
                            <TreeItem title="Этап строительства" sequence={1}
                                onClick={() => setIsModalOpen(true)}
                                children={false} atLast={true} />
                            <Button className='tree-bottom-button' label="Добавить этап строительства"></Button>
                        </div>
                }
            />
            <StepItem
                active={step === "coefficients"}
                onClick={() => setStep("coefficients")}
                number="3"
                title="Уточненная стоимость (коэффициенты)" />
            <StepItem
                active={step === "additionalWork"}
                onClick={() => setStep("additionalWork")}
                number="4"
                title="Этапы проектирования" /> */}
                    </div>
                </div>

                {/* <div className="total-cost-cont">
                    <span className="total-cost-label">
                        Итоговая стоимость работ
                    </span>
                    <span className="total-cost">
                        {totalCost > 0 && totalCost
                            ? new Intl.NumberFormat().format(totalCost) + ' ₽'
                            : '0 ₽'}
                    </span>
                </div> */}
            </div>

            <div className="right-side-cont">
                <RideSideComp />
            </div>

            {/* {step === "designStages" ? <DesignStages /> : null}
        {step === "treeObjects" ? <TreeObjects /> : null}
        {step === "coefficients" ? <Coefficients /> : null}
        {step === "additionalWork" ? <AdditionalWork /> : null} */}
        </div>
    );
};

export default new Hoc(StartComponent);
