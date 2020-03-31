import React from 'react';

// styling
import { makeStyles } from '@material-ui/core/styles';

// icons
import flag from '../../icons/flag.svg'
import facebook from '../../icons/FB.svg'
import twitter from '../../icons/twit.svg'
import instagram from '../../icons/insta.svg'
import globe from '../../icons/globe_blue.svg'

const useStyles = makeStyles((theme) => ({
  cardFooterIconWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '14px 0px 0px 0px',
    maxWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-between'
    }
  },
  cardFooterIcon: {
    marginRight: '20px',
    marginBottom: '14px',
    [theme.breakpoints.down('xs')]: {
      marginRight: '0px'
    }
  },
  
}));

function FooterIcons() {
  const classes = useStyles();
  return (
    <div className={classes.cardFooterIconWrapper}>
      <img className={classes.cardFooterIcon} src={flag} alt=""/>
      <img className={classes.cardFooterIcon} src={facebook} alt=""/>
      <img className={classes.cardFooterIcon} src={twitter} alt=""/>
      <img className={classes.cardFooterIcon} src={instagram} alt=""/>
      <img className={classes.cardFooterIcon} src={globe} alt=""/>
    </div>
  );
}

export default FooterIcons;