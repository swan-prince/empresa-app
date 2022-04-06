import React, { FC } from 'react'

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core'

import CloseIcon from 'assets/img/green-close.png'

import styles from 'assets/jss/components/snackbarStyles'

const useStyles = makeStyles(styles)

interface Props {
  open: boolean;
  handleClose: () => void;
  message: string;
}

const AlertSnackbar: FC<Props> = (props) => {

  const classes = useStyles()

  const { open, handleClose, message } = props

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      onClose={handleClose}      
    >
      <MuiAlert       
        variant="filled"
        onClose={handleClose}
        severity="success"
        icon={false}
        className={classes.alert}
        action={
          <Button color="inherit" size="small" className={classes.closeBtn} onClick={handleClose}>
            <img src={CloseIcon} alt="Close" />
          </Button>
        }
      >
        { message }
      </MuiAlert>
    </Snackbar>
  )
}

export default AlertSnackbar
