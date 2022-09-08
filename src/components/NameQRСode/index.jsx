import React from 'react';
import withStyles from 'react-jss';
import {Colors} from '../../styles/colors';

const NameQRCode = ({classes}) => (
  <section className={classes.QRCodeNameSection}>
    <h1 className={classes.QRCodeNameSectionTitle}>Name your QR code*</h1>
    <input type="text" className={classes.QRCodeNameSectionInput} placeholder="e.g. My QR code"/>
  </section>
);

const styles = {
  QRCodeNameSection: {
    boxShadow: `0px 1px 15px ${Colors.shadow}`,
    borderRadius: '10px',
    padding: '30px 40px',
    backgroundColor: Colors.white,
    marginBottom: '20px',
  },
  QRCodeNameSectionTitle: {
    fontFamily: 'Rubik',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '22px',
    margin: 0,
    color: Colors.black,
  },
  QRCodeNameSectionInput: {
    border: `1px solid ${Colors.gray}`,
    borderRadius: '6px',
    boxSizing: 'border-box',
    width: '100%',
    height: '50px',
    padding: '15px 24px',
    marginTop: '8px',
    fontFamily: 'Rubik',
    fontSize: '16px',
    fontWeight: 300,
    color: Colors.gray2,
    cursor: 'pointer',
  },
};

export default withStyles(styles)(NameQRCode);
