/* eslint-disable react/prop-types */
import { makeStyles, CardContent, Typography, CardMedia, Card, Popover, Button }
  from '@material-ui/core';
import React from 'react';
import { PowerSettingsNew } from '@material-ui/icons';
import { ServiceLog } from '../serviceLog';

export const ServiceItem = ({ data }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLogOpen, setIsLogOpen] = React.useState(false);
  const open = Boolean(anchorEl);
  const statusColor = (status) => {
    if (status === 'active') {
      return 'green';
    } else if (status === 'off') {
      return 'red';
    } else if (status === 'restarting') {
      return 'orange';
    }
    return 'black';
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleOpenLogs = () => {
    setIsLogOpen(true);
  };

  const useStyles = makeStyles(() => ({
    serviceImage: {
      aspectRatio: '1/1',
      display: 'flex',
      width: 100,
      height: 100,
    },
    root: {
      display: 'flex',
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '10px',
      paddingBottom: '10px',
      margin: '20px',
      width: 500,
      backgroundColor: `${data.color}`,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    content: {
      flex: '1 0 auto',
      paddingBottom: '0px!important',
      paddingTop: '0px!important',
      paddingRight: '0px!important',
    },
    icon: {
      fontSize: 30,
      color: statusColor(data.status),
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: '5px',
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: '5px',
    },
    titleWrapper: {
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'row',
    },
    popover: {
      pointerEvents: 'none',
    },
    firstButton: {
      marginRight: '10px',
    },
    secondButton: {
      right: 0,
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <ServiceLog data={data} isOpen={isLogOpen} setOpen={setIsLogOpen} />
      <CardMedia
        className={classes.serviceImage}
        image={data.logo}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div className={classes.titleWrapper}>
            <Typography component="h4" variant="h4" align="left">
              {data.title}
            </Typography>
            <PowerSettingsNew className={classes.icon}
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            />
            <Popover
              id={'popover' + data.title}
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography> Uptime: 2 days </Typography>
            </Popover>
          </div>
          <Typography variant="subtitle1" color="textSecondary" align="left">
            {data.description}
          </Typography>
          <div className={classes.buttonWrapper}>
            {data.status !== 'off' &&
              <>
                <Button variant="contained" color="primary"
                  className={classes.firstButton} onClick={handleOpenLogs}>
                  Status
                </Button>
                <Button variant="contained" color="primary"
                  className={classes.firstButton}>
                  Stop
                </Button>
                <Button variant="contained" color="secondary"
                  className={classes.secondButton}>
                  Restart
                </Button>
              </> ||
              <>
                <Button variant="contained" color="primary"
                  className={classes.firstButton} onClick={handleOpenLogs}>
                  Status
                </Button>
                <Button variant="contained" color="secondary"
                  className={classes.secondButton}>
                  Start
                </Button>
              </>
            }
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
