import { latLng } from 'leaflet';
import React from 'react'
import { Marker, Popup } from 'react-leaflet';
import useStyles from './styles';
import { Typography, Paper } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const PlaceComponent = ( { name, latitude, longitude, place } ) => {

  const classes = useStyles();

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
       <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
          <img
            className={classes.pointer}
            src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          />
          <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
        </Paper>
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