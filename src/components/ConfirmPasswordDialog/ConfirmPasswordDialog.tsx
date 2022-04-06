import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core'

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import FileIcon from 'assets/img/file-icon.png'

import styles from 'assets/jss/components/confirmPasswordStyles'

const useStyles = makeStyles(styles)

interface Props {
  open: boolean;
  handleClose: () => void;
}

const ConfirmPasswordDialog: FC<Props> = (props) => {

  const classes = useStyles();

  const { open, handleClose } = props

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box className={classes.paper}>
          <Box className={classes.modalContent} position='relative'>
            <Typography variant='h3'>
              Contraseña enviada
            </Typography>
            <Box className={classes.dataLine} display='flex' alignItems='center'>
              <Box className={classes.fileIcon}>
                <img src={FileIcon} alt="File" />
              </Box>
              <Box>
                <Typography variant='h6'>
                  Revisa el correo registrado
                </Typography>
                <Typography variant='body1'>
                  mh*********@kredito.cl
                </Typography>
              </Box>
            </Box>
            <IconButton className={classes.closeBtn} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export default ConfirmPasswordDialog
