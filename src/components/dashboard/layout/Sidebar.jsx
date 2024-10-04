import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../styles/Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


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
      <div className="sidebar__container">
        <div className="sidebar__menu">
          <ul className="sidebar__menu__list">

            {/* Análisis Accesos */}
            <li className="sidebar__element">
            <a className="sidebar__action" href="#" onClick={() => toggleMenuAndNavigate('analisisAccesos', '/dashboard/analisis-accesos')}>
              <i className="fas fa-house"></i> Análisis Accesos
              <i className={`fas fa-caret-${openMenus.analisisAccesos ? 'down' : 'right'}`}></i>
            </a>

              <div className={`sidebar__action__submenu ${openMenus.analisisAccesos ? 'sidebar__action__submenu--open' : ''}`}>
                {openMenus.analisisAccesos && (
                  <ul className="sidebar__submenu">
                    {/* Riesgos Usuarios */}
                    <li>
                      <a className="sidebar__action" href="#" onClick={() => toggleMenuAndNavigate('riesgosUsuarios', '/dashboard/analisis-accesos/riesgos-usuarios')}>
                        Riesgos Usuarios
                        <i className={`fa fa-caret-${openMenus.riesgosUsuarios ? 'down' : 'right'}`}></i>
                      </a>
                      <div className={`sidebar__action__submenu ${openMenus.riesgosUsuarios ? 'sidebar__action__submenu--open' : ''}`}>
                        {openMenus.riesgosUsuarios && (
                          <ul className="sidebar__submenu">
                            {/* Riesgo de Línea */}
                            <li>
                              <a className="sidebar__action"
                                href="#"
                                onClick={() => toggleMenuAndNavigate('riesgoLinea', '/dashboard/analisis-accesos/riesgos-usuarios/riesgo-linea')}
                              >
                                Riesgo de Línea
                                <i className={`fa fa-caret-${openMenus.riesgoLinea ? 'down' : 'right'}`}></i>
                              </a>
                              <div className={`sidebar__action__submenu ${openMenus.riesgoLinea ? 'sidebar__action__submenu--open' : ''}`}>
                                {openMenus.riesgoLinea && (
                                  <ul className="sidebar__submenu">
                                    <li className="sidebar__submenu__element">
                                      <Link className="sidebar__action" to="/dashboard/analisis-accesos/riesgos-usuarios/riesgo-linea/riesgo-proceso-empresarial">
                                        Riesgos por proceso empresarial
                                      </Link>
                                    </li>

                                    <li className="sidebar__submenu__element">
                                      <Link className="sidebar__action" to="/dashboard/analisis-accesos/riesgos-usuarios/riesgo-linea/riesgo-por-nivel">
                                        Riesgo por Nivel
                                      </Link>
                                    </li>
                                    <li className="sidebar__submenu__element">
                                      <Link className="sidebar__action" to="/dashboard/analisis-accesos/riesgos-usuarios/riesgo-linea/riesgo-en-el-tiempo">
                                        Riesgo en el Tiempo
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </div>
                            </li>

                            {/* Riesgo General */}
                            <li>
                              <a className="sidebar__action" href="#" onClick={() => toggleMenuAndNavigate('riesgoGeneral', '/dashboard/analisis-accesos/riesgos-usuarios/riesgo-general')}>
                                Riesgo General
                                <i className={`fa fa-caret-${openMenus.riesgoGeneral ? 'down' : 'right'}`}></i>
                              </a>
                              <div className={`sidebar__action__submenu ${openMenus.riesgoGeneral ? 'sidebar__action__submenu--open' : ''}`}>
                                {openMenus.riesgoGeneral && (
                                  <ul className="sidebar__submenu">
                                    <li>
                                      <Link className="sidebar__action" to="/dashboard/analisis-accesos/riesgos-usuarios/riesgo-general">
                                        Riesgo por Proceso Empresarial
                                      </Link>
                                    </li>
                                      <li>
                                        <Link className="sidebar__action" to="/dashboard/analisis-accesos/riesgos-usuarios/riesgo-por-nivel">
                                          Riesgo Por Nivel
                                        </Link>
                                      </li>
                                      <li>
                                        <Link className="sidebar__action" to="/dashboard/analisis-accesos/riesgos-usuarios/riesgo-en-el-tiempo">
                                          Riesgo en el Tiempo
                                        </Link>
                                      </li>
                                  </ul>
                                )}
                              </div>
                            </li>

                            {/* Simulación */}
                            <li>
                              <a className="sidebar__action" href="#" onClick={() => toggleMenuAndNavigate('Simulacion', '/dashboard/analisis-accesos/riesgos-usuarios/simulacion')}>
                                Simulación
                                <i className={`fa fa-caret-${openMenus.Simulacion ? 'down' : 'right'}`}></i>
                              </a>
                              <div className={`sidebar__action__submenu ${openMenus.Simulacion ? 'sidebar__action__submenu--open' : ''}`}>
                                {openMenus.Simulacion && (
                                  <ul className="sidebar__submenu">
                                    <li>
                                      <Link className="sidebar__action" to="/dashboard/analisis-accesos/riesgos-usuarios/simulacion">
                                        Simulación
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </div>
                            </li>
                          </ul>
                        )}
                      </div>
                    </li>

                  {/* Accesos Críticos */}
                      <li>
                        <a className="sidebar__action" href="#" onClick={() => toggleMenuAndNavigate('accesosCriticos', '/dashboard/analisis-accesos/accesos-criticos')}>
                          Accesos Críticos
                          <i className={`fa fa-caret-${openMenus.accesosCriticos ? 'down' : 'right'}`}></i>
                        </a>
                        <div className={`sidebar__action__submenu ${openMenus.accesosCriticos ? 'sidebar__action__submenu--open' : ''}`}>
                          {openMenus.accesosCriticos && (
                            <ul className="sidebar__submenu">
                              {/* Transacciones Críticas */}
                              <li>
                                <a className="sidebar__action" href="#" onClick={() => toggleMenuAndNavigate('transaccionesCriticas', '/dashboard/analisis-accesos/accesos-criticos/transacciones-criticas')}>
                                  Transacciones Críticas
                                  <i className={`fa fa-caret-${openMenus.transaccionesCriticas ? 'down' : 'right'}`}></i>
                                </a>
                                <div className={`sidebar__action__submenu ${openMenus.transaccionesCriticas ? 'sidebar__action__submenu--open' : ''}`}>
                                  {openMenus.transaccionesCriticas && (
                                    <ul className="submenu">
                                      <li>
                                        <Link className="sidebar__action" to="/dashboard/analisis-accesos/accesos-criticos/transacciones-criticas">
                                          Despliegue de Transacciones Críticas en Usuarios
                                        </Link>
                                      </li>
                                    </ul>
                                  )}
                                </div>
                              </li>

                              {/* Objetivos Críticos */}
                              <li>
                                <a className="sidebar__action" href="#" onClick={() => toggleMenuAndNavigate('objetivosCriticos', '/dashboard/analisis-accesos/accesos-criticos/objetos-criticos')}>
                                  Objetivos Críticos
                                  <i className={`fa fa-caret-${openMenus.objetivosCriticos ? 'down' : 'right'}`}></i>
                                </a>
                                <div className={`sidebar__action__submenu ${openMenus.objetivosCriticos ? 'sidebar__action__submenu--open' : ''}`}>
                                  {openMenus.objetivosCriticos && (
                                    <ul className="sidebar__submenu">
                                      <li>
                                        <Link className="sidebar__action" to="/dashboard/analisis-accesos/accesos-criticos/objetos-criticos">
                                          Despliegue de Objetos Críticos en Usuarios
                                        </Link>
                                      </li>
                                    </ul>
                                  )}
                                </div>
                              </li>
                            </ul>
                          )}
                        </div>
                      </li>


                  </ul>
                )}
              </div>
            </li>

            {/* Licenciamiento (FUE) */}
            <li className="sidebar__element">
              <a className="sidebar__action" href="#" onClick={() => toggleMenuAndNavigate('licenciamiento', '/dashboard/licenciamiento-fue')}>
                <i className="fa-solid fa-database"></i> Licenciamiento (FUE)
                <i className={`fa fa-caret-${openMenus.licenciamiento ? 'down' : 'right'}`}></i>
              </a>
              <div className={`sidebar__action__submenu ${openMenus.licenciamiento ? 'sidebar__action__submenu--open' : ''}`}>
                {openMenus.licenciamiento && (
                  <ul className="sidebar__submenu">
                    <li>
                      <a className="sidebar__action" href="#" onClick={() => toggleMenuAndNavigate('nivelUsuarios', '/dashboard/licenciamiento-fue/nivel-usuarios')}>
                        Nivel Usuarios
                        <i className={`fa fa-caret-${openMenus.nivelUsuarios ? 'down' : 'right'}`}></i>
                      </a>
                      <div className={`sidebar__action__submenu ${openMenus.nivelUsuarios ? 'sidebar__action__submenu--open' : ''}`}>
                        {openMenus.nivelUsuarios && (
                          <ul className="sidebar__submenu">
                            <li>
                              <Link className="sidebar__action" to="/dashboard/licenciamiento-fue/nivel-usuarios/licencia-usuarios">
                                Licencia Usuarios
                              </Link>
                            </li>
                            <li>
                              <Link className="sidebar__action" to="/dashboard/licenciamiento-fue/nivel-usuarios/simulacion">
                                Simulación
                              </Link>
                            </li>
                          </ul>
                        )}
                      </div>
                    </li>
                  </ul>
                )}
              </div>
            </li>


            {/* Administración */}
              <li className="sidebar__element">
                <a className="sidebar__action" href="#" onClick={() => toggleMenuAndNavigate('administracion', '/dashboard/administracion')}>
                  <i className="fa-solid fa-sliders"></i> Administración
                  <i className={`fa fa-caret-${openMenus.administracion ? 'down' : 'right'}`}></i>
                </a>
                <div className={`sidebar__action__submenu ${openMenus.administracion ? 'sidebar__action__submenu--open' : ''}`}>
                  {openMenus.administracion && (
                    <ul className="sidebar__submenu">
                      {/* Mantenedor con submenús */}
                      <li>
                        <a className="sidebar__action" href="#" onClick={() => toggleMenuAndNavigate('mantenedor', '/dashboard/administracion/mantenedor')}>
                          Mantenedor
                          <i className={`fa fa-caret-${openMenus.mantenedor ? 'down' : 'right'}`}></i>
                        </a>
                        <div className={`sidebar__action__submenu ${openMenus.mantenedor ? 'sidebar__action__submenu--open' : ''}`}>
                          {openMenus.mantenedor && (
                            <ul className="sidebar__submenu">
                              <li>
                                <Link className="sidebar__action" to="/dashboard/administracion/mantenedor/empresa">
                                  Mantenedor de Empresa
                                </Link>
                              </li>
                              <li>
                                <Link className="sidebar__action" to="/dashboard/administracion/mantenedor/usuario">
                                  Mantenedor Usuario
                                </Link>
                              </li>
                            </ul>
                          )}
                        </div>
                      </li>
                      <li>
                        <a className="sidebar__action" href="#" onClick={() => toggleMenuAndNavigate('reporteSOD', '/dashboard/administracion/reporte-sod')}>
                          ReporteSOD
                          <i className={`fa fa-caret-${openMenus.reporteSOD ? 'down' : 'right'}`}></i>
                        </a>
                        <div className={`sidebar__action__submenu ${openMenus.reporteSOD ? 'sidebar__action__submenu--open' : ''}`}>
                          {openMenus.reporteSOD && (
                            <ul className="sidebar__submenu">
                              <li>
                                <Link className="sidebar__action" to="/dashboard/administracion/reporte-sod/carga-datos-riesgo">
                                  Carga de Datos de Riesgo
                                </Link>
                              </li>
                              <li>
                                <Link className="sidebar__action" to="/dashboard/administracion/reporte-sod/mantenedor-riesgos">
                                  Mantenedor de Riesgos
                                </Link>
                              </li>
                            </ul>
                          )}
                        </div>
                      </li>

                      <li>
                          <a className="sidebar__action" href="#" onClick={() => toggleMenuAndNavigate('cargaFUE', '/dashboard/administracion/carga-fue')}>
                            Carga FUE
                            <i className={`fa fa-caret-${openMenus.cargaFUE ? 'down' : 'right'}`}></i>
                          </a>
                          <div className={`sidebar__action__submenu ${openMenus.cargaFUE ? 'sidebar__action__submenu--open' : ''}`}>
                            {openMenus.cargaFUE && (
                              <ul className="sidebar__submenu">
                                <li>
                                  <Link className="sidebar__action" to="/dashboard/administracion/carga-fue/mantenedor-ruleset">
                                    Mantenedor de Ruleset
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </div>
                        </li>

                        <li>
                          <a className="sidebar__action" href="#" onClick={() => toggleMenuAndNavigate('accesosCriticos', '/dashboard/administracion/accesos-criticos')}>
                            Accesos Críticos
                            <i className={`fa fa-caret-${openMenus.accesosCriticos ? 'down' : 'right'}`}></i>
                          </a>
                          <div className={`sidebar__action__submenu ${openMenus.accesosCriticos ? 'sidebar__action__submenu--open' : ''}`}>
                            {openMenus.accesosCriticos && (
                              <ul className="sidebar__submenu">
                                <li>
                                  <Link className="sidebar__action" to="/dashboard/administracion/accesos-criticos/carga-transacciones-criticas">
                                    Carga de Transacciones Críticas
                                  </Link>
                                </li>
                                <li>
                                  <Link className="sidebar__action" to="/dashboard/administracion/accesos-criticos/carga-objetos-criticos">
                                    Carga de Objetos Críticos
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </div>
                        </li>

                      <li>
                        <Link className="sidebar__action" to="/dashboard/administracion/log">Log</Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>

          </ul>
        </div>
      <button className="logout">
        <Link to="/">Salir</Link>
      </button>
      </div>
    </aside>
  );
};

export default Sidebar;
