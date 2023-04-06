import React, { useEffect } from 'react';
import "../Temperature/MySty.css";
import { useState } from 'react';


const Temp = () => {

   

    const [Value, setValue] = useState(24);
    const [Color, setColor] = useState('cold');

    const increaseTemp = () => {
        setValue(Value + 1);
    };

    const decreaseTemp = () => {
        setValue(Value - 1);
    };

    useEffect(() => {
        if (Value < 15) {
            setColor('cold');
        }
        if (Value === 24) {
            setColor('neutral');
        }
        if (Value >= 35) {
            setColor('hot');
        }
    }, [Value])

    return (
        <>
            <div className="parent">
                <div className='my-container'>
                    <div className='temp-container'>
                        <div className={`temp-display ${Color}`}>{Value}°C</div>
                    </div>
                    <div className='button-container'>
                        <button onClick={increaseTemp}>+</button>
                        <button onClick={decreaseTemp}>-</button>
                    </div>
                </div>
            </div>

            
          
        </>
    )
}

export default Temp