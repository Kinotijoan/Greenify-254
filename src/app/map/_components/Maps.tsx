import React from "react";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Maps = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "400px", width: "600px", position: "relative" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <CircleMarker
          center={[51.505, -0.09]}
          pathOptions={{ color: "red" }}
          radius={20}
          fillOpacity={0.5}
          fillColor="red"
        >
          <Popup>
            <h1>Popup in CircleMarker</h1>
          </Popup>
        </CircleMarker>
      </MapContainer>
    </div>
  );
};

export default Maps;
