import {
  AppBar, InputBase, Toolbar, Typography,
  Paper, IconButton,
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'space-between',
  },
  appbar: {
    position: 'relative',
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
    justifyContent: 'space-between',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: 'white',
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const Header = ({ setSearchTerm, searchTerm }) => {
  const classes = useStyles();


  const handleSearchUpdate = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Typography className="header-text" variant="h6" noWrap>
          Homelab service panel
        </Typography>
        <Paper component="form" className={classes.root}>
          <InputBase
            placeholder="Search.."
            className={classes.input}
            inputProps={{ 'aria-label': 'search' }}
            value={searchTerm}
            onChange={handleSearchUpdate} />
          <IconButton color="primary" className={classes.iconButton}
            onClick={handleClearSearch}>
            <Clear />
          </IconButton>
        </Paper>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className={classes.appbar}>{displayDesktop()}</AppBar>
    </header>
  );
};
