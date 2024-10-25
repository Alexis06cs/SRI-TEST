import React from 'react';
import './Login.css';  // Importar el archivo CSS

const Login = () => {
  return (
    <div className="container">
      <div className="image-section">
        <img src="./imagenes/seguridad_sri.jpg" alt="portada" />
      </div>
      <div className="login-section">
        <div className="logo">
          <img src="./imagenes/logo_sri.png" alt="logo_sri" />
        </div>
        <h2>¡Te damos la Bienvenida!</h2>
        <p>Por favor ingrese sus datos</p>
        <form>
          <label htmlFor="email">Usuario</label>
          <input type="email" id="email" name="email" placeholder="cpsoluciones" />
          
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="********" />
          
          <div className="options">
            <label>
              <input type="checkbox" name="remember" /> Recuerdame
            </label>
            <a href="/olvidaste">Olvidaste tu contraseña</a>
          </div>
          
          <button className='btn_login' type="submit">
            Iniciar Sesión
          </button>
          
          <p className="signup-link">
            ¿No tienes una cuenta?<a href="#"> Crear cuenta</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
