import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Button } from '@consta/uikit/Button';
import { CollectValuesAction } from '../../store/actions';
import OP from 'object-path';
import './style.css';
import React from 'react';

function Export2Word(element, filename = '') {
    var preHtml =
        "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = '</body></html>';
    var css = ('\
   <style>\
   @page WordSection1{size: 841.95pt 595.35pt;mso-page-orientation: portrait;}\
   div.WordSection1 {page: WordSection1;}\
   h1 {font-family: "Times New Roman", Georgia, Serif; font-size: 16pt; color:red}\
   p {font-family: "Times New Roman", Georgia, Serif; font-size: 14pt;}\
   .rigth-wrapper { overflow: scroll;height: 100vh;padding: 15px; color:red}\
   .task-heading{text-align: center;margin-bottom: 20px;}\
   .rigth-wrapper-item > div {margin: 0px 0px 6px 0;font-size: 14px;}\
   .rigth-wrapper h2 {margin-top: 15px;}\
   .export-button {width: 200px;margin-top: 20px;}\
   .elem{display: flex;}\
   .elem h4{width: 400px;margin-right: 10px;}\
   .rigth-wrapper-item{display: flex;flex-direction: column;flex: 1;}\
   </style>\
  ');
    var html = document.getElementById('exportContent').innerHTML;
    html = '\
  <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">\
  <head>\
    <title>Document Title</title>\
    <xml>\
      <w:worddocument xmlns:w="#unknown">\
        <w:view>Print</w:view>\
        <w:zoom>90</w:zoom>\
        <w:donotoptimizeforbrowser />\
      </w:worddocument>\
    </xml>\
    <style>\
    @page WordSection1{size: 841.95pt 595.35pt;mso-page-orientation: portrait;}\
    div.WordSection1 {page: WordSection1;}\
    h1 {font-family: "Times New Roman", Georgia, Serif; font-size: 16pt;}\
    p {font-family: "Times New Roman", Georgia, Serif; font-size: 14pt;}\
    .rigth-wrapper { overflow: scroll; height: 100vh; padding: 15px;}\
    .task-heading{text-align: center; margin-bottom: 20px;}\
    .rigth-wrapper-item div{margin-top:0px; font-size: 14px;}\
    .rigth-wrapper h2 {margin-top: 15px;}\
    .export-button {width: 200px; margin-top: 20px;}\
    .elem h4{width: 400px; margin-right:400px; margin-top:0px;}\
    .sub-item{font-size:14px}\
    .rigth-wrapper-item{margin-left:200px;}\
    </style>\
  </head>\
  <body lang=RU-ru style="tab-interval:.5in">\
    <div class="Section1">' + html + '</div>\
  </body>\
  </html>'
    console.log(css, "csscsscsscss");
    var blob = new Blob(['\ufeff', css + html], {
        type: 'application/msword'
    });

    // Specify link url
    var url =
        'data:application/vnd.ms-word;charset=utf-8,' +
        encodeURIComponent(html);

    // Specify file name
    filename = filename ? filename + '.doc' : 'document.doc';

    // Create download link element
    var downloadLink = document.createElement('a');

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
        console.log(main, "mainmainmainmain");
        return (
            <>
                <div className="rigth-wrapper" id="exportContent">
                    <h1 className='task-heading'>ЗАДАНИЕ НА ПРОЕКТИРОВАНИЕ</h1>
                    <h1 className='task-heading'>{value.task_name}</h1>

                    <div className='elem'>
                        <h4>1․ Основание для проектирования</h4>
                        <div className="rigth-wrapper-item">
                            <div className='sub-item'>
                                1.1  Перечень приоритетных проектов на 10-летний период. {id}
                            </div>
                            <div>
                                1.2  Решения ПАО «Газпром» по обоснованиям инвестиций {main.name_of_region}
                            </div>
                            <div>
                                1.3 Комплексные целевые Программы развития и реконструкции объектов ПАО «Газпром» {main.capacity}
                            </div>
                            <div>
                                1.4 Поручение Председателя Правления, заместителя Председателя Правления ПАО «Газпром», в т.ч. протоколы совещаний {main.capacity}
                            </div>
                            <div>
                                1.5  Протокол Комиссии газовой промышленности ПАО «Газпром» по разработке месторождений и использованию недр, содержащий решение о достаточности проектного документа на разработку месторождения в качестве основания для включения затрат на разработку проекта обустройства месторождения в План капитального строительства (в раздел «План ПИР»), основанное на положительном заключении по данному вопросу заинтересованных структурных подразделений администрации ПАО «Газпром» {main.capacity}
                            </div>
                        </div>
                    </div>
                    <div className='elem'>
                        <h4>2․ Месторасположение предприятия, здания, сооружения</h4>
                        {/* <div className='cont'> */}
                        <div className="rigth-wrapper-item">
                            {main.region_district ? <div>
                                2.1 Российская Федерация, {main.region_district},{main.capacity},{main.development_regions}
                            </div> : null}
                            {main.type_of_construction ? <div>
                                2.2 Ситуационная схема (Приложение № {main.type_of_construction})
                            </div> : null}
                        </div>
                        {/* </div> */}
                    </div>
                    <div className='elem'>
                        <h4>3․ Заказчик/Агент</h4>
                        <div className="rigth-wrapper-item">
                            {main.customer_or_agent_type ? <div>
                                {main.customer_or_agent_type},{main.customer_agent_organization}
                            </div> : null}

                        </div>
                    </div>
                    <div className='elem'>
                        <h4>4․ Инвестор</h4>
                        <div className="rigth-wrapper-item">
                            <div>{main.investor_organization}</div>
                        </div>
                    </div>
                    <div className='elem'>
                        <h4>5.	Эксплуатирующая организация	</h4>
                        <div className="rigth-wrapper-item">
                            {main.company_organization}
                        </div>
                    </div>
                    <div className='elem'>
                        <h4>6.	Генеральная проектная организация (Генпроектировщик)</h4>
                        <div className="rigth-wrapper-item">
                            {main.project_organization}
                        </div>
                    </div>
                    <div className='elem'>
                        <h4>7.	Субподрядные проектные организации</h4>
                        <div className="rigth-wrapper-item">
                            <div>
                                7.1. Способ определения субподрядных организаций
                                согласовывается с ПАО «Газпром» по каждому субподрядному
                                договору в порядке, установленном внутренними
                                документами ПАО «Газпром». “
                                {main.organization_type},{main.project_organization}
                            </div>
                        </div>
                    </div>
                    <div className="elem">
                        <h4>8. Вид работ</h4>
                        <div className="rigth-wrapper-item">
                            {main.Type_of_work}
                        </div>
                    </div>
                    <div className="elem">
                        <h4>9. Источник финансирования</h4>
                        <div className="rigth-wrapper-item">
                            {main.Source_of_financing}
                        </div>
                    </div>
                    <div className="elem">
                        <h4>
                            10. Срок выполнения работы в соответствии с календарным
                            планом
                        </h4>
                        <div className="rigth-wrapper-item">
                            {main.Work_completion_time}
                        </div>
                    </div>
                    <div className="elem">
                        <h4>11. Исходные данные</h4>
                        <div className="rigth-wrapper-item">
                            <div>
                                11.1 Наименование, шифр (договор), вид предпроектной
                                документации {main.Initial_data}
                            </div>
                            <div>11.2  {main.Conclusion_results}</div>
                            <div>
                                11.3 Действующие проектные документы на разработку
                                месторождений, согласованные Комиссией газовой
                                промышленности по разработке месторождений и
                                использованию недр ПАО «Газпром»
                                {main.Current_project_documents_11_3}
                            </div>
                            <div>11.4  {main.Current_project_documents_11_4}</div>
                            <div>11.5 {main.Project_documentation}</div>
                        </div>
                    </div>
                    {main.type_documentation ? <div className="elem">
                        <h4>12. Вид документации</h4>
                        <div className="rigth-wrapper-item">
                            <div>
                                12.1. {main.type_documentation} документация.
                            </div>
                            <div>12.2. Перед разработкой проектной документации Генпроектировщику разработать
                                основные технические решения (далее – ОТР) и предоставить {main.customer_or_agent_type}</div>
                            {main.type_documentation === "Проектная"
                                ? <div>
                                    12.3.После утверждения проектной документации в установленном в ПАО «Газпром» порядке
                                    Генпроектировщику по отдельному договору разработать рабочую документацию.
                                </div>
                                : null}
                        </div>
                    </div> : null}
                    <div className="elem">
                        <h4>13. Требования к выделению этапов строительства</h4>
                        <div className="rigth-wrapper-item">
                            {main.numbers_construction_stages && main.requirements && main.requirements === "Требуется"
                                ? <div>13.1. Предусмотреть выделение следующих этапов строительства:
                                    {main.numbers_construction_stages} Необходимость выделения (дополнительных) этапов строительства
                                    определить при разработке проектной документации с уточнением их количества и состава .
                                    При определении Генпроектировщиком этапов строительства
                                    {main.customer_or_agent_type} оформить внесение изменений в задание на проектирование
                                    с учетом письма ПАО «Газпром» от 20.05.2021 № 06/44/4/06-1902.
                                </div> : <div>13.1. Не требуется.</div>}
                            {main.requirements === "Требуется" ? <div>13.2. {main.design_documentation}</div> : null}
                            {main.requirements === "Требуется" ? <div>
                                13.3.Сметную документацию разработать с выделением стоимости каждого этапа строительства.
                            </div> : null}
                        </div>
                    </div>
                    <div className="elem">
                        <h4>14. Требования по вариантной разработке</h4>
                        <div className="rigth-wrapper-item">
                            {main.number_feasibility_comparisons_performed && main.development_requirements && main.development_requirements === "Требуется"
                                ? main.develop_OTR === "Да"
                                    ? <div>14.1. Генпроектировщику на этапе ОТР обеспечить проработку оптимальных
                                        технических решений с учетом всего жизненного цикла объекта на
                                        основе результатов сравнения укрупненных технико-экономических
                                        показателей разных вариантов технико-технологических
                                        решений по видам работ:
                                        {main.number_feasibility_comparisons_performed}
                                    </div>
                                    : <div>14.1.  Генпроектировщику при разработке проектной
                                        документации обеспечить проработку оптимальных технических
                                        решений на основе результатов технико-экономических сравнений
                                        (ТЭС) показателей разных вариантов технико-технологических
                                        решений по видам работ:
                                        {main.number_feasibility_comparisons_performed}
                                    </div>
                                : <div>14.1. Не требуется.</div>}
                            {main.development_requirements === "Требуется"
                                ? <div>14.2. Достаточность, количество и необходимость
                                    выполнения технико-экономических сравнений (ТЭС) определить
                                    с учетом рекомендаций ПАО «Газпром», в т.ч. перечня ТЭС,
                                    рекомендованных ПАО «Газпром» для выполнения (письмо ПАО «Газпром»
                                    от 25.09.2020 № 06/44-4259).</div> : null}
                            {main.development_requirements === "Требуется"
                                ? <div>
                                    14.3.По результатам выполнения ТЭС вариантов технических
                                    решений Генпроектировщику разработать проектную документацию
                                    на основе выбранного и согласованного {main.customer_or_agent_type}
                                    варианта технического решения.
                                </div> : null}
                        </div>
                    </div>
                    <div className="elem">
                        <h4>15. Особые условия строительства</h4>
                        <div className="rigth-wrapper-item">
                            {main.special_construction_conditions === "Присутствуют" ? <div>
                                Опасные природные и техногенные условия, которые могут оказать неблагоприятное
                                влияние на строительство и эксплуатацию сооружений: {main.name_conditions}
                            </div> : <div>{main.special_construction_conditions}</div>}
                        </div>
                    </div>
                    <div className="elem">
                        <h4>16. Сведения об объекте капитального
                            строительства по назначению и функционально-технологическим особенностям</h4>
                        <div className="rigth-wrapper-item">
                            В проектной документации в соответствии с «Классификатором объектов капитального
                            строительства по их назначению и функционально-технологическим особенностям
                            (для целей архитектурно-строительного проектирования
                            и ведения единого государственного реестра заключений
                            экспертизы проектной документации объектов капитально го строительства)»,
                            утвержденным приказом Минстроя России от 10.07.2020 № 374/пр.
                            указать следующую информацию:
                            Группа (вид объекта капитального строительства)
                            {main.name_conditions} {main.name_conditions}
                        </div>
                    </div>
                    <div className="elem">
                        <h4>17. Идентификационные признаки и срок эксплуатации объекта</h4>
                        <div className="rigth-wrapper-item">
                            <div>
                                17.1. Генпроектировщику при разработке {main.generaldesigner_during_development}
                                — уточнить идентификационные признаки зданий и сооружений в необходимом объёме в
                                соответствии с ч. 1 ст. 4 Федерального закона от 30.12.2009
                                № 384-ФЗ «Технический регламент о безопасности зданий и сооружений»
                                и согласовать их с {main.customer_or_agent_type};
                                — указать сведения о сроках эксплуатации здания или сооружения и их частей в
                                соответствии с п. 2 ст. 33 Федерального закона от 30.12.2009 № 384-ФЗ «Технический регламент
                                о безопасности зданий и сооружений» и ГОСТ 27751-2014 «Надежность
                                строительных конструкций и оснований. Основные положения».
                            </div>
                            <div>
                                17.2. В проектной документации для зданий и сооружений,
                                предусмотренных проектом, представить сводную информацию в части идентификационных признаков
                                установленных в соответствии с требованиями ч. 1 ст.
                                4 Федерального закона от 30.12.2009 № 384-ФЗ «Технический
                                регламент о безопасности зданий и сооружений».
                            </div>
                            {main.develop_OTR === "Да" ? <div>
                                17.3. В проектной документации для зданий и сооружений,
                                предусмотренных проектом, представить сводную информацию в части идентификационных признаков
                                установленных в соответствии с требованиями ч. 1 ст.
                                4 Федерального закона от 30.12.2009 № 384-ФЗ «Технический
                                регламент о безопасности зданий и сооружений».
                            </div> : null}
                        </div>
                    </div>
                    <div className="elem">
                        <h4>18. Требование о необходимости соответствия проектной документации обоснованию
                            безопасности опасного производственного объекта</h4>
                        <div className="rigth-wrapper-item">
                            {main.requirement_need_design_documentation === "Требуется" ? <div>
                                В случае, если при проектировании опасного производственного объекта (ОПО) требуется отступление от
                                требований федеральных норм и правил в области промышленной безопасности, или этих требований не достаточно,
                                или они не установлены проектную документацию на ОПО разработать с учетом обоснования безопасности опасного
                                производственного объекта (ОБ ОПО) в соответствии
                                с п. 4 ст. 3 Федерального закона от 21.07.1997 № 116-ФЗ «О промышленной безопасности опасных производственных объектов».
                            </div> : <div>{main.requirement_need_design_documentation}</div>}
                        </div>
                    </div>
                    <div className="elem">
                        <h4>19. Требования к выполнению сбора исходных данных и инженерных изысканий для подготовки проектной документации</h4>
                        <div className="rigth-wrapper-item">
                            <div>19.1
                                Выполнить сбор исходных данных (этап 2) для проектирования в соответствии с «Инструкцией по организации и проведению сбора
                                исходных данных для строительства и реконструкции объектов ПАО «Газпром», утвержденной распоряжением ПАО «Газпром»
                                от 22.05.2018 № 95 с учетом актуальных изменений и дополнений, и заданием на сбор исходных данных, разработанным и
                                утвержденным {main.customer_or_agent_type} и согласованным Генпроектировщиком.
                            </div>
                            <div>19.2. Генпроектировщику подготовить и представить в адрес {main.customer_or_agent_type} для согласования материалы,
                                обосновывающие внесение сведений об объекте проектирования в документы территориального планирования соответствующего
                                уровня (федеральный, субъект Российской Федерации, муниципальное образование). В случае изменения наименования,
                                местоположения и основных характеристик объекта обеспечить
                                направление {main.customer_or_agent_type} соответствующих изменений.
                            </div>
                            {main.object_criteria_federal_transport_facilities === "Да"
                                ? <div>19.3. {main.customer_or_agent_type} представить в Департамент ПАО «Газпром»
                                    (А.С. Фик) материалы, обосновывающие внесение сведений об объекте проектирования в схему
                                    территориального планирования Российской Федерации
                                    в области федерального транспорта (в части трубопроводного транспорта)
                                </div> : null}
                            {main.performing_engineering_surveys === "Не требуется"
                                ? <div>19.3. Выполнение инженерных изысканий не требуется.</div> : null}
                            <div>
                                19.5. Генпроектировщику при участии {main.customer_or_agent_type}
                                до начала инженерных изысканий выполнить рекогносцировочное обследование участка под размещение объекта
                                с выдачей заключения о возможности использования материалов изысканий прошлых лет.
                            </div>
                            <div>
                                19.6. Генпроектировщику выполнить: — разработку и согласование с {main.customer_or_agent_type}
                                «Программы инженерных изысканий» и комплексного графика выполнения инженерных изысканий. При разработке
                                «Программы инженерных изысканий» учитывать заключение о возможности использования материалов изысканий
                                прошлых лет, а также полученные на предпроектной стадии результаты рекогносцировочных обследований и инженерных изысканий (при наличии);
                                — основные виды инженерных изысканий: инженерно-геодезические, инженерно-геологические (в т.ч. геофизические
                                исследования), инженерно-гидрометеорологические, инженерно-экологические и, при необходимости, специальные
                                виды инженерных изысканий в объеме, необходимом и достаточном для разработки {main.type_documentation}
                                документации в соответствии с требованиями постановления Правительства Российской Федерации от 19.01.2006 № 20
                                «Об инженерных изысканиях для подготовки проектной документации, строительства, реконструкции объектов капитального строительства»,
                                СП 47.13330.2016 «СНиП 11-02-96 Инженерные изыскания для строительства. Основные положения» и задания на инженерные изыскания,
                                разработанного и утвержденного {main.customer_or_agent_type} и согласованного Генпроектировщиком в объеме
                                необходимом и достаточном для разработки {main.type_documentation} документации
                            </div>
                            <div>
                                19.7. В случаях, предусмотренных законодательством Российской Федерации и требованиями нормативных документов,
                                выполнить следующие работы: сейсмическое микрорайонирование; работы по выявлению и изучению объектов
                                культурного наследия; поиск, обследование территории на наличие взрывоопасных предметов в местах боевых
                                действий и на территориях бывших воинских формирований.
                            </div>
                            <div>
                                19.8. Представить (при необходимости) заключение историко-культурной экспертизы или данные уполномоченного органа
                                об отсутствии объектов культурного наследия, либо объектов, обладающих признаками объекта культурного наследия в
                                соответствии с требованиями ст. 3 и ст. 30 Федерального закона от 25.06.2002 № 73-ФЗ «Об объектах культурного
                                наследия (памятниках истории и культуры) народов Российской Федерации».
                            </div>
                            <div>
                                19.9. Картографический материал должен быть получен официальным путем с соблюдением законодательства об
                                авторских правах и содержать ссылки на источник получения. При наличии на исходных материалах грифов
                                ограниченного пользования, документация должна быть оформлена в соответствии с требованиями к оформлению
                                документации ограниченного использования.
                            </div>
                        </div>
                    </div>
                    <Button
                        className="export-button"
                        label="Export as .docx"
                        onClick={() =>
                            Export2Word('exportContent', 'word-content.docx')
                        }
                    />
                </div>
            </>

        );
    }
    return <div></div>;
};

export default RideSideComp;
