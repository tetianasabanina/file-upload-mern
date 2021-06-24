import React from 'react';
import {
 Grid, ThemeProvider, Toolbar 
} from '@material-ui/core/';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import LocalUpload from './components/LocalUpload';
import CloudUpload from './components/CloudUpload';
import ThirdPage from './components/page3';
import Footer from './components/footer/footer';
import theme from './utils/theme';
import './app.css';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Grid container direction="column" justify="center" className="root">
          <Navbar />
          <Toolbar />
          <Grid item xs={12}>
            <Route path="/" exact component={LocalUpload} />
            <Route path="/second" exact component={CloudUpload} />
            <Route path="/third" exact component={ThirdPage} />
         
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Router>
  );
}

export default App;
