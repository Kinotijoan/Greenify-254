import React, { useEffect, useState } from "react";
import {
  Marker,
  MapContainer,
  Popup,
  TileLayer,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";
import "leaflet-routing-machine";
import { Company } from "@/lib/types/Types";

const Maps = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  
  const [routingControl, setRoutingControl] =
    // @ts-ignore
    useState<L.Routing.Control | null>(null);

  useEffect(() => {
    // Fetch user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      });
    }

    // Fetch companies
    axios.get("http://localhost:3000/api/companies").then((response) => {
      setCompanies(response.data);
    });
  }, []);

  const handleClick = (latitude: number, longitude: number, map: L.Map) => {
    // Remove the previous route if it exists
    if (routingControl) {
      routingControl.remove();
    }

    if (userLocation) {
      // Create a new routing control
      // @ts-ignore
      const newRoutingControl = L.Routing.control({
        waypoints: [
          L.latLng(userLocation[0], userLocation[1]),
          L.latLng(latitude, longitude),
        ],
        lineOptions: {
          styles: [{ color: "blue", weight: 2 }],
          extendToWaypoints: true,
          missingRouteTolerance: 100,
        },
        show: true,
        routeWhileDragging: true,
      }).addTo(map);

      // Set the new routing control in state
      setRoutingControl(newRoutingControl);
    } else {
      alert("Could not retrieve user location.");
    }
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[1.2921, 36.8219]}
        zoom={9}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {companies.map((company) => {
          let latitude = parseFloat(
            String(company.latitude).replace(/[^\d.-]/g, "")
          );
          let longitude = parseFloat(
            String(company.longitude).replace(/[^\d.-]/g, "")
          );

          if (!isNaN(latitude) && !isNaN(longitude)) {
            return (
              <CircleMarker
                key={company.wasteFacilityId}
                center={[latitude, longitude]}
                pathOptions={{ color: "red" }}
                radius={10}
                fillOpacity={0.5}
                fillColor="red"
                eventHandlers={{
                  click: (e) => handleClick(latitude, longitude, e.target._map),
                }}
              >
                <Popup>
                  <h1>{company.name}</h1>
                  <p>{company.address}</p>
                  <p>{company.email}</p>
                </Popup>
              </CircleMarker>
            );
          }
        })}
      </MapContainer>
    </div>
  );
};

export default Maps;
