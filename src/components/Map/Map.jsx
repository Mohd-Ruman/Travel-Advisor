import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Paper, Typography, useMediaQuery} from '@material-ui/core'
import { LocationOnOutlined } from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';
import { latLng } from 'leaflet';

import PlaceComponent from './PlaceComponent';

const Map = ( { setCoordinates, setBounds, coordinates, places } ) => {

  const classes = useStyles();
  const isMobile = useMediaQuery('{min-width:600px}');


  return (
    <div style={{ height: '400px' }}>
      <MapContainer 
        center={coordinates} 
        zoom={14} 
        className={classes.mapContainer}
        
        
      >
        {/* Use the TileLayer component to specify the map tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Use the Marker component to add markers to the map */}
        {
          places?.map((place, i) => (
            <PlaceComponent
              key={i}
              name={place.name}
              latitude={parseFloat(place.latitude)}
              longitude={parseFloat(place.longitude)}
              place={place}
            />
          ))
        }
      </MapContainer>
    </div>
  );
};

export default Map;


// import React from 'react'
// import GoogleMapReact from 'google-map-react';
// import { Paper, Typography, useMediaQuery} from '@material-ui/core'
// import { LocationOnOutlined } from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab';

// import useStyles from './styles';

// //Rumanmapbox@999

// const Map = () => {
//   const classes = useStyles();
//   const isMobile = useMediaQuery('{min-width:600px}');

//   const coordinates = {lat:0, lng: 0};

//   return (
//     <div className={classes.mapContainer}>
//       <GoogleMapReact
//         bootstrapURLKeys={{key: ''}}
//         defaultCenter={coordinates}
//         center={coordinates}
//         defaultZoom={14}
//         margin={[50, 50, 50, 50]}
//         options={''}
//         onChange={''}
//         onChildClick={''}
//       >

//       </GoogleMapReact>
//     </div>
//   )
// }

// export default Map