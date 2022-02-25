import { Text } from '@consta/uikit/Text';
import { Collapse } from '@consta/uikit/Collapse';
import { useState, useEffect } from "react";
import "./style.css";
import { Round } from "../index";
import BaseElement from "../BaseElement";
import { joinByDot } from '../../utils/join';
function RightSideItem(props) {
    const { data } = props;
    const { title, icon, children, variable } = data
    const [isOpen, setOpen] = useState(false);
    // useEffect(() => {
    //     if (!props.active) {
    //         setOpen(false)
    //     }

    // }, [props.active])
    return (
        <Collapse
            label={<div className="right-side-item">
                <Round active={isOpen} number={icon} />
                <Text size='l'>{title}</Text>
                {/* {icon} */}
            </div>}
            isOpen={isOpen}
            onClick={() => {
                setOpen(!isOpen);
                props.onClick()
            }}
        // iconPosition="right"
        >{children && children.map(item => {
            return <BaseElement data={{ ...item, variable: joinByDot(variable, item.variable) }}></BaseElement>
        })}</Collapse>
    );
}
export default RightSideItem;