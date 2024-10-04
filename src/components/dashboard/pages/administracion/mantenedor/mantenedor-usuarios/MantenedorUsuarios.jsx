import React from 'react';
import './MantenedorUsuarios.css'; // Asegúrate de crear este archivo para los estilos

const MantenedorUsuarios = () => {
  // Datos ficticios para los usuarios
  const usuarios = [
    { id: 1, username: 'demo', administrador: 'SI', permisos: 'Reportes Usuarios, Parámetros de Seguridad', empresa: 'Minuto verde' },
    { id: 2, username: 'rsoto', administrador: 'NO', permisos: '-', empresa: 'Fashion_park' },
    { id: 3, username: 'sgarcia', administrador: 'SI', permisos: 'Reportes SOD, Accesos Críticos', empresa: 'Compass Group' },
    { id: 4, username: 'fpark', administrador: 'SI', permisos: 'Reportes SOD, Accesos Críticos', empresa: 'Cliente de prueba' },
    { id: 5, username: 'sgarcia', administrador: 'SI', permisos: 'Reportes SOD, Accesos Críticos', empresa: 'Cliente' },
    { id: 6, username: 'rsoto', administrador: 'NO', permisos: '-', empresa: 'Cliente de Prueba' },
    { id: 7, username: 'demo', administrador: 'NO', permisos: '-', empresa: 'Minuto verde' },
  ];

  return (
    <div className="mu_container">
        <div className="usuarios-container">
        <h1>Listado de usuarios</h1>
        <div className="usuarios-header">
            <button className="btn-agregar">+ Agregar usuario</button>
        </div>

        <table className="usuarios-table">
            <thead>
            <tr>
                <th>Username</th>
                <th>Administrador</th>
                <th>Permisos carga masiva</th>
                <th>Empresa</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                <td>{usuario.username}</td>
                <td>{usuario.administrador}</td>
                <td>{usuario.permisos}</td>
                <td>{usuario.empresa}</td>
                <td>
                    <button className="btn-cambiar">Cambiar contraseña</button>
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

export default MantenedorUsuarios;
