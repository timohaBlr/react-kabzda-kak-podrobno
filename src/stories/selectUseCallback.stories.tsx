import React, {useCallback, useMemo, useState} from "react";
import {Select} from "../Components/Select/Select";

export default {
    title: 'SelectUseCallback',
}

type CounterPropsType = {
    callBack: () => void
    // counter: number
}

const Counter = React.memo((props: CounterPropsType) => {
    console.log('Counter rendered')
    return <>
        <button onClick={props.callBack}>Plus</button>

    </>
})
export const SelectUseCallback = () => {
    console.log('Stories rendered')

    const [activeId, setActiveId] = useState<number>(0);
    const [items, setItems] = useState([
        {id: 1, value: 'Minsk', country: 'Belarus', population: 1938280},
        {id: 2, value: 'Gomel', country: 'Belarus', population: 516976},
        {id: 3, value: 'Mogilev', country: 'Belarus', population: 374655},
        {id: 4, value: 'Moscow', country: 'Russia', population: 13010012},
        {id: 5, value: 'Piter', country: 'Russia', population: 5601911},
        {id: 6, value: 'Novosibirsk', country: 'Russia', population: 1633595},
        {id: 7, value: 'Kiev', country: 'Ukraine', population: 2952301},
        {id: 8, value: 'Kharkov', country: 'Ukraine', population: 1421125},
        {id: 9, value: 'Odessa', country: 'Ukraine', population: 1010537},
    ])
    const [filter, setFilter] = useState<number>(0);

    const [values, setValues] = useState([
        {id: 1, value: 'Alphabet'},
        {id: 2, value: 'Population'},
        {id: 3, value: 'Country'},
    ])

    const newItems = useMemo(() => {  // есть баг со сбросом фильтра
        switch (filter) {
            case 1:
                return items.filter(item => item.value.toLowerCase().startsWith('m'));
            case 2:
                return items.filter(item => item.population >= 1000000);
            case 3:
                return items.filter(item => item.country === 'Belarus');
            default:
                return items
        }


    }, [filter])
    const [counter, setCounter] = useState<number>(0)
    const callBack = useCallback( () => setCounter(counter + 1)
    , [counter])

    return <>

        <Counter callBack={callBack}/>
        {counter}
        <Select
            options={values}
            activeId={filter}
            callBack={setFilter}/>
        <Select
            options={newItems}
            activeId={activeId}
            callBack={setActiveId}/>
    </>
}