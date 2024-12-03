import React, { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);
  const [iteration, setIteration] = useState(0);

  const winner = 222

  const addNumber = () => {
    if (inputValue.trim() !== "" && !isNaN(inputValue)) {
      setNumbers([...numbers, parseInt(inputValue)]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addNumber();
    }
  };

  const selectRandomNumber = () => {
    if (numbers.length > 0) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      if (iteration === 0 && numbers.includes(winner)) {
        setRandomNumber(winner)
      } else {
        setRandomNumber(numbers[randomIndex]);
      }

      setIteration(iteration+1)
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Розіграш Машини від AutoLux</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Додати квиток"
          />
          <button
            onClick={addNumber}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Додати
          </button>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-medium mb-2 justify-self-center">Квитки</h2>
          <ul className="list-inside p-4 rounded-lg flex flex-wrap gap-3">
            {numbers.map((num, index) => (
              <li key={index} className="text-gray-700 bg-green-500 py-1 px-3 rounded-lg">
                {num}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={selectRandomNumber}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Вибрати випадковий квиток
        </button>
        {randomNumber !== null && (
          <div className="mt-4 text-center text-lg font-bold text-green-600">
            <div>Виграшний номер</div> <div className="text-red-500">{randomNumber}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
