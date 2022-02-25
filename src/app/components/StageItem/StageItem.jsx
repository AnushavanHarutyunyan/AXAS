import { Text } from '@consta/uikit/Text';
import { Collapse } from '@consta/uikit/Collapse';
import { useState } from "react";
import BaseElement from "../BaseElement";
import "./style.css";
import { joinByDot } from '../../utils/join';
function StageItem(props) {
    const [isOpen, setOpen] = useState(false);
    const { data } = props;
    const { title, icon, children, variable } = data
    return (
        <Collapse
            label={<div className="stage-item">
                <Text size='m' className='stage-title'>{title}</Text>
            </div>}
            isOpen={isOpen}
            onClick={() => setOpen(!isOpen)}
        // iconPosition="right"
        >{children && children.map(item => <BaseElement data={{ ...item, variable: joinByDot(variable, item.variable) }}></BaseElement>)}</Collapse>

    );
}
export default StageItem;