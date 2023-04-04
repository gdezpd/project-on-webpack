import React, {useState} from 'react';
import s from './Counter.module.scss'

export const Counter = () => {
    let [increment, setIncrement] = useState<number>(0)
    const onClickHandler = () => {
        setIncrement(prev=> prev+1)
    }
    return (
        <div className={s.button}>
            {increment}
            <br/>
            <button onClick={onClickHandler}> dsfsdf</button>
        </div>
    );
};
