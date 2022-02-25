import React from 'react';
import {
    PaymentItem,
    StartComponent,
    StepItem,
    StageItem,
    PercentItem,
    CheckboxItem,
    CountItem,
    SelectItem,
    TextBorderBottom,
    ListWithAddAndRemove,
    StepItemTree,
    SelectWithValue,
    ButtonForAdd,
    SelectItemWithColleps,
    ObjectName,
} from '..';
import CheckboxItemGruop from '../CheckboxItemGruop';
import UpploadFile from '../UpploadFile/UpploadFile';

const BaseElement = (props) => {
    console.log(props, 'baseElement');
    const { data } = props;
    const { type } = data;
    switch (type) {
        case 'Start':
            return <StartComponent {...props}></StartComponent>;
        case 'stepItem':
            return <StepItem {...props}></StepItem>;
        case 'stepItemTree':
            return <StepItemTree {...props} />;
        case 'collapseItem':
            return <PaymentItem {...props}></PaymentItem>;
        case 'selectItem':
            return <SelectItem {...props}></SelectItem>;
        case 'stageItem':
            return <StageItem {...props}></StageItem>;
        case 'percentItem':
            return <PercentItem {...props}></PercentItem>;
        case 'checkboxItem':
            return <CheckboxItem {...props} />;
        case 'checkboxItemGroup':
            return <CheckboxItemGruop {...props} />;
        case 'numberItem':
            return <CountItem {...props} />;
        case 'TitleItem':
            return <TextBorderBottom {...props} />;
        case 'ListWithAddAndRemove':
            return <ListWithAddAndRemove {...props} />;
        case 'SelectWithValue':
            return <SelectWithValue {...props} />;
        case 'selectItemWithColleps':
            return <SelectItemWithColleps {...props}></SelectItemWithColleps>;
        case 'ButtonForAdd':
            return <ButtonForAdd {...props} />;
        case 'objectName':
            return <ObjectName {...props} />;
        case 'UpploadFile': {
            return <UpploadFile {...props} />;
        }
        default:
            break;
    }
    return null;
};

export default BaseElement;
