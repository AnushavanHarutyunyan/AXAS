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
                            {id ? <div className='sub-item'>
                                1.1 {id}
                            </div> : null}
                            {main.name_of_region ? <div>
                                1.2 {main.name_of_region}
                            </div> : null}
                            {main.capacit ? <div>
                                1.3 {main.capacity}
                            </div> : null}
                            {main.capacity ? <div>
                                1.4 {main.capacity}
                            </div> : null}
                            {main.capacity ? <div>
                                1.5 {main.capacity}
                            </div> : null}
                        </div>
                    </div>
                    <div className='elem'>
                        <h4>2․ Месторасположение предприятия, здания, сооружения</h4>
                        {/* <div className='cont'> */}
                        <div className="rigth-wrapper-item">
                            {main.region_district ? <div>
                                2.1 {main.region_district},{main.capacity},{main.development_regions}
                            </div> : null}
                            {main.type_of_construction ? <div>
                                2.2 {main.type_of_construction}
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
