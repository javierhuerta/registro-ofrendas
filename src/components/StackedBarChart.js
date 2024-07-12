import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, ResponsiveContainer } from 'recharts';

function StackedBarChart({ data }) {
  // Función para formatear las etiquetas de las barras
  const renderLabel = (entry) => {
    return `$${entry.value.toLocaleString('es-CL')}`;
  };

  // Función para formatear los valores del eje Y
  const formatYAxis = (tickItem) => {
    // Dividir por 1000 si los valores son típicamente en miles o más
    return `$${(tickItem / 1000).toLocaleString('es-CL')}k`;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis width={80} tickFormatter={formatYAxis} />
        <Tooltip formatter={(value) => `$${value.toLocaleString('es-CL')}`} />
        <Legend />
        <Bar dataKey="congregation" fill="#82ca9d" name="Ofrenda Congregación">
          <LabelList dataKey="congregation" content={renderLabel} />
        </Bar>
        <Bar dataKey="directed" fill="#8884d8" name="Ofrenda Dirigida">
          <LabelList dataKey="directed" content={renderLabel} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default StackedBarChart;
