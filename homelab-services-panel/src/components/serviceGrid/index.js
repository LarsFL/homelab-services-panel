
import React from 'react';
import { Grid } from '@material-ui/core';
import { ServiceItem } from '../serviceItem';
import data from '../../services.json';

export const ServiceGrid = ({ searchTerm }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center">
      <Grid item xs={12}>
        <Grid container justifyContent='center' spacing={5}>
          {data.filter((value) => {
            return value.title.toLowerCase()
                .includes(searchTerm.toLowerCase());
          }).map((value, inc) => (
            <Grid key={inc} item>
              <ServiceItem data={value} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid >
  );
};
