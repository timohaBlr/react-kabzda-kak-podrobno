import React, {useEffect, useState} from "react";

export default {
    title: 'ClocksUseEffect',
}


export const ClocksUseEffect = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    const dateTo2DigitsString = (num: number) => {
        return num < 10 ? '0' + num : num
    }
    return <div>
        {dateTo2DigitsString(date.getHours())}
        {dateTo2DigitsString(date.getMinutes())}
        {dateTo2DigitsString(date.getSeconds())}
        <div className={'arrowClocks'}>

        </div>
    </div>
}