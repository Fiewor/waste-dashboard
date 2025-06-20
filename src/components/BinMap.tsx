// src/components/BinMap.tsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { Bin } from "../types";

// Define custom icons
const createIcon = (status: string) =>
  new L.Icon({
    iconUrl:
      status === "normal"
        ? "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
        : status === "warning"
        ? "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
        : "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

export const BinMap: React.FC<{ bins: Bin[] }> = ({ bins }) => {
  const center: [number, number] = [6.5244, 3.3792];

  return (
    <div className="col-span-full h-[400px] rounded overflow-hidden shadow">
      <h2 className="text-xl font-bold mb-2">Bin Locations</h2>
      <MapContainer center={center} zoom={17} className="h-full w-full z-0">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {bins.map((bin) => (
          <Marker
            key={bin.id}
            position={[bin.location.lat, bin.location.lng]}
            icon={createIcon(bin.status)}
          >
            <Popup>
              <strong>{bin.location.name}</strong>
              <br />
              Fullness: {bin.fullness}%<br />
              Status: {bin.status}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
