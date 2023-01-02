import React, {useState} from 'react';
import SelectWithStore from "../SelectWithStore/SelectWithStore";
import { Select } from './Select';

type ItemsType = {
    id: number
    value: string
}
export type StateType = {
    hovered: number
    collapsed: boolean
    activeId: number
    items: ItemsType[]
}

const SelectContainer = () => {
    const [activeId, setActiveId] = useState<number>(0);
    const items = [
        {id: 1, value: 'Minsk'},
        {id: 2, value: 'London'},
        {id: 3, value: 'Moscow'},
        {id: 4, value: 'Kiev'},
    ]
    const state = {
        hovered: 1,
        collapsed: true,
        activeId: 0,
        items: [
            {id: 1, value: 'Minsk'},
            {id: 2, value: 'London'},
            {id: 3, value: 'Moscow'},
            {id: 4, value: 'Kiev'},
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