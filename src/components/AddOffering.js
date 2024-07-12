import React, { useState } from 'react';

function AddOffering({ onAddOffering }) {
  const [offering, setOffering] = useState({
    date: '',
    type: 'congregation',
    amount: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!offering.date || offering.amount <= 0) {
      alert('Por favor, completa todos los campos con valores válidos.');
      return;
    }
    onAddOffering(offering);
    setOffering({ date: '', type: 'congregation', amount: 0 }); // Resetear el formulario después de enviar
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="mb-3">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha</label>
        <input
          type="date"
          id="date"
          value={offering.date}
          onChange={(e) => setOffering({ ...offering, date: e.target.value })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">Tipo de Ofrenda</label>
        <select
          id="type"
          value={offering.type}
          onChange={(e) => setOffering({ ...offering, type: e.target.value })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          required
        >
          <option value="congregation">Ofrenda de Congregación</option>
          <option value="directed">Ofrenda Dirigida</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Monto</label>
        <input
          type="number"
          id="amount"
          value={offering.amount}
          onChange={(e) => setOffering({ ...offering, amount: parseInt(e.target.value, 10) })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Agregar Ofrenda
      </button>
    </form>
  );
}

export default AddOffering;
