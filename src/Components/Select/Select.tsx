import React, {useState, KeyboardEvent} from 'react';
import {ItemType} from "../../App";
import s from './Select.module.css'

type SelectPropsType = {
    activeId: number
    options: ItemType[]
    callBack: (id: number) => void
}


export const Select: React.FC<SelectPropsType> =React.memo( ({
                                                      activeId, options,
                                                      callBack, ...restProps
                                                  }) => {

    const [hovered, setHovered] = useState<number>(activeId ? activeId : 1);
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const title = !collapsed //если список открыт
        ? options.find(item => item.id === hovered)!.value  // то заголовок - hovered вариант
        : options.find(item => item.id === activeId) // иначе проверь, есть ли в вариантах заданный по умолчанию
            ? options.find(item => item.id === activeId)!.value // если да то отобрази его
            : 'select any city'; // иначе текст-заглушка
    const arrow = collapsed ? '↓' : '↑'; // стрелочка справа в инпуте

    const titleOnClickHandler = () => {
        setCollapsed(!collapsed)
    }
    const titleOnKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            callBack(hovered)
            setCollapsed(true)
        }
    }
    const titleOnBlurHandler = () => {
        setCollapsed(true)
    }
    const optionsNavigation = (e: KeyboardEvent<HTMLDivElement>) => {
        let i = hovered;
        let iMax = options.length;
        switch (e.key) {
            case 'ArrowDown':
                while (i > 0 && i < iMax) {
                    i++
                    setHovered(i)
                    break;
                }
                break;
            case 'ArrowUp':
                while (i > 1 && i <= iMax) {
                    i--
                    setHovered(i)
                    break;
                }
                break;
            default : {
            }
        }
    }

    const mappedOptions = options.map(option => {
        const optionOnClickHandler = () => {
            callBack(option.id)
            setCollapsed(!collapsed)
        }
        const hoverCallBack = () => {
            setHovered(option.id)
        }

        return (
            <li className={option.id === hovered ? s.active : ''}
                key={option.id}
                onMouseEnter={hoverCallBack}
                onClick={optionOnClickHandler}
            >{option.value}</li>
        )
    })
    console.log('Select Rendered')
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
});

