import React, { useState } from "react";
import '../App.css'
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    return (
        <div className="App">
            <p style={{fontSize: '50px'}}>You clicked {count} times!</p>
            <div className="Counter-BtnContainer">
            <button className="Counter-Button bn" onClick={increment}>Increment</button>
            <button className="Counter-Button bn" onClick={decrement}>Decrement</button>
            <button className="Counter-Button bn" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}