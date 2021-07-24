/* eslint-disable react/prop-types */
import { makeStyles, CardContent, Typography, CardMedia, Card }
  from '@material-ui/core';
import React from 'react';

export const ServiceItem = ({ data }) => {
  const useStyles = makeStyles(() => ({
    serviceImage: {
      aspectRatio: '1/1',
      display: 'flex',
      width: 125,
      height: 125,
    },
    root: {
      display: 'flex',
      padding: '20px',
      margin: '20px',
      width: 500,
      backgroundColor: `${data.color}`,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.serviceImage}
        image={data.logo}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h4" variant="h4" align="left">
            {data.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {data.description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};
