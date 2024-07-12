import React from 'react';

function DateSelector({ onDateChange }) {
  return (
    <div>
      <label htmlFor="date">Selecciona una Fecha:</label>
      <input
        type="date"
        id="date"
        onChange={(e) => onDateChange(e.target.value)}
        className="mx-2"
      />
    </div>
  );
}

export default DateSelector;
