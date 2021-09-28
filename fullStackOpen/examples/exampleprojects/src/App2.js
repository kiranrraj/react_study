import React, { useState } from 'react';

const Button = ({ handler, text }) => {
    return <button onClick={handler}>{text}</button>
}

const Display = ({ message }) => <p>{message}</p>;


const App2 = () => {
    const [counterLeft, setLeftCounter] = useState(0);
    const increaseByOneLeft = () => setLeftCounter(counterLeft + 1)
    const decreaseByOneLeft = () => setLeftCounter(counterLeft - 1)
    const setToZeroLeft = () => setLeftCounter(0);

    const [counterRight, setRightCounter] = useState(0);
    const increaseByOneRight = () => setRightCounter(counterRight + 1)
    const decreaseByOneRight = () => setRightCounter(counterRight - 1)
    const setToZeroRight = () => setRightCounter(0);

    return (
        <div>
            <div>
                <Display message={counterLeft} />
                <Button handler={increaseByOneLeft} text="Plus" />
                <Button handler={setToZeroLeft} text="Reset" />
                <Button handler={decreaseByOneLeft} text="Minus" />
            </div>
            <div>
                <Display message={counterRight} />
                <Button handler={increaseByOneRight} text="Plus" />
                <Button handler={setToZeroRight} text="Reset" />
                <Button handler={decreaseByOneRight} text="Minus" />
            </div>
        </div>
    )
}

export default App2;
