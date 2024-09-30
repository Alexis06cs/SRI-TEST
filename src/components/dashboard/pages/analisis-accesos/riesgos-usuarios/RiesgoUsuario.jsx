import React from 'react';
import '../../../../../styles/RiesgoUsuario.css';  // Archivo CSS para esta página
import Card from '../../../../cards/Card'; // Importa el componente Card

const RiesgosUsuarios = () => {
  return (
    <div className="page-content">
      <h1>Riesgos Usuarios</h1>
      <div className="cards-container">
        <Card 
          title="Riesgos en línea" 
          imageSrc="/imagenes/img_card.png" 
          buttonText="Visualizar" 
        />
        <Card 
          title="Riesgos General" 
          imageSrc="/imagenes/img_card.png" 
          buttonText="Visualizar" 
        />
        <Card 
          title="Simulación" 
          imageSrc="/imagenes/img_card.png" 
          buttonText="Visualizar" 
        />
      </div>
    </div>
  );
};

export default RiesgosUsuarios;
