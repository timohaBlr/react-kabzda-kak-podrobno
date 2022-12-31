import React from 'react';
import s from './Accodrdion.module.css'
import {ItemType} from "../../App";

type AccordionPropsType = {
    collapsed: boolean
    title: string
    setCollapsed: (collapsed: boolean) => void
    items: Array<ItemType>
}
export const Accordion = (props: AccordionPropsType) => {
    const onClickHandler = () => {
        props.setCollapsed(!props.collapsed)
    }
    return (
        <div>
            <div data-testid={'div'}
                 className={s.title}
                 onClick={onClickHandler}>
                {props.title}
            </div>
            {!props.collapsed && <ul className={s.body}>
                {props.items.map(item => {
                    return (<li key={item.id}>{item.value}</li>)
                })
                }

            </ul>}
        </div>
    );
};

