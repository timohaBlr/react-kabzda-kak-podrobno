import React, {KeyboardEvent, useReducer} from 'react';
import s from './../Select/Select.module.css'
import {StateType} from "../Select/SelectContainer";
import {selectReducer, setActiveIdAC, setCollapsedAC, setHoveredAC} from "./SelectWithStoreReducer";


type SelectPropsType = {
    comingState: StateType
}

export const SelectWithStore: React.FC<SelectPropsType> = ({
                                                               comingState,
                                                               ...restProps
                                                           }) => {

    // const state = store.getState() as StateType
    const [state, dispatchState] = useReducer(selectReducer, comingState)
    let activeId = state.activeId
    let options = state.items
    let hovered = state.hovered
    let collapsed = state.collapsed

    const title = !collapsed //если список открыт
        ? options.find(item => item.id === hovered)!.value  // то заголовок - выделенный вариант
        : options.find(item => item.id === activeId) // иначе проверь, есть ли в вариантах заданный по умолчанию
            ? options.find(item => item.id === activeId)!.value // если да то отобрази его
            : 'select any city'; // иначе текст-заглушка
    const arrow = collapsed ? '↓' : '↑'; // стрелочка справа в инпуте

    const titleOnClickHandler = () => {
        dispatchState(setCollapsedAC(!collapsed))
        //selectReducer(comingState, setCollapsedAC(!collapsed))
        //setCollapsed(!collapsed)
    }
    const titleOnKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            dispatchState(setActiveIdAC(hovered))
            //selectReducer(comingState, setActiveIdAC(hovered))
            //callBack(hovered)
            dispatchState(setCollapsedAC(true))
            //selectReducer(comingState, setCollapsedAC(true))
            //setCollapsed(true)
        }
    }
    const titleOnBlurHandler = () => {
        dispatchState(setCollapsedAC(true))
        //selectReducer(comingState, setCollapsedAC(true))
        //setCollapsed(true)
    }
    const optionsNavigation = (e: KeyboardEvent<HTMLDivElement>) => {
        let i = hovered;
        let iMax = options.length;
        switch (e.key) {
            case 'ArrowDown':
                while (i > 0 && i < iMax) {
                    i++
                    dispatchState(setHoveredAC(i))
                    //selectReducer(comingState, setHoveredAC(i))
                    //setHovered(i)
                    break;
                }
                break;
            case 'ArrowUp':
                while (i > 1 && i <= iMax) {
                    i--
                    dispatchState(setHoveredAC(i))
                    //selectReducer(comingState, setHoveredAC(i))
                    //setHovered(i)
                    break;
                }
                break;
            default : {
            }
        }
    }

    const mappedOptions = options.map(option => {
        const optionOnClickHandler = () => {
            dispatchState(setActiveIdAC(option.id))
            //selectReducer(comingState, setActiveIdAC(option.id))
            //callBack(option.id)
            dispatchState(setCollapsedAC(!collapsed))
            //selectReducer(comingState, setCollapsedAC(!collapsed))
            //setCollapsed(!collapsed)
        }
        const hoverCallBack = () => {
            dispatchState(setHoveredAC(option.id))
            //selectReducer(comingState, setHoveredAC(option.id))
            //setHovered(option.id)
        }

        return (
            <li className={option.id === hovered ? s.active : ''}
                key={option.id}
                onMouseEnter={hoverCallBack}
                onClick={optionOnClickHandler}
            >{option.value}</li>
        )
    })

    return (
        <div className={s.select}
             tabIndex={0}
             onKeyUp={optionsNavigation}
             onBlur={titleOnBlurHandler}
             onKeyPress={titleOnKeyPressHandler}>
            <div className={s.title}
                 onClick={titleOnClickHandler}>
                <div>{title}</div>
                <div className={s.arrow}>{arrow}</div>
            </div>
            {!collapsed && <ul className={s.options}>
                {mappedOptions}
            </ul>}
        </div>
    );
};

export default SelectWithStore;