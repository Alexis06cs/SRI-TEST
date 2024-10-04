import React from 'react';
import './MantenedorRiesgos.css'; // Asegúrate de crear este archivo CSS

const MantenedorRiesgos = () => {
  // Datos ficticios para la tabla de riesgos
  const riesgos = [
    { id: 1, nombre: 'SALL', descripcion: 'SAP ALL', procesoEmpresarial: 'Todos' },
    { id: 2, nombre: 'ZB01', descripcion: 'SAP New', procesoEmpresarial: 'Todos' },
    { id: 3, nombre: 'ZF29', descripcion: 'Desarrollo básico y gestión de sistemas', procesoEmpresarial: 'Basis' },
    { id: 4, nombre: 'ZB01', descripcion: 'Utilidades básicas y gestión', procesoEmpresarial: 'Finanzas' },
    { id: 5, nombre: 'ZF29', descripcion: 'Crear y realizar transporte', procesoEmpresarial: 'RRHH y nomina' },
    { id: 6, nombre: 'ZF29', descripcion: 'Cruzar datos', procesoEmpresarial: 'Gestión de Materiales' },
    { id: 7, nombre: 'ZF29', descripcion: 'Manipular reports', procesoEmpresarial: 'Ciclo de compras' },
  ];

  return ( 
    <di className="mr_container"> 
        <div className="mantenedor-riesgos-container">
        <h1>Listado de Riesgos</h1>
        <table className="riesgos-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Proceso Empresarial</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {riesgos.map((riesgo) => (
              <tr key={riesgo.id}>
                <td>{riesgo.nombre}</td>
                <td>{riesgo.descripcion}</td>
                <td>{riesgo.procesoEmpresarial}</td>
                <td>
                  <button className="btn-editar">Editar</button>
                  <button className="btn-eliminar">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </di>
      
  );
};

export default MantenedorRiesgos;
