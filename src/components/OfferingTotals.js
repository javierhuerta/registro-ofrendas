import React from 'react';

function OfferingTotals({ totalDirigida, totalCongregacion, metaGlobal, totalRecolectado }) {
  return (
    <div className="grid grid-cols-3 gap-4 my-4">
      <div className="bg-blue-100 p-4 rounded">
        <h2 className="text-lg font-semibold">Total Ofrendas Dirigidas</h2>
        <p className="text-xl">$ {totalDirigida.toLocaleString('es-CL')}</p>
      </div>
      <div className="bg-green-100 p-4 rounded">
        <h2 className="text-lg font-semibold">Total Ofrendas de Congregación</h2>
        <p className="text-xl">$ {totalCongregacion.toLocaleString('es-CL')}</p>
      </div>
      <div className="bg-red-100 p-4 rounded">
        <h2 className="text-lg font-semibold">Meta Global</h2>
        <p className="text-xl">$ {metaGlobal.toLocaleString('es-CL')}</p>
        <h2 className="text-lg font-semibold">Recolectado</h2>
        <p className="text-xl">$ {totalRecolectado.toLocaleString('es-CL')}</p>
      </div>
    </div>
  );
}

export default OfferingTotals;
