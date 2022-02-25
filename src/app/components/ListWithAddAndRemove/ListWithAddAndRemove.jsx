import { Button } from '@consta/uikit/Button';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { CollectValuesAction } from '../../store/actions';
import { joinByDot } from '../../utils/join';
import OP from "object-path";
// import hooks from "./Hooks";
import BaseElement from "../BaseElement";
function ListWithAddAndRemove(props) {
    const { data } = props;
    const { child, title, variable } = data;
    const [value, setValue] = useState();
    //    const [list, setList] = useState([]);
    const list = useSelector((state => {
        return OP.get(state.values, variable)
    }))
    const dispatch = useDispatch();
    return <>
        <div className='big-round-title'>
            <div className="tree-round"><span className='icon-search'></span></div>
            <span className="tree-item-title">Работы</span>
            {/* <img className='icon-edit' src={edit}></img> */}
        </div>
        {/* <div className='middle-line'></div> */}
        {/* {console.log(child && child[value])} */}
        {/* {child && value && child.child && child.child[value.id] && child.child[value.id].map((item) => {
            return <BaseElement data={item}></BaseElement>
        })} */}
        {list && list.map((item, index) => <div key={index} className='select-icon'>
            <BaseElement data={{ ...child, variable: joinByDot(variable, index) }}></BaseElement>
            <span onClick={() => {
                let new_list = list ? [...list] : [];
                new_list.splice(index, 1);
                dispatch(
                    CollectValuesAction.collectValueAction({
                        key: variable,
                        value: new_list
                    })
                )
            }} className='icon-delete'></span>
        </div>)}

        <div className='button-cont'>
            <Button className='outline-button' label={`+ ${title}`}
                onClick={() => {
                    //setList([...list, {}])
                    let new_list = list ? [...list] : [];
                    new_list.push({});
                    dispatch(
                        CollectValuesAction.collectValueAction({
                            key: variable,
                            value: new_list
                        })
                    )
                }}
            ></Button>
        </div>
        {/* {value ? <div className='input-cont'>
            <div className="input">
                <TextField label="% выполнения работ собственными силами"
                    type="number"
                    placeholder="Обязательное" />
            </div>
            <div className="input">
                <TextField
                    label="% выполнения работ субподряд"
                    type="number"
                    placeholder="Обязательное" />
            </div>
            <Checkbox view="primary" className='checkbox-cont' checked label="Объект располагается на территории Южного федерального округа" />
            <CountItem title="Количество Федеральных образований" count="2" />
            <CountItem title="Количество Федеральных образований" count="2" />
            <CountItem title="Количество Федеральных образований" count="2" />
            <CountItem title="Количество Федеральных образований" count="2" />
        </div> : null} */}
        {/* <div className='middle-line'></div>
        <div className='button-cont'>
            <Button className={!value ? 'outline-button outline-button-passive' : 'outline-button'} label="+ Добавить новый вид работ" />
        </div> */}
    </>
}
export default ListWithAddAndRemove;