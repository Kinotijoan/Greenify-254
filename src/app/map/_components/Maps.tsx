
import React, { useEffect, useState } from "react";
import { Marker, MapContainer, Popup, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { Company } from "@/lib/types/Types";
import { Radius } from "lucide-react";

const Maps = () => {
  const[companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchCompanies = axios.get("http://localhost:3000/api/companies").then((response) => {
      setCompanies(response.data);
      console.log(response.data);
    });
    fetchCompanies;

    if (!companies) {
      console.log("No companies");
    }
    if (companies) {
      console.log(companies);
    }
  }, []);


  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[1.2921, 36.8219]}
        zoom={13}
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
          console.log(company.latitude, company.longitude);
          if (!isNaN(latitude) && !isNaN(longitude)) {
            return (
              <CircleMarker
                key={company.wasteFacilityId}
                center={[latitude, longitude]}
                pathOptions={{ color: "red" }}
                radius={20}
                fillOpacity={0.5}
                fillColor="red"
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
