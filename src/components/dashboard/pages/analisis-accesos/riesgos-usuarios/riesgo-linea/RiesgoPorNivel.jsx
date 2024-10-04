import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './RiesgoPorNivel.css';  // Asegúrate de crear este archivo CSS

const RiesgoPorNivel = () => {
    // Estado para controlar el modal y el contenido seleccionado
    const [showModal, setShowModal] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState(null);

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
        // Captura el clic en el gráfico
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const index = elements[0].index;
                const level = data.labels[index];
                setSelectedLevel(level);
                setShowModal(true); // Muestra el modal
            }
        },
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="riesgo-container">
            <div className='riesgo-container-card'>
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

            {/* Modal */}
            {showModal && (
                <div className="modal">
                <div className="modal-content">
                  <h2>Detalles del Nivel: {selectedLevel}</h2>
                  <p>A continuación, te mostramos información detallada del nivel de riesgo seleccionado: <strong>{selectedLevel}</strong></p>
              
                  <ul>
                    <li><strong>Total de Incidentes:</strong> {selectedLevel === 'Alto' ? 250 : selectedLevel === 'Medio' ? 180 : 90}</li>
                    <li><strong>Porcentaje del Total:</strong> {selectedLevel === 'Alto' ? '35%' : selectedLevel === 'Medio' ? '25%' : '15%'}</li>
                    <li><strong>Tiempo Promedio de Resolución:</strong> {selectedLevel === 'Alto' ? '72 horas' : selectedLevel === 'Medio' ? '48 horas' : '24 horas'}</li>
                    <li><strong>Categorías de Incidentes:</strong></li>
                    <ul>
                      {selectedLevel === 'Alto' ? (
                        <>
                          <li>Fallas críticas del sistema (65%)</li>
                          <li>Riesgos de seguridad (25%)</li>
                          <li>Errores financieros (10%)</li>
                        </>
                      ) : selectedLevel === 'Medio' ? (
                        <>
                          <li>Problemas de rendimiento (50%)</li>
                          <li>Alertas de mantenimiento (30%)</li>
                          <li>Otros (20%)</li>
                        </>
                      ) : (
                        <>
                          <li>Problemas menores de soporte (60%)</li>
                          <li>Recomendaciones de mejora (30%)</li>
                          <li>Otros (10%)</li>
                        </>
                      )}
                    </ul>
                  </ul>
              
                  <button onClick={closeModal}>Cerrar</button>
                </div>
              </div>
              
            )}
        </div>
    );
};

export default RiesgoPorNivel;
