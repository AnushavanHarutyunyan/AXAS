import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CollectValuesAction } from '../../store/actions';
import OP from 'object-path';
import './style.css';

const RideSideComp = () => {
    const value = useSelector((state) => {
        return OP.get(state.values, 'main');
    });
    const id = useSelector((state) => {
        return OP.get(state.values, 'id1.1');
    });
    if (value.main) {
        const { main } = value;
        return (
            <div className="rigth-wrapper">
                <h2>Основание для проектирования</h2>
                <div className="rigth-wrapper-item">
                    <h5>
                        1.1 Перечень приоритетных проектов на 10-летний период
                    </h5>
                    {id}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>
                        1.2 Решения ПАО «Газпром» по обоснованиям инвестиций
                    </h5>
                    {main.name_of_region}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>
                        1.3 Комплексные целевые Программы развития и
                        реконструкции объектов ПАО «Газпром»
                    </h5>
                    {main.capacity}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>
                        1.4 Поручение Председателя Правления, заместителя
                        Председателя Правления ПАО «Газпром», в т.ч. протоколы
                        совещаний
                    </h5>
                    {main.capacity}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>
                        1.5 Протокол Комиссии газовой промышленности ПАО
                        «Газпром» по разработке месторождений и использованию
                        недр, содержащий решение о достаточности проектного
                        документа на разработку месторождения в качестве
                        основания для включения затрат на разработку проекта
                        обустройства месторождения в План капитального
                        строительства (в раздел «План ПИР»), основанное на
                        положительном заключении по данному вопросу
                        заинтересованных структурных подразделений администрации
                        ПАО «Газпром»
                    </h5>
                    {main.capacity}
                </div>
                <h2>Месторасположение предприятия, здания, сооружения</h2>
                <div className="rigth-wrapper-item">
                    <h5>
                        2.1 Российская Федерация, наименование области (округа),
                        района (районов) строительства (реконструкции,
                        технического перевооружения)
                    </h5>
                    {main.capacity}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>
                        2.2 Ситуационная схема (Приложение №номер)(обязательное)
                    </h5>
                    {main.capacity}
                </div>
                <h2>Заказчик/Агент</h2>
                <div className="rigth-wrapper-item">
                    <h5>
                        Наименование организации с указанием документа, на
                        основании которого организация назначена агентом
                    </h5>
                    {main.capacity}
                </div>
                <h2>Инвестор</h2>
                <div className="rigth-wrapper-item">
                    <h5>Наименование организации</h5>
                    {main.capacity}
                </div>
            </div>
        );
    }
    return <div></div>;
};

export default RideSideComp;
//main.capacity