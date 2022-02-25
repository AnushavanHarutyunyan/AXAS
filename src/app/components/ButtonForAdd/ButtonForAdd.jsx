
import { Button } from '@consta/uikit/Button';
import { useState } from "react";
import BaseElement from "../BaseElement";
function ButtonForAdd(props) {
    const { data } = props;
    const { title, subTitle, child } = data;
    const [showButton, setShowButton] = useState(true);
    return showButton ? < div className='button-cont' >
        <Button onClick={() => setShowButton(false)} label={title} />
    </div > : <div>
        <div className='subtitle-icon'><span className='title'>{subTitle}</span> <div><span className='icon-delete'></span></div></div>
        <BaseElement data={child} />
    </div>
}
export default ButtonForAdd;