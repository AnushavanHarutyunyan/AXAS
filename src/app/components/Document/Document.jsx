
import { Text, textPropSize } from '@consta/uikit/Text';
import "./style.css";
function Document(props) {
    return (
        <div className='document-cont'>
            <div className="document">
                <div className='title-top'></div>
                <Text size="s" className="title">{props.title}</Text>
            </div>
        </div>
    );
}

export default Document;
