
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';
import "./style.css"

function TreeItem(props) {
    const { sequence, children, atLast,onDelete } = props;
    let shift = [];
    for (let index = 0; index < sequence; index++) {
        let classes = ['border-cont'];
        if (children) classes.push("tree-with-children");
        if (atLast && index == sequence - 1) classes.push("tree-last-element");
        if (index === sequence - 1) classes.push("tree-horizontal-line");
        shift.push(
            <div className={classes.join(" ")}>
                <div className={"top border-div"}></div>
                <div className={"bottom border-div"}></div>
            </div>
        )
    }
    return <div className="tree-item" onClick={() => props.onClick()}>
        {shift}
        {atLast
            ? <Button className='outline-button'
                onClick={() => props.addItem({
                    title: "Компрессорная станция 014",
                    sequence,
                    children: false,
                    atLast: false,
                })}
                label={sequence === 1
                    ? "+ Добавить объект" : "+ Добавить подобъект"} />
            : <div className='tree-item-cont'>
                <div className='round-title'>
                    <div className="tree-round"><span className={sequence > 1
                        ? 'icon-cubesblack'
                        : 'icon-cubes'}></span></div>
                    <div className="tree-item-title">{props.title}
                        {props.note ? <div className='notes-hover-cont'>
                            <div className='notes'><span className=''></span></div>
                            <div className='hover-cont'>
                                <Text size='m'>Особые условия:</Text>
                                <div className='hover-text-ount'>
                                    <Text size='s' className='hover-cont-text'>Количество Федеральных образований</Text>
                                    <Text size='s'>12</Text>
                                </div>
                            </div>
                        </div> : null}
                    </div>
                </div>
                {sequence === 1 ? <div className='tree-item-options'>
                    <span className='icon-delete' onClick={onDelete}></span>
                    <span className=''></span>
                </div> : null}
            </div>}
    </div>
}
export default TreeItem;