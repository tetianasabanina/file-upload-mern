import React from 'react';
import { Grid, ThemeProvider } from '@material-ui/core/';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import FirstPage from './components/page1';
import SecondPage from './components/page2';
import ThirdPage from './components/page3';
import Footer from './components/footer/footer';
import theme from './utils/theme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Navbar />
          <Route path="/" exact component={FirstPage} />
          <Route path="/second" exact component={SecondPage} />
          <Route path="/third" exact component={ThirdPage} />
        </Grid>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
