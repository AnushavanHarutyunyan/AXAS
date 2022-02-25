import { Button } from '@consta/uikit/Button';
import { Collapse } from '@consta/uikit/Collapse';
import { Select } from '@consta/uikit/Select';
import { Modal } from '@consta/uikit/Modal';
import { Text } from '@consta/uikit/Text';
import { TextField } from '@consta/uikit/TextField';
import hooks from './Hooks';
import { TreeItem, Round } from '../../components';
import arrowbottom from '../../../assets/img/arrow-bottom.svg';
import { useRef } from 'react';
import { joinByDot } from '../../utils/join';
import { objectTypes } from '../../HOC';
function StepItemTree(props) {
    const { data, onChange } = props;
    const { icon, title, children, variable } = data;
    const {
        tree,
        showTree,
        isOpen,
        isModalOpen,
        items,
        value,
        treeArray,
        setValue,
        setOpen,
        setShowTree,
        setIsModalOpen,
        addItem,
        name,
        setName,
        onDelete,
    } = hooks(props);
    return (
        <>
            <Modal
                isOpen={isModalOpen}
                hasOverlay
                onClickOutside={() => setIsModalOpen(false)}
                onEsc={() => setIsModalOpen(false)}
            >
                <div className="modal-cont">
                    <div className="modal-top">
                        <Text size="xl" className="modal-heading">
                            Добавление нового объекта
                        </Text>
                        <span
                            className="icon-close"
                            onClick={() => setIsModalOpen(false)}
                        ></span>
                    </div>
                    <Select
                        placeholder="Тип объекта"
                        items={objectTypes}
                        value={value}
                        onChange={(item) => {
                            const { value } = item;
                            setValue(value);
                        }}
                    />
                    <TextField
                        value={name}
                        onChange={({ value }) => setName(value)}
                        placeholder="Название нового объекта"
                    />
                    <Button
                        size="m"
                        view="primary"
                        label="Создать"
                        width="default"
                        onClick={() => {
                            addItem({
                                title: name,
                                sequence: 1,
                                note: true,
                                isHaveChildren: false,
                                atLast: false,
                                ...value,
                            });
                            setShowTree(true);
                            setIsModalOpen(false);
                        }}
                    />
                </div>
            </Modal>
            {/* <PaymentItem active={true} number={<span className='icon-search'></span>} title="Работы" /> */}
            {/* <div className='middle-line'></div> */}
            <Collapse
                label={
                    <div className="right-side-item">
                        <div className="round-text">
                            <Round active={isOpen} number={icon} />
                            <Text className="tree-step-title" size="l">
                                {title}
                            </Text>
                        </div>
                        <img
                            src={arrowbottom}
                            className="icon-arrow-bottom"
                        ></img>
                        {/* {icon} */}
                    </div>
                }
                isOpen={isOpen}
                onClick={() => {
                    setOpen(!isOpen);
                    props.onClick();
                }}
                // iconPosition="right"
            >
                {' '}
                {!showTree ? (
                    <div className="buttons">
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            label="Добавить этап строительства"
                        ></Button>
                        <span className="buttons-middle-title">или</span>
                        <Button label="Перетащите готовый файл"></Button>
                    </div>
                ) : (
                    <div className="tree-view">
                        {tree.map((item, index) => {
                            return (
                                <TreeItem
                                    key={index}
                                    title={item.title}
                                    sequence={item.sequence}
                                    children={item.isHaveChildren}
                                    atLast={item.atLast}
                                    onClick={() => {
                                        if (item.children) {
                                            onChange(
                                                [children[0], ...item.children],
                                                joinByDot(
                                                    variable,
                                                    index - 1,
                                                    'tech_chars'
                                                )
                                            );
                                        }
                                    }}
                                    onDelete={() => {
                                        onDelete(index);
                                    }}
                                    addItem={(item) => setIsModalOpen(true)}
                                />
                            );
                        })}
                        {/* <TreeItem
                    title="Этап строительства"
                    sequence={0}
                    children={true}
                    atLast={false}
                />
                <TreeItem
                    title="Куст скважин - 25"
                    sequence={1}
                    note={true}
                    onClick={() => {
                        onChange(children)
                    }}
                    children={true}
                    atLast={false}
                />
                <TreeItem
                    title="Компрессорная станция 014"
                    sequence={2}
                    children={false}
                    atLast={false}
                    onClick={() => {
                        onChange(children)
                    }}
                />
                <TreeItem
                    onClick={() => {
                        onChange(children)
                    }}
                    title="Этап строительства"
                    sequence={2}
                    children={false}
                    atLast={false}
                />
                <TreeItem
                    onClick={() => {
                        onChange(children)
                    }}
                    title="Этап строительства"
                    sequence={2}
                    children={false}
                    atLast={false}
                />
                <TreeItem
                    title="Этап строительства"
                    sequence={2} children={false}
                    onClick={() => setIsModalOpen(true)}
                    atLast={true}
                />
                <TreeItem
                    title="Этап строительства"
                    sequence={1}
                    onClick={() => setIsModalOpen(true)}
                    children={false} atLast={true}
                /> */}
                        <Button
                            className="tree-bottom-button"
                            label="Добавить этап строительства"
                        ></Button>
                    </div>
                )}
            </Collapse>
        </>
    );
}
export default StepItemTree;
