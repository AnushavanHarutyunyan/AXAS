import './style.css';
import upploadIcon from '../../../assets/img/upload.svg';
import { Text } from '@consta/uikit/Text';

const UpploadFile = ({ data }) => {
    let textTitle = null;
    if (data && data.title) {
        textTitle = data.title;
    }
    return (
        <div className="uppload_wrapper">
            {textTitle ? (
                <Text className="project-name" size="s">
                    {textTitle}
                </Text>
            ) : null}
            <div className="uppload_block">
                <img src={upploadIcon} alt="uppload" className="uppload_img" />
                <p>Перетащите готовый файл или выберите</p>
            </div>
        </div>
    );
};

export default UpploadFile;
