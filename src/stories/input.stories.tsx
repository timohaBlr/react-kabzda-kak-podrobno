import React, {ChangeEvent, useRef, useState} from 'react';
import './button.css';
import OnOf from "../Components/OnOf/OnOf";
import {ComponentMeta} from "@storybook/react";



export default {
    title: 'input',

} as ComponentMeta<typeof OnOf>;

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const inputRef = useRef<HTMLInputElement>(null)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
setParentValue(e.currentTarget.checked)
    }


return  (
    <input ref={inputRef} type={"checkbox"} checked={parentValue} onChange={onChange}/>)

}


