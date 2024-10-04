import React from 'react';
import '../../../styles/DashboardMain.css'; // Asegúrate de tener el CSS correcto
import DashboardChart from '../../charts/dashboard/DashboardChart.jsx';
import CirculeChart from '../../charts/dashboard/CirculeChart.jsx';
import TrafficSourcesChart from '../../charts/dashboard/TrafficSourcesChart.jsx';
import AreaChart from '../../charts/dashboard/AreaChart.jsx';

const DashboardMain = () => {
  return (
  
    <div className="db_container">
      <div className='db_container_intro'>
      <div className="db_container">
        <div className='db_container_intro'>
          <div className='db_continer_intro_card'>
            <div className="db_container_card1">
              <div class="card-header">
                <h3>Total de Riesgos</h3>
              </div>
                <div className='header-chart'>
                  <p class="total-number">300</p>
                  <div class="card-chart">
                    <AreaChart /> {/* Importamos el gráfico de área */}
                  </div>
                </div>
                <hr />
              <div class="card-footer">
                <p class="increment">
                  <span class="increment-icon">↑</span>
                  <span class="increment-value">+20%</span>
                  Incremento de Riesgos
                </p>
                
              </div>
            </div>

            <div className="db_container_card2">
              <div class="card-header">
                <h3>Total de Riesgos</h3>
                <p class="total-number">300</p>
              </div>
              <div class="card-chart">
                <AreaChart /> {/* Importamos el gráfico de área */}
              </div>
              <div class="card-footer">
                <p class="increment">
                  <span class="increment-icon">↓</span>
                  <span class="increment-value">-20%</span>
                  Incremento de Riesgos
                </p>
              </div>
            </div>

            <div className="db_container_card3">
              <div class="card-header">
                <h3>Total de Riesgos</h3>
                <p class="total-number">300</p>
              </div>
              <div class="card-chart">
                <AreaChart /> {/* Importamos el gráfico de área */}
              </div>
              <div class="card-footer">
                <p class="increment">
                  <span class="increment-icon">↑</span>
                  <span class="increment-value">+20%</span>
                  Incremento de Riesgos
                </p>
                
              </div>
            </div>
            <div className="db_container_card4">
              <div class="card-header">
                <h3>Total de Riesgos</h3>
                <p class="total-number">300</p>
              </div>
              <div class="card-chart">
                <AreaChart /> {/* Importamos el gráfico de área */}
              </div>
              <div class="card-footer">
                <p class="increment">
                  <span class="increment-icon">↑</span>
                  <span class="increment-value">+20%</span>
                  Incremento de Riesgos
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div className='db_container_intro_grafico'>
          <div className='db_container_intro_grafico_medium'>
          <DashboardChart />
          </div>
        </div>
        <div className='db_container_intro_graficos_finales'> 
          <div className='db_container_intro_graficos_finales_1'>
              <div className="riesgo-por-nivel-card">
                <h3 className="titulo-grafico">RIESGOS POR NIVEL</h3>
                <p className="total-riesgos">40</p>
                <p className="descripcion">TOTAL DE RIESGOS</p>
                <hr/>
                <div className='circulechart'>
                    <CirculeChart /> {/* Importamos el gráfico */}
                </div>
              </div>
          </div>
          <div className='db_container_intro_graficos_finales_2'>
                     <TrafficSourcesChart /> 
          </div>
        </div>
    </div>
  );
};

export default DashboardMain;
