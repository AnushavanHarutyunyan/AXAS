import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Button } from '@consta/uikit/Button';
import { CollectValuesAction } from '../../store/actions';
import OP from 'object-path';
import './style.css';
import React from 'react';

function Export2Word(element, filename = '') {
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml + document.getElementById(element).innerHTML + postHtml;

    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });

    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

    // Specify file name
    filename = filename ? filename + '.doc' : 'document.doc';

    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = url;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }

    document.body.removeChild(downloadLink);
}
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
<<<<<<< HEAD
            <div className="rigth-wrapper">
                <h2>1. Основание для проектирования</h2>
                <div className="rigth-wrapper-item">
                    <h5>
                        1.1 Перечень приоритетных проектов на 10-летний период
                    </h5>
                    {}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>
                        1.2 Решения ПАО «Газпром» по обоснованиям инвестиций
                    </h5>
                    {}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>
                        1.3 Комплексные целевые Программы развития и
                        реконструкции объектов ПАО «Газпром»
                    </h5>
                    {}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>
                        1.4 Поручение Председателя Правления, заместителя
                        Председателя Правления ПАО «Газпром», в т.ч. протоколы
                        совещаний
                    </h5>
                    {}
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
                    {}
                </div>
                <h2>2. Месторасположение предприятия, здания, сооружения</h2>
                <div className="rigth-wrapper-item">
                    <h5>
                        2.1 Российская Федерация, наименование области (округа),
                        района (районов) строительства (реконструкции,
                        технического перевооружения)
                    </h5>
                    {main.name_of_region}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>
                        2.2 Ситуационная схема (Приложение №номер)(обязательное)
                    </h5>
                    {main.name_of_construction_area}
                </div>
                <h2>3. Заказчик/Агент</h2>
                <div className="rigth-wrapper-item">
                    <h5>
                        Наименование организации с указанием документа, на
                        основании которого организация назначена агентом
                    </h5>
                    {main.Customer}
                    <h5>Наименование организации</h5>
                    {main.Name_of_company}
                </div>
                <h2>4. Инвестор</h2>
                <div className="rigth-wrapper-item">
                    <h5>
                        Наименование организации с указанием документа, на
                        основании которого организация назначена агентом
                    </h5>
                    {main.Investor}
                </div>
                <h2>5. Эксплуатирующая организация</h2>
                <div className="rigth-wrapper-item">
                    <h5>
                        Наименование организации с указанием документа, на
                        основании которого организация назначена агентом
                    </h5>
                    {main.Operating_organization}
                </div>
                <h2>6. Генеральная проектная организация</h2>
                <div className="rigth-wrapper-item">
                    <h5>
                        Наименование организации с указанием документа, на
                        основании которого организация назначена агентом
                    </h5>
                    {main.Determined_on_competitive_basis}
                </div>
                <h2>7. Субподрядные проектные организации</h2>
                <div className="rigth-wrapper-item">
                    <h5>
                        7.1. Способ определения субподрядных организаций
                        согласовывается с ПАО «Газпром» по каждому субподрядному
                        договору в порядке, установленном внутренними
                        документами ПАО «Газпром». “
                    </h5>
                    {main.Subcontractor_design_organizations}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>8. Вид работ</h5>
                    {main.Type_of_work}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>9. Источник финансирования</h5>
                    {main.Source_of_financing}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>
                        10. Срок выполнения работы в соответствии с календарным
                        планом
                    </h5>
                    {main.Work_completion_time}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>11. Исходные данные</h5>
                    <h6>
                        11.1 Наименование, шифр (договор), вид предпроектной
                        документации
                    </h6>
                    {main.Initial_data}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>11.2 </h5>
                    {main.Conclusion_results}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>
                        11.3 Действующие проектные документы на разработку
                        месторождений, согласованные Комиссией газовой
                        промышленности по разработке месторождений и
                        использованию недр ПАО «Газпром»
                    </h5>
                    {main.Current_project_documents_11_3}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>11.4</h5>
                    {main.Current_project_documents_11_4}
                </div>
                <div className="rigth-wrapper-item">
                    <h5>11.5 </h5>
                    {main.Project_documentation}
                </div>
                <Button className='export-button' label='Export as .docx' onClick={() => Export2Word('exportContent', 'word-content.docx')} />
            </>
        );
    }
    return <div></div>;
};

export default RideSideComp;
