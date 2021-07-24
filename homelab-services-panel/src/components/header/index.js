import { AppBar, InputBase, Toolbar, Typography } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'space-between',
  },
  headerSearch: {
    'padding': theme.spacing(.5, 1, .5, 0),
    'paddingLeft': `calc(1em + ${theme.spacing(3)}px)`,
    'marginRight': '2vw',
    'backgroundColor': alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    'color': theme.palette.common.white,
  },
  appbar: {
    position: 'relative',
  },
}));

export const Header = () => {
  const classes = useStyles();
  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Typography className="header-text" variant="h6" noWrap>
          Homelab service panel
        </Typography>
        <InputBase
          placeholder="Search.."
          className={classes.headerSearch}
          inputProps={{ 'aria-label': 'search' }} />
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className={classes.appbar}>{displayDesktop()}</AppBar>
    </header>
  );
};
