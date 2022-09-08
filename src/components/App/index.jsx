import React from 'react';
import withStyles from 'react-jss';
import Header from '../Header';
import NameQRСode from '../NameQRСode';
import DesignAndCustomize from '../DesignAndCustomize';
import {Colors} from '../../styles/colors';
import {Stylesheet} from '../../styles';

const App = ({classes}) => (
  <div className={classes.appContainer}>
    <div className={classes.app}>
      <Header/>
      <NameQRСode/>
      <DesignAndCustomize/>
    </div>
  </div>
);

const styles = {
  '@global': {
    body: {
      margin: 0,
      backgroundColor: Colors.gray4,
    },
  },
  appContainer: {
    extend: Stylesheet.flexColumnCenter,
  },
  app: {
    width: '854px',
    marginTop: '83px',
    marginBottom: '307px',
  },
};

export default withStyles(styles)(App);
