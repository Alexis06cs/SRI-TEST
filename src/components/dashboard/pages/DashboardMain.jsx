import React from 'react';
import Card from '../../cards/Card'; // Asumo que tienes un componente reutilizable para las cards
import '../../../styles/DashboardMain.css'; // Asegúrate de tener el CSS correcto

const DashboardMain = () => {
  return (
    <div className="dashboard-main">
      <div className="card-container">
        <Card title="Análisis Accesos" imageSrc="/imagenes/img_card.png" />
        <Card title="Licenciamiento (FUE)" imageSrc="/imagenes/img_card.png" />
        <Card title="Administración" imageSrc="/imagenes/img_card.png" />
      </div>
    </div>
  );
};

export default DashboardMain;
