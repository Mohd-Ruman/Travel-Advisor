import { latLng } from 'leaflet';
import React from 'react'
import { Marker, Popup } from 'react-leaflet';

const PlaceComponent = ( { name, latitude, longitude } ) => {

  console.log(name);
  console.log(latitude);
  console.log(longitude);

  
  // Validate latitude and longitude
  if (isNaN(latitude) || isNaN(longitude)) {
    console.error('Invalid latitude or longitude');
    return null; // Return null or handle the error appropriately
  }

  return (
    <Marker position={[latitude, longitude]}>
      <Popup>
        <div>
          <h2>{name}</h2>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      </Popup>
    </Marker>

  )
}

export default PlaceComponent