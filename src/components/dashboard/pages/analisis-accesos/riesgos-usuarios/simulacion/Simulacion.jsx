import React, { useState } from 'react';
import './Simulacion.css';

const Simulacion = () => {
    // Estado para manejar los filtros
    const [estadoUsuarios, setEstadoUsuarios] = useState({
        activo: true,
        inactivo: false,
    });
    const [critRiesgo, setCritRiesgo] = useState({
        alto: false,
        medio: false,
        bajo: false,
        todos: true,
    });

    // Función para manejar los cambios en los filtros
    const handleEstadoUsuariosChange = (e) => {
        setEstadoUsuarios({
            ...estadoUsuarios,
            [e.target.name]: e.target.checked,
        });
    };

    const handleCritRiesgoChange = (e) => {
        setCritRiesgo({
            ...critRiesgo,
            [e.target.name]: e.target.checked,
        });
    };

    return (
        <div className="simulacion-container">
            <h1>Usuarios</h1>
            <div className="input-group">
                <label htmlFor="usuarios">Usuarios:</label>
                <input type="text" id="usuarios" />
                <button className="buscar-btn">Buscar</button>
            </div>

            <div className="filtros-container">
                <div>
                    <label>Estado Usuarios:</label>
                    <input type="checkbox" name="activo" checked={estadoUsuarios.activo} onChange={handleEstadoUsuariosChange} /> Activo
                    <input type="checkbox" name="inactivo" checked={estadoUsuarios.inactivo} onChange={handleEstadoUsuariosChange} /> Inactivo
                </div>

                <div>
                    <label>Criticidad del Riesgo:</label>
                    <input type="checkbox" name="alto" checked={critRiesgo.alto} onChange={handleCritRiesgoChange} /> Alto
                    <input type="checkbox" name="medio" checked={critRiesgo.medio} onChange={handleCritRiesgoChange} /> Medio
                    <input type="checkbox" name="bajo" checked={critRiesgo.bajo} onChange={handleCritRiesgoChange} /> Bajo
                    <input type="checkbox" name="todos" checked={critRiesgo.todos} onChange={handleCritRiesgoChange} /> Todos
                </div>

                <div>
                    <label htmlFor="rol">Rol:</label>
                    <input type="text" id="rol" />
                    <button className="buscar-btn">Buscar</button>
                </div>

                <div>
                    <label htmlFor="transaccion">Transacción:</label>
                    <input type="text" id="transaccion" />
                    <button className="buscar-btn">Buscar</button>
                </div>
            </div>

            <h2>Modulo Usuario</h2>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Usuarios</th>
                            <th>Riesgo</th>
                            <th>Nivel de Riesgo</th>
                            <th>Descripción del Riesgo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ZP03</td>
                            <td>High</td>
                            <td>Crear factura de vendedor ficticio e iniciarles el pago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ZP16</td>
                            <td>High</td>
                            <td>Recibir o aceptar servicio e introducir pagos de cobertura</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ZP26</td>
                            <td>Medium</td>
                            <td>Introducir acuerdos de compra y la recepción del pago</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ZP29</td>
                            <td>Medium</td>
                            <td>Actualizar acuerdo de compra y crear facturas</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ZP30</td>
                            <td>High</td>
                            <td>Modificar datos maestros de servicio e introducir pago de cobertura</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ZP30</td>
                            <td>Medium</td>
                            <td>Autorizar un OC que contenga un producto</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Simulacion;
