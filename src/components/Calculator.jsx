// calculator component

import { useState } from 'react';

const Calculator = () => {
    const [display, setDisplay] = useState('');

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setDisplay('');
        } else if (value === '=') {
            calculateResult();
        } else {
            setDisplay(prev => prev + value);
        }
    };

    const calculateResult = () => {
        try {
            const result = eval(display);
            setDisplay(result.toString());
        } catch (error) {
            setDisplay('Error:', error.message);
        };
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='bg-white shadow-md rounded-lg p-4'>
                <input type="text" value={display} readOnly className="w-full mb-4 p-2 border rounded text-right text-xl" />
                <div className='grid grid-cols-4 gap-2'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleButtonClick('7')}>7</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleButtonClick('8')}>8</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleButtonClick('9')}>9</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleButtonClick('*')}>*</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleButtonClick('4')}>4</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleButtonClick('5')}>5</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleButtonClick('6')}>6</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleButtonClick('-')}>-</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleButtonClick('1')}>1</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleButtonClick('2')}>2</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleButtonClick('3')}>3</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleButtonClick('+')}>+</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleButtonClick('0')}>0</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleButtonClick('C')}>C</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => calculateResult()}>=</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick={() => handleButtonClick('/')}>/</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;