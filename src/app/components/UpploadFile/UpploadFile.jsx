import './style.css';
import upploadIcon from '../../../assets/img/upload.svg';

const UpploadFile = () => {
    return (
        <div className="uppload_wrapper">
            <div className="uppload_block">
                <img src={upploadIcon} alt="uppload" className="uppload_img" />
                <p>Перетащите готовый файл или выберите</p>
            </div>
        </div>
    );
};

export default UpploadFile;
