import React from 'react';
import DateSelector from './DateSelector';
import AddOffering from './AddOffering';
import OfferingsTable from './OfferingsTable';
import OfferingTotals from './OfferingTotals';
import StackedBarChart from './StackedBarChart';

function Dashboard({ offerings, onAddOffering, onDateChange }) {
  // Calcular totales
  const totalDirigida = offerings
    .filter(offering => offering.type === 'directed')
    .reduce((total, current) => total + current.amount, 0);
  const totalCongregacion = offerings
    .filter(offering => offering.type === 'congregation')
    .reduce((total, current) => total + current.amount, 0);

    // Agrupar y sumar ofrendas por fecha
  const chartData = offerings.reduce((acc, curr) => {
    const index = acc.findIndex(item => item.date === curr.date);
    if (index > -1) {
      acc[index][curr.type] += curr.amount;
    } else {
      acc.push({ date: curr.date, congregation: 0, directed: 0, [curr.type]: curr.amount });
    }
    return acc;
  }, []);


  // Suponemos una meta global de ejemplo, por ejemplo $500,000
  const metaGlobal = 500000;
  const totalRecolectado = totalDirigida + totalCongregacion;

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <DateSelector onDateChange={onDateChange} />
        <OfferingTotals
          totalDirigida={totalDirigida}
          totalCongregacion={totalCongregacion}
          metaGlobal={metaGlobal}
          totalRecolectado={totalRecolectado}
        />
        <AddOffering onAddOffering={onAddOffering} />
        <OfferingsTable offerings={offerings} />
      </div>
      <div className="w-1/2 p-4">
        <StackedBarChart data={chartData} />
      </div>
    </div>
  );
}

export default Dashboard;
