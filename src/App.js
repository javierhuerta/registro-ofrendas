import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import './index.css'; // Asegúrate de que Tailwind CSS está siendo importado aquí

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10)); // Fecha inicial
  const [offerings, setOfferings] = useState([]);

  const addOffering = (newOffering) => {
    setOfferings([...offerings, newOffering]);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div className="container mx-auto mt-5">
      <header>
        <h1 className="text-2xl font-bold text-center">Registro de Ofrendas Construcción Templo - IASD Osorno Central</h1>
      </header>
      <Dashboard offerings={offerings} onAddOffering={addOffering} onDateChange={handleDateChange} />
    </div>
  );
}

export default App;
