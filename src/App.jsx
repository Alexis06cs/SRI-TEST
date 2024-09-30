import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/login/Login';
import Olvidaste from './components/auth/olvidaste/Olvidaste';
import Recuperar from './components/auth/recuperar/Recuperar';

// Importamos los componentes del dashboard
import DashboardLayout from './components/dashboard/layout/DashboardLayout';
import RiesgosUsuarios from './components/dashboard/pages/analisis-accesos/riesgos-usuarios/RiesgoUsuario';
import AccesosCriticos from './components/dashboard/pages/analisis-accesos/accesos-criticos/AccesosCriticos';
import RiesgoDeLinea from './components/dashboard/pages/analisis-accesos/riesgos-usuarios/riesgo-linea/RiesgoDelinea';
import RiesgoGeneral from './components/dashboard/pages/analisis-accesos/riesgos-usuarios/riesgo-general/RiesgoGeneral';
import Simulacion from './components/dashboard/pages/analisis-accesos/riesgos-usuarios/simulacion/Simulacion';
import AnalisisAccesos from './components/dashboard/pages/analisis-accesos/AnalisisAcceso';
import LicenciamientoFue from './components/dashboard/pages/Licenciamiento-FUE/LicenciamientoFUE';

import Administracion from './components/dashboard/pages/Administracion';
import DashboardMain from './components/dashboard/pages/DashboardMain';
import NivelUsuarios from './components/dashboard/pages/Licenciamiento-FUE/nivel-usuario/NivelUsuarios';
import LicenciaUsuarios from './components/dashboard/pages/Licenciamiento-FUE/nivel-usuario/licencia-usuarios/LicenciaUsuarios';
import RiesgoProcesoEmpresarial from './components/dashboard/pages/analisis-accesos/riesgos-usuarios/riesgo-linea/RiesgodeProcesoEmpresarial';
import RiesgoPorNivel from './components/dashboard/pages/analisis-accesos/riesgos-usuarios/riesgo-linea/RiesgoPorNivel';
import RiesgoEnElTiempo from './components/dashboard/pages/analisis-accesos/riesgos-usuarios/riesgo-linea/RiesgoEnElTiempo';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas de autenticación */}
        <Route path="/" element={<Login />} />
        <Route path="/olvidaste" element={<Olvidaste />} />
        <Route path="/recuperar" element={<Recuperar />} />
        
        {/* Rutas del dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Página principal del dashboard */}
          <Route index element={<DashboardMain />} />
          <Route path="analisis-accesos" element={<AnalisisAccesos />} />
          <Route path="analisis-accesos/riesgos-usuarios" element={<RiesgosUsuarios />} />
          
         
          <Route path="analisis-accesos/riesgos-usuarios/riesgo-linea" element={<RiesgoDeLinea />} />
          {/* Rutas para Riesgo de Proceso Empresarial */}
          <Route path="analisis-accesos/riesgos-usuarios/riesgo-linea/riesgo-proceso-empresarial" element={<RiesgoProcesoEmpresarial />} />
          <Route path="analisis-accesos/riesgos-usuarios/riesgo-linea/riesgo-por-nivel" element={<RiesgoPorNivel />} />
          <Route path="analisis-accesos/riesgos-usuarios/riesgo-linea/riesgo-en-el-tiempo" element={<RiesgoEnElTiempo />} />
          <Route path="analisis-accesos/riesgos-usuarios/riesgo-general" element={<RiesgoGeneral />} />
          <Route path="analisis-accesos/riesgos-usuarios/simulacion" element={<Simulacion />} />

          <Route path="analisis-accesos/accesos-criticos" element={<AccesosCriticos />} />

            {/* Licenciamiento  */}
          <Route path="licenciamiento-fue" element={<LicenciamientoFue />} />
          <Route path="licenciamiento-fue/nivel-usuarios" element={<NivelUsuarios />} />
            {/* Rutas de Nivel Usuarios */}
            <Route path="licenciamiento-fue/nivel-usuarios/licencia-usuarios" element={<LicenciaUsuarios />} />
          <Route path="licenciamiento-fue/nivel-usuarios/simulacion" element={<Simulacion />} />

          <Route path="administracion" element={<Administracion />} /> 
          {/* Agregar más rutas aquí si es necesario */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
