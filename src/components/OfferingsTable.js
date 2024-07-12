import React, { useState } from 'react';

function OfferingsTable({ offerings }) {
  const [sortKey, setSortKey] = useState('date'); // 'date' o 'amount'
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' o 'desc'

  const sortedOfferings = [...offerings].sort((a, b) => {
    const valA = a[sortKey];
    const valB = b[sortKey];
    if (sortOrder === 'asc') {
      return valA > valB ? 1 : -1;
    } else {
      return valA < valB ? 1 : -1;
    }
  });

  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            onClick={() => toggleSort('date')}
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
          >
            Fecha
          </th>
          <th
            onClick={() => toggleSort('amount')}
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
          >
            Monto
          </th>
          <th
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Tipo
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {sortedOfferings.map((offering, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{offering.date}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${offering.amount.toLocaleString('es-CL')}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{offering.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OfferingsTable;
