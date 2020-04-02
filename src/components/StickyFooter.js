import React from 'react';

// styling
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  stickyFooterWrapper: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    minHeight: '50px',
    width: '100vw',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 10vw',
    borderTop: '1px solid #E4E9F1',
    [theme.breakpoints.down('xs')]: {
      padding: '6px 5vw'
    }
  },
  footerTextWrapperDesktop: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  footerTextWrapperMobile: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  footerTextLink: {
    fontSize: '18px',
    fontWeight: '500',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px'
    }
  }
}));

function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.stickyFooterWrapper}>
      <div className={classes.footerTextWrapperDesktop}>
        made with 💜 by <a href="https://github.com/chekcreative/ohio-ready/graphs/contributors" className={classes.footerTextLink}>volunteers</a> as part of <a href="https://cantstopcolumbus.com" className={classes.footerTextLink}>Can't Stop Columbus</a> in Columbus, Ohio
      </div>
      <div className={classes.footerTextWrapperMobile}>
        w/ 💜 by <a href="https://github.com/chekcreative/ohio-ready/graphs/contributors" className={classes.footerTextLink}>us</a> for <a href="https://cantstopcolumbus.com" className={classes.footerTextLink}>Can't Stop Columbus</a>
      </div>
    </div>
  );
}

export default StickyFooter