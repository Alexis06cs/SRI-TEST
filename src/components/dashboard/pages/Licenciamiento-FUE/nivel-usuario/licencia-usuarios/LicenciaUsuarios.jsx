import React from 'react';
import './LicenciaUsuarios.css';

const LicenciaUsuarios = () => {
    return (
        <div className="licencia-usuarios-container">
            <div className="card">
                <h2>Vista General</h2>
                <table className="vista-general">
                    <thead>
                        <tr>
                            <th>Tipo Licencia</th>
                            <th>Cantidad Usuarios</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Advanced Use</td>
                            <td>1345</td>
                        </tr>
                        <tr>
                            <td>Core Use</td>
                            <td>1233</td>
                        </tr>
                        <tr>
                            <td>Self-Service Use</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="card">
                <h2>Vista Detallada</h2>
                <table className="vista-detallada">
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Nombre</th>
                            <th>Tipo Licencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Usuario 33</td>
                            <td>Xxxxx xxxxx</td>
                            <td>Advance Use</td>
                        </tr>
                        <tr>
                            <td>Usuario 45</td>
                            <td>Yyyyy yyyy</td>
                            <td>Advance Use</td>
                        </tr>
                        <tr>
                            <td>Usuario 56</td>
                            <td>Eeee eee</td>
                            <td>Advance Use</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LicenciaUsuarios;
