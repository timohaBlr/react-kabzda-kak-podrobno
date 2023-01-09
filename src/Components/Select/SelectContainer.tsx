import React, {useState} from 'react';
import SelectWithStore from "../SelectWithStore/SelectWithStore";
import { Select } from './Select';
import {ItemType} from "../../App";


export type StateType = {
    hovered: number
    collapsed: boolean
    activeId: number
    items: ItemType[]
}

const SelectContainer = () => {
    const [activeId, setActiveId] = useState<number>(0);
    const items = [
        {id: 1, value: 'Minsk', country: 'Belarus', population: 1938280},
        {id: 2, value: 'Gomel', country: 'Belarus', population: 516976},
        {id: 3, value: 'Mogilev', country: 'Belarus', population: 374655},
        {id: 4, value: 'Moscow', country: 'Russia', population: 13010012},
        {id: 5, value: 'Piter', country: 'Russia', population: 5601911},
        {id: 6, value: 'Novosibirsk', country: 'Russia', population: 1633595},
        {id: 7, value: 'Kiev', country: 'Ukraine', population: 2952301},
        {id: 8, value: 'Kharkov', country: 'Ukraine', population: 1421125},
        {id: 9, value: 'Odessa', country: 'Ukraine', population: 1010537},
    ]
    const state = {
        hovered: 1,
        collapsed: true,
        activeId: 0,
        items : [
            {id: 1, value: 'Minsk', country: 'Belarus', population: 1938280},
            {id: 2, value: 'Gomel', country: 'Belarus', population: 516976},
            {id: 3, value: 'Mogilev', country: 'Belarus', population: 374655},
            {id: 4, value: 'Moscow', country: 'Russia', population: 13010012},
            {id: 5, value: 'Piter', country: 'Russia', population: 5601911},
            {id: 6, value: 'Novosibirsk', country: 'Russia', population: 1633595},
            {id: 7, value: 'Kiev', country: 'Ukraine', population: 2952301},
            {id: 8, value: 'Kharkov', country: 'Ukraine', population: 1421125},
            {id: 9, value: 'Odessa', country: 'Ukraine', population: 1010537},
        ],
    }
    return (<div>
             <SelectWithStore comingState={state}/>
        <Select
            options={items}
            activeId={activeId}
            callBack={setActiveId}/>
        </div>
    );
};

export default SelectContainer;