import React, {useState} from 'react';
import s from './OnOf.module.css'

export const OnOf = () => {
    const [status, setStatus] = useState<boolean>(false)
    const onClickOnHandler = () => {
        setStatus(true)
    }
    const onClickOfHandler = () => {
        setStatus(false)
    }
    const bulb = {
        width: '60px',
        height: '60px',
        border: '3px solid black',
        borderRadius: '50%',
        display: 'inline-block',
        backgroundColor: status ? 'green' : 'red'
    }
    return (
        <div>
            <div onClick={onClickOnHandler} className={s.on}>On</div>
            <div onClick={onClickOfHandler} className={s.of}>Of</div>
            <div style={bulb}>j=o</div>
        </div>
    );
};

export default OnOf;