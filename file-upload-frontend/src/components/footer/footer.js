import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import './footer.css';

const Footer = () => (
  <Grid item xs className="footer">
    <Typography style={{ textAlign: 'center' }}>Dramatized by @Tchu Tchu</Typography>
  </Grid>
);

export default Footer;
