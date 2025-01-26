import React, { useEffect, useState } from 'react';

function App() {
  // Declare a variável de estado 'health' usando useState
  const [health, setHealth] = useState('Loading...');

  useEffect(() => {
    // Fazendo a requisição para o backend
    fetch('http://localhost:5000/api/health') // Caminho relativo para usar o proxy
      .then(response => response.json())
      .then(data => setHealth(data.status))
      .catch(error => {
        console.error('Error fetching backend health:', error);
        setHealth('Error fetching data');
      });
  }, []); // Esse useEffect será executado uma vez, ao carregar o componente

  return (
    <div>
      <h1>Krek-App</h1>
      <p>Backend Health: {health}</p>
    </div>
  );
}

export default App;
