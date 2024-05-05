import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Slide from '@mui/material/Slide';
import { useTranslation } from 'next-i18next';
import useStyles from './notification-style';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function Notification() {
  const { t } = useTranslation('common');
  const { classes } = useStyles();
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Snackbar
      TransitionComponent={TransitionUp}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      classes={{
        root: classes.notification,
      }}
      open={open}
      onClose={handleClose}
    >
    </Snackbar>
  );
}

export default Notification;
