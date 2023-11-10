import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [log, setLog] = useState<string[]>([]);

  const handleInput = (value: string) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      const res = eval(input);
      setResult(res);
      setLog((prev) => [...prev, `${input} = ${res}`]);
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
        <button onClick={clearInput} className="p-2 border rounded bg-red-500 hover:bg-red-700 text-white col-start-4">
          C
        </button>
        {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => handleInput(num.toString())}
            className="p-2 border rounded bg-blue-500 hover:bg-blue-700 text-white"
          >
            {num}
          </button>
        ))}
        <button onClick={() => handleInput('0')} className="p-2 border rounded bg-blue-500 hover:bg-blue-700 text-white">
          0
        </button>
        <button onClick={calculate} className="p-2 border rounded bg-green-500 hover:bg-green-700 text-white">
          =
        </button>
        <button onClick={() => handleInput('+')} className="p-2 border rounded bg-yellow-500 hover:bg-yellow-700 text-white">
          +
        </button>
        <button onClick={() => handleInput('-')} className="p-2 border rounded bg-yellow-500 hover:bg-yellow-700 text-white">
          -
        </button>
        <button onClick={() => handleInput('*')} className="p-2 border rounded bg-yellow-500 hover:bg-yellow-700 text-white">
          *
        </button>
        <button onClick={() => handleInput('/')} className="p-2 border rounded bg-yellow-500 hover:bg-yellow-700 text-white">
          /
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold mb-2">Operation Log:</h2>
        <ul>
          {log.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;