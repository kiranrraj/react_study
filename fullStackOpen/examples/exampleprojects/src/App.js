import React, {useState} from 'react';

const Button = ({handler, text}) =>{
  return <button onClick={handler}>{text}</button>
}

const Display = ({message}) => <p>{message}</p>;


const App = () =>{
  const [counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0);

  return(
    <div>
      <Display message = {counter}/>
      <Button handler= {increaseByOne} text="Plus"/>
      <Button handler= {setToZero}  text="Reset"/>
      <Button handler= {decreaseByOne} text="Minus"/>
    </div>
  )
}

export default App;
