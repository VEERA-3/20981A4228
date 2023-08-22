

import React, { useState, useEffect } from 'eact';


const NumberManagement = () => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const fetchNumbers = async () => {
      const response = await fetch('http://localhost:8008/numbers?url=https://jsonplaceholder.typicode.com/todos/1&url=https://jsonplaceholder.typicode.com/todos/2');
      const data = await response.json();
      setNumbers(data.numbers);
    };
    fetchNumbers();
  }, []);

  return (
    <div>
      <h1>Number Management</h1>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );

};


export default NumberManagement;