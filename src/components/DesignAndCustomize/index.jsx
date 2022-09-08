import React, {useState} from 'react';
import ColorScheme from '../ColorScheme';
import withStyles from 'react-jss';
import ColorSchemeItem from '../ColorSchemeItem';
import ArrowIcon from '../../assets/Arrow_Icon.svg';
import RefreshIcon from '../../assets/Refresh_Icon.svg';
import {Colors} from '../../styles/colors';
import {Stylesheet} from '../../styles';

const DesignAndCustomize = ({classes}) => {
  const [selectedColorScheme, setSelectedColorScheme] = useState(colorSchemes[0]);
  
  const isSelected = ({primaryColor, secondaryColor}) => primaryColor === selectedColorScheme.primaryColor && secondaryColor === selectedColorScheme.secondaryColor;
  
  const changeColor = () => {
    const changedScheme = {
      primaryColor: selectedColorScheme.secondaryColor,
      secondaryColor: selectedColorScheme.primaryColor,
    };
    setSelectedColorScheme(changedScheme);
    const colorSchemeIndex = colorSchemes.findIndex((e) => isSelected(e));
    colorSchemes[colorSchemeIndex] = changedScheme;
  };
  
  return (
    <section className={classes.DesignAndCustomizeSection}>
      <div className={classes.DesignAndCustomizeSectionTitleWrap}>
        <h1 className={classes.DesignAndCustomizeSectionTitle}>Design & Customize</h1>
        <div className={classes.DesignAndCustomizeSectionTopArrow}/>
      </div>
      <h3 className={classes.DesignAndCustomizeSectionSubtitle}>Choose your color scheme</h3>
      <div className={classes.DesignAndCustomizeColorSchemesWrap}>
        {colorSchemes.map((item, i) =>
          <ColorScheme
            key={i}
            {...item}
            isSelected={isSelected(item)}
            setSelectedColorScheme={() => setSelectedColorScheme(item)}
          />
        )}
      </div>
      <div className={classes.DesignAndCustomizeColorSchemeInfo}>
        <ColorSchemeItem isPrimary color={selectedColorScheme.primaryColor}/>
        <button className={classes.DesignAndCustomizeChangeColorButton} onClick={changeColor}/>
        <ColorSchemeItem color={selectedColorScheme.secondaryColor}/>
      </div>
    </section>
  );
};

const styles = {
  DesignAndCustomizeSection: {
    boxShadow: `0px 1px 15px ${Colors.shadow}`,
    borderRadius: '10px',
    padding: '15px 40px 30px 40px',
    backgroundColor: Colors.white,
    boxSizing: 'border-box',
    height: '353px',
  },
  DesignAndCustomizeSectionTitle: {
    fontFamily: 'Rubik',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '22px',
    margin: 0,
    color: Colors.black,
  },
  DesignAndCustomizeSectionTitleWrap: {
    extend: Stylesheet.flexRowSpaceBetween,
    marginBottom: '2px',
  },
  DesignAndCustomizeSectionTopArrow: {
    backgroundImage: `url(${ArrowIcon})`,
    height: '9px',
    width: '15px',
    cursor: 'pointer',
  },
  DesignAndCustomizeSectionSubtitle: {
    fontFamily: 'Rubik',
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: '20px',
    color: Colors.gray3,
    marginTop: 0,
    marginBottom: '15px',
  },
  DesignAndCustomizeColorSchemesWrap: {
    borderTop: `1px solid ${Colors.gray}`,
    extend: Stylesheet.flexRowSpaceBetween,
    paddingTop: '31px',
    marginBottom: '42px',
  },
  primaryColor: {
    borderRadius: '6px',
    width: '74px',
    height: '37px',
  },
  secondaryColor: {
    width: '20px',
    height: '20px',
  },
  DesignAndCustomizeColorSchemeInfo: {
    extend: Stylesheet.flexRowSpaceBetween,
  },
  DesignAndCustomizeChangeColorButton: {
    backgroundImage: `url(${RefreshIcon})`,
    height: '24px',
    width: '24px',
    cursor: 'pointer',
    marginTop: '29px',
    padding: 0,
    border: 'none',
    background: 'none',
  },
};

export default withStyles(styles)(DesignAndCustomize);

const colorSchemes = [
  {
    primaryColor: Colors.purple,
    secondaryColor: Colors.gray,
  },
  {
    primaryColor: Colors.yellow,
    secondaryColor: Colors.gray,
  },
  {
    primaryColor: Colors.orange,
    secondaryColor: Colors.gray,
  },
  {
    primaryColor: Colors.green,
    secondaryColor: Colors.gray,
  },
  {
    primaryColor: Colors.purple2,
    secondaryColor: Colors.pink,
  },
  {
    primaryColor: Colors.yellow,
    secondaryColor: Colors.purple3,
  },
  {
    primaryColor: Colors.orange2,
    secondaryColor: Colors.green2,
  },
];
