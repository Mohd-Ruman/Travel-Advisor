import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel,
MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState('restaurants'); 
  const [rating, setRating] = useState(''); 

  const places = [
    { name : 'Cool place'},
    { name : 'Best Drink'},
    { name : 'Best Steak'},
    { name : 'Warm place'},
    { name : 'Best Biryani'},
    { name : 'Best Shawarma'}, 
  ]

  return (
    <div className={classes.container}>
      <Typography variant='h4'>Restaurants, Hotels & Attractions around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e)=>setType(e.target.value)}>
          <MenuItem Value="restaurants">Restaurants</MenuItem>
          <MenuItem Value="hotels">Hotels</MenuItem>
          <MenuItem Value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
          <MenuItem Value={0}>All</MenuItem>
          <MenuItem Value={3}>Above 3.0</MenuItem>
          <MenuItem Value={4}>Above 4.0</MenuItem>
          <MenuItem Value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List;