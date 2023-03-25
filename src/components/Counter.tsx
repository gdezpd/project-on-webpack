import React, {useState} from 'react';

const Counter = () => {
    let [increment, setIncrement] = useState<number>(0)
    const onClickHandler = () => {
        setIncrement(prev=> prev+1)
    }
    return (
        <div>
            {increment}

            <button onClick={onClickHandler}> dsfsdf</button>
        </div>
    );
};

export default Counter;