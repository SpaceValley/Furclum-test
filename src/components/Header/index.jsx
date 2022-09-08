import React from 'react';
import withStyles from 'react-jss';
import QRCodeLogo from '../../assets/Logo_Icon.svg';
import QuestionIcon from '../../assets/Question_Icon.svg';
import {Colors} from '../../styles/colors';
import {Stylesheet} from '../../styles';

const Header = ({classes}) => (
  <section className={classes.header}>
    <div className={classes.logoWrap}>
      <div className={classes.QRCodeIcon}/>
      <h1 className={classes.logoLabel}>My <span className={classes.logoLabelRegular}>QR</span> CODE</h1>
    </div>
    <div className={classes.headerTitleSection}>
      <h1 className={classes.headerTitle}>2. Add content to the PDF QR Code</h1>
      <button className={classes.helpButton}>
        <div className={classes.helpButtonIconWrap}>
          <div className={classes.helpButtonIcon}/>
        </div>
        <h3 className={classes.helpButtonLabel}>Help</h3>
      </button>
    </div>
  </section>
);

const styles = {
  header: {
    marginBottom: '53px',
  },
  logoWrap: {
    extend: Stylesheet.flexRowCenter,
    justifyContent: 'flex-start',
    marginBottom: '53px',
  },
  QRCodeIcon: {
    backgroundImage: `url(${QRCodeLogo})`,
    height: '28px',
    width: '28px',
    marginRight: '6px',
  },
  logoLabel: {
    fontFamily: 'Rubik',
    fontSize: '19.5px',
    fontWeight: 700,
    lineHeight: '18px',
    margin: 0,
    color: Colors.black,
  },
  logoLabelRegular: {
    fontWeight: 300,
  },
  headerTitleSection: {
    extend: Stylesheet.flexRowSpaceBetween,
    marginBottom: '53px',
  },
  headerTitle: {
    fontFamily: 'Rubik',
    fontSize: '22px',
    fontWeight: 700,
    lineHeight: '24px',
    margin: 0,
    color: Colors.black2,
  },
  helpButton: {
    height: '33px',
    width: '73px',
    border: `2px solid ${Colors.blue}`,
    borderRadius: '33px',
    extend: Stylesheet.flexRowCenter,
    boxSizing: 'border-box',
    cursor: 'pointer',
    padding: 0,
    backgroundColor: Colors.gray4,
  },
  helpButtonLabel: {
    fontFamily: 'Rubik',
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: '18px',
    margin: 0,
    color: Colors.blue,
  },
  helpButtonIconWrap: {
    height: '21px',
    width: '21px',
    border: `2px solid ${Colors.blue}`,
    borderRadius: '21px',
    extend: Stylesheet.flexRowCenter,
    boxSizing: 'border-box',
    marginRight: '4px',
  },
  helpButtonIcon: {
    backgroundImage: `url(${QuestionIcon})`,
    height: '9.09px',
    width: '5.7px',
  },
};

export default withStyles(styles)(Header);
