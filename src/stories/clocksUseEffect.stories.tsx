import React, { useEffect, useState} from "react";

export default {
    title: 'ClocksUseEffect',
}



export const ClocksUseEffect = () => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        const date = new Date(Date.now())
        const timer = setInterval(() => {
            setHours(date.getHours())
            setMinutes(date.getMinutes())
            setSeconds(date.getSeconds())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [ seconds])
    return <div>
        Hours: {hours}.
        Minutes: {minutes}.
        Seconds: {seconds}.


    </div>
}