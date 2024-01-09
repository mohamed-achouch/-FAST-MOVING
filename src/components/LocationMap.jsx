// LocationMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = ({ location }) => {
  const { lat, lon, name } = location;

  return (
    <MapContainer center={[lat, lon]} zoom={13} style={{ height: '582px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lon]}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;