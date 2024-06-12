import React from "react";
import "./MapLocation.styles.css";

const MapLocation = () => {
  return (
    <div className="map-location">
      <h2>РАСПОЛОЖЕНИЕ Нашего Офиса</h2>
      <iframe
        src="https://yandex.ru/map-widget/v1/-/CCUHzQTTSD"
        width="600"
        height="450"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        title="Office Location"
      ></iframe>
    </div>
  );
};

export default MapLocation;
