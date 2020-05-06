import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down('xs')]: {
      width: '90vw',
      padding: theme.spacing(2, 2)
    }
  },
  disclaimerButton: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    padding: '5px',
  },
  disclaimerText: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
    }
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Disclaimer</h2>
      <div id="simple-modal-description">
        <p className={classes.disclaimerText}>
          Ohio Ready is a project by Can’t Stop Columbus, an initiative of Smart Columbus, LLC and the Columbus Partnership, a 501(c)(3) nonprofit organization (together, “CSCBUS”).
      </p>
        <p className={classes.disclaimerText}>
          All information and data presented herein is made available solely for general informational purposes. This is public information and data that may be interpreted by you, however you are responsible for the appropriate interpretation.
      </p>
        <p className={classes.disclaimerText}>
          All information and data is provided on an “AS IS” basis, without warranty of any kind, including without limitation the warranties of merchantability, fitness for a particular purpose, and non-infringement. Further, availability of this data and information further does not constitute scientific publication. Data and/or information may contain errors or be incomplete. CSCBUS make no representation or warranty, express or implied, including without limitation any warranties of merchantability or fitness for a particular purpose or warranties as to the identity or ownership of data or information, the quality, accuracy or completeness of data or information, or that the use of such data or information will not infringe any patent, intellectual property or proprietary rights of any party.
      </p>
        <p className={classes.disclaimerText}>
          CSCBUS disclaims all liability and responsibility arising from any reliance placed on such information and data by you, and shall not be liable for any loss, harm, illness or other damage or injury arising from access to or use of such information or data, including without limitation any direct, indirect, incidental, exemplary, special or consequential damages, even if advised of the possibility of such damages.
      </p>
        <p className={classes.disclaimerText}>
          Portions of CSCBUS’ website may be incorrect or outdated. CSCBUS does not independently verify the validity or accuracy of any such information or data, and any external links to other sites are intended to be informational and do not have the endorsement of CSCBUS. Any person that relies on any information or data herein does so at his or her own risk.
      </p>
      </div>
    </div>
  );

  return (
    <div className={classes.disclaimerButton}>
      <a type="button" onClick={handleOpen}>
        Disclaimer
      </a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}