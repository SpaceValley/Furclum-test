import React from 'react';
import withStyles from 'react-jss';
import SelectedIcon from '../../assets/Check_Icon.svg';
import {Colors} from '../../styles/colors';
import {Stylesheet} from '../../styles';

const ColorScheme = ({classes, isSelected, setSelectedColorScheme}) => (
  <button className={classes.colorSchemeWrap} onClick={setSelectedColorScheme}>
    {isSelected && (
      <div className={classes.selectedIconWrap}>
        <div className={classes.selectedIcon}/>
      </div>
    )}
    <div className={classes.primaryColor}/>
    <div className={classes.secondaryColor}/>
  </button>
);

const styles = {
  colorSchemeWrap: {
    width: '94px',
    height: '100px',
    background: Colors.white,
    borderWidth: (props) => props.isSelected ? 2 : 1,
    borderColor: (props) => props.isSelected ? Colors.blue : Colors.gray,
    borderStyle: 'solid',
    borderRadius: '8px',
    extend: Stylesheet.flexColumnCenter,
    boxSizing: 'border-box',
    cursor: 'pointer',
    position: 'relative',
    padding: 0,
  },
  color: {
    borderRadius: '6px',
    width: '74px',
    height: '37px',
  },
  primaryColor: {
    extend: 'color',
    backgroundColor: (props) => props.primaryColor,
    marginBottom: '6px',
  },
  secondaryColor: {
    extend: 'color',
    backgroundColor: (props) => props.secondaryColor,
  },
  selectedIconWrap: {
    height: '20px',
    width: '20px',
    border: `2px solid ${Colors.white}`,
    backgroundColor: Colors.blue,
    borderRadius: '50%',
    position: 'absolute',
    top: '-11px',
    right: '-11px',
    extend: Stylesheet.flexColumnCenter,
  },
  selectedIcon: {
    backgroundImage: `url(${SelectedIcon})`,
    width: '9.06px',
    height: '5.66px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
};

export default withStyles(styles)(ColorScheme);
