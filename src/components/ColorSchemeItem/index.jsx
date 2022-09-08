import React from 'react';
import withStyles from 'react-jss';
import {Colors} from '../../styles/colors';
import {Stylesheet} from '../../styles';

const ColorSchemeItem = ({classes, isPrimary, color}) => (
  <section className={classes.colorSchemeItem}>
    <h3 className={classes.colorSchemeItemTitle}>{isPrimary ? 'Primary' : 'Secondary'} color</h3>
    <div className={classes.colorSchemeItemInfo}>
      <h1 className={classes.colorSchemeItemLabel}>{color}</h1>
      <div className={classes.colorSchemeItemColor}/>
    </div>
  </section>
);

const styles = {
  colorSchemeItem: {
    width: '356px',
  },
  colorSchemeItemTitle: {
    fontFamily: 'Rubik',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
    margin: 0,
    color: Colors.black,
    marginBottom: '6px',
  },
  colorSchemeItemInfo: {
    height: '50px',
    boxSizing: 'border-box',
    paddingLeft: '24px',
    paddingRight: '12px',
    background: Colors.white,
    border: `1px solid ${Colors.gray}`,
    borderRadius: '6px',
    extend: Stylesheet.flexRowSpaceBetween,
  },
  colorSchemeItemLabel: {
    fontFamily: 'Rubik',
    fontSize: '16px',
    fontWeight: 300,
    margin: 0,
    color: Colors.black,
  },
  colorSchemeItemColor: {
    width: '24px',
    height: '24px',
    borderRadius: '24px',
    backgroundColor: (props) => props.color,
  },
};

export default withStyles(styles)(ColorSchemeItem);
