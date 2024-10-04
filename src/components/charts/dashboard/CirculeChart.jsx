import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CirculeChart = () => {
  // Configuración del gráfico
  const options = {
    series: [66.29, 32.82, 3.89], // Porcentajes de cada nivel de riesgo
    chart: {
      type: 'donut',
    },
    labels: ['Alto', 'Medio', 'Bajo'], // Etiquetas para los niveles
    colors: ['#0ABD8C', '#5FCBE4', '#FF6384'], // Colores para cada nivel
    legend: {
      position: 'right',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <div>
      <ReactApexChart options={options} series={options.series} type="donut" height={165} />
    </div>
  );
};

export default CirculeChart;
