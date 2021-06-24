import React, { useState } from 'react';
import {
  AppBar,
  Tab,
  Tabs,
  Typography,
  Toolbar,
  useMediaQuery,
  useTheme,
  makeStyles,
  Grid
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import DrawerComponent from './drawer';

const useStyles = makeStyles(() => ({
  tabMargin: {
    marginLeft: '50px'
  }
}));

const Navbar = () => {
  const [value, setValue] = useState(0);

  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useStyles();

  const firstLink = 'Local';
  const secondLink = 'Cloud';
  const thirdLink = 'Coming soon';

  return (
    <Grid container item>
      <AppBar color="primary">
        <Toolbar>
          <Typography style={{ color: '#FFF' }}>Logo</Typography>

          {isMatch ? (
            <DrawerComponent
              firstLink={firstLink}
              secondLink={secondLink}
              thirdLink={thirdLink}
            />
          ) : (
            <Tabs
              indicatorColor="secondary"
              value={value}
              onChange={handleClickTab}
              className={classes.tabMargin}
            >
              <Tab label={firstLink} disableRipple to="/" component={Link} />
              <Tab label={secondLink} disableRipple to="/second" component={Link} />
              <Tab label={thirdLink} disableRipple to="/third" component={Link} />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
