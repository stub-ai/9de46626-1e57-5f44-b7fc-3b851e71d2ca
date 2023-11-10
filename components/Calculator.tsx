import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleInput = (value: string) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      alert('Invalid operation');
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <div className="mb-4">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-2 border rounded"
        />
        <div className="text-right">{result}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => handleInput(num.toString())}
            className="p-2 border rounded"
          >
            {num}
          </button>
        ))}
        <button onClick={clearInput} className="p-2 border rounded">
          C
        </button>
        <button onClick={() => handleInput('0')} className="p-2 border rounded">
          0
        </button>
        <button onClick={calculate} className="p-2 border rounded">
          =
        </button>
        <button onClick={() => handleInput('+')} className="p-2 border rounded">
          +
        </button>
        <button onClick={() => handleInput('-')} className="p-2 border rounded">
          -
        </button>
        <button onClick={() => handleInput('*')} className="p-2 border rounded">
          *
        </button>
        <button onClick={() => handleInput('/')} className="p-2 border rounded">
          /
        </button>
      </div>
    </div>
  );
};

export default Calculator;