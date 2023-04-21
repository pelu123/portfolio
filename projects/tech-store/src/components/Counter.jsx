import { useState } from 'react'
import './components.css'

const Counter = () => {
    const [counter, setCounter] = useState(1)

    const changeCounter = (operacion) =>{
        if (operacion === "+"){
            if (counter < 10)
            setCounter (counter + 1)
        }else{
            if (counter > 0)
            setCounter (counter - 1)
        }
    }



    return (
        <div className='counter-container'>
            <button onClick={() => changeCounter("-")} className='btn btn-dark-menos'>-</button>
            {counter}
            <button onClick={() => changeCounter("+")} className='btn btn-dark'>+</button>
        </div>
    );
}

export default Counter;
