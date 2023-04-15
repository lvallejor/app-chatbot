import React, { useState } from "react";
import "./WelcomePopup.css";

function WelcomePopup() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={showPopup ? "popup-container" : "hidden"}>
      <div className="popup-content">
        <h2>Hola soy tu Asistente virtual!</h2>
        <p>
          Estoy entrenado con Inteligencia Artificial, por ello para serte de
          mayor utilidad debes ser claro en tu prompt o pregunta, mientras mas
          claras y especificas sean tus instrucciones mas eficiente sere. Justo
          debajo de tu respuesta te dajare una imagen referencial a tu
          solicitud.
        </p>
        <h3>Bienvenid@!</h3>
        <footer>
          <p>&copy; 2023 Luis Vallejo</p>
        </footer>
        <button onClick={handleClosePopup}>Cerrar</button>
      </div>
    </div>
  );
}

export default WelcomePopup;
