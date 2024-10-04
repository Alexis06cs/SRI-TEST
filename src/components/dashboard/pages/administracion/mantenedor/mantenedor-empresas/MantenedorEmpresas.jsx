import React from 'react';
import './MantenedorEmpresas.css';  // Asegúrate de crear este archivo para los estilos

const MantenedorEmpresas = () => {
  // Datos ficticios para las empresas
  const empresas = [
    { id: 1, nombre: 'Compass', logo: '/imagenes/compass-logo.jpg' },
    { id: 2, nombre: 'Fashionspark', logo: '/imagenes/fashionspark-logo.png' },
    { id: 3, nombre: 'Blumar', logo: '/imagenes/compass-logo.jpg' },
    { id: 4, nombre: 'Compass', logo: '/imagenes/fashionspark-logo.png' },
    { id: 5, nombre: 'Fashionspark', logo: '/imagenes/compass-logo.jpg' },
    { id: 6, nombre: 'Blumar', logo: '/imagenes/fashionspark-logo.png' },
  ];

  return (
    <div className="me_container"> 
        <div className="empresa-container">
        <h1>Lista de Empresa</h1>
        <div className="empresa-header">
            <button className="btn-agregar">+ Agregar usuario</button>
        </div>

        <table className="empresa-table">
            <thead>
            <tr>
                <th>Logo Imagen</th>
                <th>Nombre</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {empresas.map((empresa) => (
                <tr key={empresa.id}>
                <td>
                    <img src={empresa.logo} alt={empresa.nombre} className="empresa-logo" />
                </td>
                <td>{empresa.nombre}</td>
                <td>
                    <button className="btn-editar">Editar</button>
                    <button className="btn-eliminar">Eliminar</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>    
  );
};

export default MantenedorEmpresas;
