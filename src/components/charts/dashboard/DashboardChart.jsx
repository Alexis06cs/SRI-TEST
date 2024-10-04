import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';
import Modal from '../../modals/Modal'; // Importamos el modal

const DashboardChart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const options = {
    series: [{
      name: "sales",
      data: [400, 430, 448, 470, 540, 690]
    }],
    chart: {
      type: 'bar',
      height: 380,
      events: {
        dataPointSelection: (event, chartContext, { dataPointIndex }) => {
          const selectedValue = options.series[0].data[dataPointIndex];
          console.log("Barra seleccionada:", selectedValue); // Agregamos este log para verificar el clic
          setSelectedData({
            category: options.xaxis.categories[dataPointIndex],
            value: selectedValue
          });
          setIsModalOpen(true); // Activamos el modal
        }
      }
    },
    xaxis: {
      categories: ['Basis', 'Ciclo de compras', 'Finanzas', 'Gestión de Materiales', 'RRHH y nomina', 'Ventas'],
    },
    colors: ['#0ABD8C', '#0ABD8C'],
    title: {
      text: 'Riesgo de Proceso Empresarial',
    },
    tooltip: {
      x: {
        formatter: function (val) {
          return dayjs(val).format("YYYY/MM/DD");
        }
      }
    }
  };

  return (
    <div>
      <ReactApexChart options={options} series={options.series} type="bar" height={380} />

      {/* Modal separado */}
      {isModalOpen && <Modal data={selectedData} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default DashboardChart;
