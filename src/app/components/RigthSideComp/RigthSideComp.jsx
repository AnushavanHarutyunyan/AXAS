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
        console.log(main, "mainmainmainmain");
        return (
            <>
                <div className="rigth-wrapper" id="exportContent">
                    <h2>1․ Основание для проектирования</h2>
                    <div className="rigth-wrapper-item">
                        <h5>
                            1.1 {id}
                        </h5>
                        <h5>
                            1.2 {main.name_of_region}
                        </h5>
                        <h5>
                            1.3 {main.capacity}
                        </h5>
                        <h5>
                            1.4 {main.capacity}
                        </h5>
                        <h5>
                            1.5 {main.capacity}
                        </h5>
                    </div>

                    <h2>2․ Месторасположение предприятия, здания, сооружения</h2>
                    <div className="rigth-wrapper-item">
                        <h5>
                            2.1 {main.region_district},{main.capacity},{main.development_regions}
                        </h5>
                        {main.region_district},{main.capacity},{main.development_regions}
                    </div>
                    <div className="rigth-wrapper-item">
                        <h5>
                            2.2 {main.type_of_construction}
                        </h5>
                    </div>
                    <h2>3․ Заказчик/Агент</h2>
                    <div className="rigth-wrapper-item">
                        <h5>
                            {main.customer_or_agent_type},{main.customer_agent_organization}
                        </h5>

                    </div>
                    <h2>4․ Инвестор</h2>
                    <div className="rigth-wrapper-item">
                        <h5>{main.investor_organization}</h5>
                    </div>
                    <h2>5.	Эксплуатирующая организация	</h2>
                    <div className="rigth-wrapper-item">
                        {main.company_organization}
                    </div>
                    <h2>6.	Генеральная проектная организация (Генпроектировщик)</h2>
                    <div className="rigth-wrapper-item">
                        {main.project_organization}
                    </div>
                    <h2>7.	Субподрядные проектные организации</h2>
                    <div className="rigth-wrapper-item">
                        {main.organization_type},{main.project_organization}
                    </div>
                </div>
                <Button className='export-button' label='Export as .docx' onClick={() => Export2Word('exportContent', 'word-content.docx')} />
            </>
        );
    }
    return <div></div>;
};

export default RideSideComp;
//main.capacity
