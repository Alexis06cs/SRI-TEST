import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../styles/Sidebar.css';


const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    analisisAccesos: false,
    riesgosUsuarios: false,
    riesgoLinea: false,
    riesgoGeneral: false,
    accesosCriticos: false,
    licenciamiento: false,
    nivelUsuarios: false,
    administracion: false,
    Simulacion: false,
    RiesgoDeLinea: false,
  });

  const navigate = useNavigate(); // Hook para redireccionar

  const toggleMenuAndNavigate = (menu, route) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
    navigate(route); // Navega a la ruta deseada
  };

  return (
    <aside className="sidebar">
      <nav className="menu">
        <ul>
          {/* Análisis Accesos */}
          <li>
            <a href="#" onClick={() => toggleMenuAndNavigate('analisisAccesos', '/dashboard/analisis-accesos')}>
              <i className="fa-solid fa-house"></i> Análisis Accesos
              <i className={`fa fa-caret-${openMenus.analisisAccesos ? 'down' : 'right'}`}></i>
            </a>
            {openMenus.analisisAccesos && (
              <ul className="submenu">
                {/* Riesgos Usuarios */}
                <li>
                  <a href="#" onClick={() => toggleMenuAndNavigate('riesgosUsuarios', '/dashboard/analisis-accesos/riesgos-usuarios')}>
                    Riesgos Usuarios
                    <i className={`fa fa-caret-${openMenus.riesgosUsuarios ? 'down' : 'right'}`}></i>
                  </a>
                  {openMenus.riesgosUsuarios && (
                    <ul className="submenu">
                      {/* Riesgo de Línea */}
                      <li>
                        <a
                          href="#"
                          onClick={() => toggleMenuAndNavigate('riesgoLinea', '/dashboard/analisis-accesos/riesgos-usuarios/riesgo-linea')}
                        >
                          Riesgo de Línea
                          <i className={`fa fa-caret-${openMenus.riesgoLinea ? 'down' : 'right'}`}></i>
                        </a>
                        {openMenus.riesgoLinea && (
                          <ul className="submenu">
                            <li>
                              <Link to="/dashboard/analisis-accesos/riesgos-usuarios/riesgo-linea/riesgo-proceso-empresarial">
                                Riesgos por proceso empresarial
                              </Link>
                            </li>

                            <li>
                              <Link to="/dashboard/analisis-accesos/riesgos-usuarios/riesgo-linea/riesgo-por-nivel">
                                Riesgo por Nivel
                              </Link>
                            </li>
                            <li>
                              <Link to="/dashboard/analisis-accesos/riesgos-usuarios/riesgo-linea/riesgo-en-el-tiempo">
                                Riesgo en el Tiempo
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>

                      {/* Riesgo General */}
                      <li>
                        <a href="#" onClick={() => toggleMenuAndNavigate('riesgoGeneral', '/dashboard/analisis-accesos/riesgos-usuarios/riesgo-general')}>
                          Riesgo General
                          <i className={`fa fa-caret-${openMenus.riesgoGeneral ? 'down' : 'right'}`}></i>
                        </a>
                        {openMenus.riesgoGeneral && (
                          <ul className="submenu">
                            <li>
                              <Link to="/dashboard/analisis-accesos/riesgos-usuarios/riesgo-general">
                                Riesgo General
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>

                      {/* Simulación */}
                      <li>
                        <a href="#" onClick={() => toggleMenuAndNavigate('Simulacion', '/dashboard/analisis-accesos/riesgos-usuarios/simulacion')}>
                          Simulación
                          <i className={`fa fa-caret-${openMenus.Simulacion ? 'down' : 'right'}`}></i>
                        </a>
                        {openMenus.Simulacion && (
                          <ul className="submenu">
                            <li>
                              <Link to="/dashboard/analisis-accesos/riesgos-usuarios/simulacion">
                                Simulación
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>

              {/* Accesos Críticos */}
                  <li>
                    <a href="#" onClick={() => toggleMenuAndNavigate('accesosCriticos', '/dashboard/analisis-accesos/accesos-criticos')}>
                      Accesos Críticos
                      <i className={`fa fa-caret-${openMenus.accesosCriticos ? 'down' : 'right'}`}></i>
                    </a>
                    {openMenus.accesosCriticos && (
                      <ul className="submenu">
                        {/* Transacciones Críticas */}
                        <li>
                          <a href="#" onClick={() => toggleMenuAndNavigate('transaccionesCriticas', '/dashboard/analisis-accesos/accesos-criticos/transacciones-criticas')}>
                            Transacciones Críticas
                            <i className={`fa fa-caret-${openMenus.transaccionesCriticas ? 'down' : 'right'}`}></i>
                          </a>
                          {openMenus.transaccionesCriticas && (
                            <ul className="submenu">
                              <li>
                                <Link to="/dashboard/analisis-accesos/accesos-criticos/transacciones-criticas">
                                  Despliegue de Transacciones Críticas en Usuarios
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>

                        {/* Objetivos Críticos */}
                        <li>
                          <a href="#" onClick={() => toggleMenuAndNavigate('objetivosCriticos', '/dashboard/analisis-accesos/accesos-criticos/objetos-criticos')}>
                            Objetivos Críticos
                            <i className={`fa fa-caret-${openMenus.objetivosCriticos ? 'down' : 'right'}`}></i>
                          </a>
                          {openMenus.objetivosCriticos && (
                            <ul className="submenu">
                              <li>
                                <Link to="/dashboard/analisis-accesos/accesos-criticos/objetos-criticos">
                                  Despliegue de Objetos Críticos en Usuarios
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    )}
                  </li>


              </ul>
            )}
          </li>

            {/* Licenciamiento (FUE) */}
            <li>
              <a href="#" onClick={() => toggleMenuAndNavigate('licenciamiento', '/dashboard/licenciamiento-fue')}>
                <i className="fa-solid fa-database"></i> Licenciamiento (FUE)
                <i className={`fa fa-caret-${openMenus.licenciamiento ? 'down' : 'right'}`}></i>
              </a>
              {openMenus.licenciamiento && (
                <ul className="submenu">
                  <li>
                    <a href="#" onClick={() => toggleMenuAndNavigate('nivelUsuarios', '/dashboard/licenciamiento-fue/nivel-usuarios')}>
                      Nivel Usuarios
                      <i className={`fa fa-caret-${openMenus.nivelUsuarios ? 'down' : 'right'}`}></i>
                    </a>
                    {openMenus.nivelUsuarios && (
                      <ul className="submenu">
                        <li>
                          <Link to="/dashboard/licenciamiento-fue/nivel-usuarios/licencia-usuarios">
                            Licencia Usuarios
                          </Link>
                        </li>
                        <li>
                          <Link to="/dashboard/licenciamiento-fue/nivel-usuarios/simulacion">
                            Simulación
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>


          {/* Administración */}
          <li>
            <a href="#" onClick={() => toggleMenuAndNavigate('administracion', '/dashboard/administracion')}>
              <i className="fa-solid fa-sliders"></i> Administración
              <i className={`fa fa-caret-${openMenus.administracion ? 'down' : 'right'}`}></i>
            </a>
            {openMenus.administracion && (
              <ul className="submenu">
                <li>
                  <Link to="/dashboard/administracion/mantenedor">Mantenedor</Link>
                </li>
                <li>
                  <Link to="/dashboard/administracion/reportes-sod">Reportes SOD</Link>
                </li>
                <li>
                  <Link to="/dashboard/administracion/carga-fue">Carga FUE</Link>
                </li>
                <li>
                  <Link to="/dashboard/administracion/accesos-criticos">Accesos Críticos</Link>
                </li>
                <li>
                  <Link to="/dashboard/administracion/log">Log</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <button className="logout">
        <Link to="/">Salir</Link>
      </button>
    </aside>
  );
};

export default Sidebar;
