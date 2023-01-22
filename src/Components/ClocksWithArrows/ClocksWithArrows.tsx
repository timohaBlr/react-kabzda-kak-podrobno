import React, {useEffect, useState} from 'react';
import s from './ClocksWithArrows.module.css'

export const ClocksWithArrows = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        //const secondsDelay = getComputedStyle(document.documentElement).getPropertyValue('--secondsDelay');
        // оставлю,чтобы запомнить
        function setDelay(newDelay: number, hand: string) {
            document.documentElement.style.setProperty('--' + hand + 'Delay', '-' + newDelay + 's');
        }

        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);

        setDelay(seconds, 'seconds')
        setDelay(minutes * 60, 'minutes')
        setDelay(hours * 3600, 'hours')
        return () => {
            clearInterval(timer)
        }
    }, [])

    let seconds = date.getSeconds();
    let minutes = date.getMinutes()
    let hours = date.getHours()
    if (hours > 12) {
        hours -= 12;
    }

    return (<div>
            <div className={s.wrapper}>
                <div className={s.clocks}>
                    <div className={s.second}>
                    </div>
                    <div className={s.minute}>
                    </div>
                    <div className={s.hour}>
                    </div>
                    <div className={s.axis}>
                    </div>
                    <section className={s.indicator}></section>
                    <section className={s.indicator}></section>
                    <section className={s.indicator}></section>
                    <section className={s.indicator}></section>
                    <section className={s.indicator}></section>
                    <section className={s.indicator}></section>
                    <section className={s.indicator}></section>
                    <section className={s.indicator}></section>
                    <section className={s.indicator}></section>
                    <section className={s.indicator}></section>
                    <section className={s.indicator}></section>
                    <section className={s.indicator}></section>
                </div>
            </div>
            <div> {hours}:{minutes}:{seconds}</div>
        </div>
    );
};
