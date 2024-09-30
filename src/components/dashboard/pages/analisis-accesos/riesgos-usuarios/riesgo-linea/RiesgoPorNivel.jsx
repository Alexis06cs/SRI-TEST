import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './RiesgoPorNivel.css';  // Asegúrate de crear este archivo CSS

const RiesgoPorNivel = () => {
    // Datos para el gráfico tipo doughnut (anillo)
    const data = {
        labels: ['Alto', 'Medio', 'Bajo'],
        datasets: [
            {
                label: 'Riesgo por Nivel',
                data: [3480, 1208, 486],
                backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
            },
        },
    };

    return (
        <div className="riesgo-container">
            <h1>Riesgo por Nivel</h1>

            {/* Input de fecha y botones */}
            <div className="input-group">
                <label htmlFor="fechaRiesgo">Fecha de Riesgo:</label>
                <input type="date" id="fechaRiesgo" />
                <button className="buscar-btn">Buscar</button>
                <button className="export-btn">Exportar como imagen</button>
            </div>

            {/* Gráfico de anillo */}
            <div className="chart-container">
                <h2>Riesgo por Nivel</h2>
                <p>Fecha de Riesgo: 17/09/2024</p>
                <div className="doughnut-container">
                    <Doughnut data={data} options={options} />
                </div>
            </div>

            {/* Tabla de detalles */}
            <div className="table-container">
                <h2>Detalles por Riesgos por Nivel</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nivel</th>
                            <th>Riesgo</th>
                            <th>Porcentaje</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alto</td>
                            <td>3,480</td>
                            <td>67.29%</td>
                            <td><button className="detalles-btn">Detalles</button></td>
                        </tr>
                        <tr>
                            <td>Medio</td>
                            <td>1,208</td>
                            <td>23.37%</td>
                            <td><button className="detalles-btn">Detalles</button></td>
                        </tr>
                        <tr>
                            <td>Bajo</td>
                            <td>486</td>
                            <td>9.38%</td>
                            <td><button className="detalles-btn">Detalles</button></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>5,174</td>
                            <td>100.00%</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <button className="export-btn">Exportar como Excel</button>
            </div>
        </div>
    );
};

export default RiesgoPorNivel;
