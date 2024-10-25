import React from 'react';
import './RiesgodeProcesoEmpresarial.css';
import DashboardChart from '../../../../../charts/dashboard/DashboardChart';

const RiesgoProcesoEmpresarial = () => {
  return (
    <div className='rp_container'>
      <div className='rp_container_zero'>
        <div className='rp_container_zero_search_riesgos'>
            <h4>Busqueda de Riesgo</h4>
              <div className='rp_container_zero_search_riesgos_file_one'>
                <span>Usuarios: </span>
                <input type="text" />
                <button className='btn_rp_buscar'>Buscar</button>
              </div>
              <div className='rp_container_zero_search_riesgos_estado_usuarios'>
                <span className='rp_span_estado'>Estado Usuarios: </span>
                <input type="checkbox" id="myCheckbox" />
                <span htmlFor="myCheckbox">Activo </span>
                <input type="checkbox" id="myCheckbox" />
                <span htmlFor="myCheckbox">Inactivo </span>
              </div >
              <div className='rp_container_zero_search_tiempo'>
                <span className='rp_span_tiempo'>Tiempo: </span>
                <input type="checkbox" id="myCheckbox" />
                <span htmlFor="myCheckbox">En Linea: </span>
                <input type="date" />
                <span>Fecha</span>
              </div>
              <div className='rp_container_zero_search_criticidad'>
                <span className='rp_span_criticidad'>Criticidad de Riesgo: </span>
                <input type="checkbox" id="myCheckbox" />
                <span htmlFor="myCheckbox">Alto </span>
                <input type="checkbox" id="myCheckbox" />
                <span htmlFor="myCheckbox">Medio </span>
                <input type="checkbox" id="myCheckbox" />
                <span htmlFor="myCheckbox">Bajo </span>
                <input type="checkbox" id="myCheckbox" />
                <span htmlFor="myCheckbox">Todos </span>   
              </div>
              <div className='rp_container_zero_search_tipos'>
                <span className='rp_container_tipos'>Tipos de Riesgos: </span>
                <input type="checkbox" id="myCheckbox" />
                <span htmlFor="myCheckbox">SOD </span>
                <input type="checkbox" id="myCheckbox" />
                <span htmlFor="myCheckbox">Accesos Criticos </span>
              </div>
              <div className='rp_container_zero_search_simulacion'>
                <span className='rp_container_simulacion'>Simulacion</span>
                <input type="checkbox" id="myCheckbox" />
                <span htmlFor="myCheckbox">ON</span>
                <input type="checkbox" id="myCheckbox" />
                <span htmlFor="myCheckbox">OFF </span>
              </div>
        </div>
        <div className='rp_container_zero_card_2'>
          <div className='rp_container_zero_card2_simulacion'>
            <h4>Simulación Asignación a usuarios</h4>
            <div className='rp_container_zero_card2_simulacion_searchs'>
                  <div className='rp_container_zero_card2_simulacion_file1'>
                    <span>Rol:</span>
                    <input type="text" />
                    <button className='rp_card2_file1'>Buscar</button>
                  </div>  
                  <div className='rp_container_zero_card2_simulacion_file2'>
                    <span>Transacciones:</span>
                    <input type="text" />
                    <button className='rp_card2_file2'>Buscar</button>
                  </div>
            </div>
          </div>
          <div className='rp_container_zero_card2_grafico'>
              <h4>Grafico:</h4>
              <div className="grid">
                <div className="item">
                  <span>Proceso Empresarial</span>
                  <input type="checkbox" />
                </div>
                <div className="item">
                  <span>Usuarios con más Riesgos</span>
                  <input type="checkbox" />
                </div>
                <div className="item">
                  <span>Nivel de Riesgo</span>
                  <input type="checkbox" />
                </div>
                <div className="item">
                  <span>Riesgos más recurrentes</span>
                  <input type="checkbox" />
                </div>
                <div className="item">
                  <span>Riesgo en el Tiempo</span>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className='rp_container_one'>
        <div className='rp_container_one_main'>
          <div><h3>RIESGO POR PROCESO EMPRESARIAL</h3></div>
          <div className="rp_controls">
            <label htmlFor="fecha_riesgo">Fecha de Riesgo: </label>
            <select name="date" id="date_rp">
              <option>Selecciona</option>
            </select>
            <button className='rp_search'>Buscar</button>
            <button className="rp_export">
              <i className="fas fa-download"></i> {/* Icono de descargar */}
            </button>
          </div>
        </div>
        <div className='rp_container_graphic'>
          <DashboardChart/>
        </div>
      </div>
      <div className='rp_container_two'>
          <div className="tabla_header">
            <h3>DETALLE PROCESO EMPRESARIAL</h3>
            <button className="export_excel">
              Exportar como Excel
            </button>
          </div>
          <div className='tabla_contenedor'>
              <table className="details_table">
                <thead>
                  <tr>
                    <th>Proceso</th>
                    <th>Riesgo</th>
                    <th>Porcentaje</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Basis</td>
                    <td>804</td>
                    <td>15.54%</td>
                    <td><button className="details_button">Detalles</button></td>
                  </tr>
                  <tr>
                    <td>Ciclo de compras</td>
                    <td>1,902</td>
                    <td>36.76%</td>
                    <td><button className="details_button">Detalles</button></td>
                  </tr>
                  <tr>
                    <td>Finanzas</td>
                    <td>1,378</td>
                    <td>26.63%</td>
                    <td><button className="details_button">Detalles</button></td>
                  </tr>
                  <tr>
                    <td>Gestión de materiales</td>
                    <td>120</td>
                    <td>2.32%</td>
                    <td><button className="details_button">Detalles</button></td>
                  </tr>
                  <tr>
                    <td>RRHH y nómina</td>
                    <td>10</td>
                    <td>0.19%</td>
                    <td><button className="details_button">Detalles</button></td>
                  </tr>
                  <tr>
                    <td>Ventas</td>
                    <td>960</td>
                    <td>18.55%</td>
                    <td><button className="details_button">Detalles</button></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Total</td>
                    <td>5,174</td>
                    <td>100.00%</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
          </div>

        </div>

    </div>
  );
};

export default RiesgoProcesoEmpresarial;
