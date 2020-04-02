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
    justifyContent: 'center',
    alignItems: 'center',
    margin: '14px 0px 0px 0px',
    maxWidth: '100%',
  },
  cardFooterIcon: {
    marginRight: '10px',
    marginLeft: '10px',
    marginBottom: '14px',
  },
  
}));

function FooterIcons() {
  const classes = useStyles();
  return (
    <div className={classes.cardFooterIconWrapper}>
      <a href="http://coronavirus.ohio.gov" target="_blank" rel="noopener noreferrer">
        <img className={classes.cardFooterIcon} src={flag} alt="Ohio Department of Health: Coronavirus Website"/>
      </a>
      <a href="http://facebook.com/cantstopcbus" target="_blank" rel="noopener noreferrer">
        <img className={classes.cardFooterIcon} src={facebook} alt="Can't Stop Columbus Facebook"/>
      </a>
      <a href="http://twitter.com/cantstopcbus" target="_blank" rel="noopener noreferrer">
        <img className={classes.cardFooterIcon} src={twitter} alt="Can't Stop Columbus Twitter"/>
      </a>
      <a href="http://instagram.com/cantstopcbus" target="_blank" rel="noopener noreferrer">
        <img className={classes.cardFooterIcon} src={instagram} alt="Can't Stop Columbus Instagram"/>
      </a>
      <a href="http://cantstopcolumbus.com" target="_blank" rel="noopener noreferrer">
        <img className={classes.cardFooterIcon} src={globe} alt="Can't Stop Columbus Website"/>
      </a>
    </div>
  );
}

export default FooterIcons;