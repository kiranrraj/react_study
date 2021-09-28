import React, { useState } from 'react';

const Button = ({ handler, text }) => {
    return <button onClick={handler}>{text}</button>
}

const Display = ({ message }) => <p>{message}</p>;


const App3 = () => {
    const [counter, setCounter] = useState({left:0, right:0 });
    const increaseByOneLeft = () => {
        // const newCounter = {left:counter.left+1, right: counter.right};
        const newCounter = {...counter, left: counter.left+1}
        setCounter(newCounter);
    }
    const decreaseByOneLeft = () => {
        // const newCounter = {left:counter.left-1, right: counter.right};
        const newCounter = {...counter, left:counter.left-1}
        setCounter(newCounter);
    }
    const setToZero = () => setCounter({left:0, right:0 });

    const increaseByOneRight = () => {
        const newCounter = {left:counter.left, right: counter.right+1};
        setCounter(newCounter);
    }
    const decreaseByOneRight = () => {
        const newCounter = {left:counter.left, right: counter.right-1};
        setCounter(newCounter);
    }


    return (
        <div>
            <div>
                <Display message={counter.left} />
                <Button handler={increaseByOneLeft} text="Plus" />
                <Button handler={setToZero} text="Reset" />
                <Button handler={decreaseByOneLeft} text="Minus" />
            </div>
            <div>
                <Display message={counter.right} />
                <Button handler={increaseByOneRight} text="Plus" />
                <Button handler={setToZero} text="Reset" />
                <Button handler={decreaseByOneRight} text="Minus" />
            </div>
        </div>
    )
}

export default App3;
