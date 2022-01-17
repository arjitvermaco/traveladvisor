import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab'

import useStyles from './styles';
const Map = () => {
    const classes = useStyles();
    const coordinates = {lat: 0, lng: 0};
    const isMobile = useMediaQuery('(min-width:600px)');
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact bootstrapURLKeys={{key:'AIzaSyADT5Kf5M66OPJgF7k123ZIslzBT8IEclg'}} defaultCenter={coordinates} center={coordinates} defaultZoom={14} margin={[50,50,50,50]} options={''} onChange={''} onChildClick={''}>

            </GoogleMapReact>
        </div>
    );
}

export default Map;
