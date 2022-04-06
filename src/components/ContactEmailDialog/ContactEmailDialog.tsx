import React, { FC, useState } from 'react'
import { Formik } from 'formik';
import * as yup from "yup";

import { makeStyles } from '@material-ui/core'

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CloseIcon from '@material-ui/icons/Close';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import CustomInput from 'components/CustomInput'
import CustomButton from 'components/CustomButton'

import { ContactForm } from 'typings'

import styles from 'assets/jss/components/contactEmailDialogStyles'

const useStyles = makeStyles(styles)

interface Props {
  open: boolean;
  handleClose: () => void;
}

const ContactFormSchema = yup.object().shape({
  business: yup.string().required('This field is required.'),
  message: yup.string().required('This field is required.')
})

const defaultValues = {
  business: '',
  message: ''
}

const ContactEmailDialog: FC<Props> = (props) => {

  const classes = useStyles()

  const { open, handleClose } = props

  const [isSave, setIsSave] = useState(false)

  const onHandleSubmit = (data: ContactForm) => {
    console.log(data)
    handleClose();
  }

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
              Correo de contacto
            </Typography>
            <Formik
              initialValues={{ ...defaultValues }}
              validationSchema={ContactFormSchema}
              onSubmit={onHandleSubmit}
            >
              {
                ({ errors, handleChange, handleSubmit, touched }) => (
                  <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Box mt={2}>
                      <Box mb={2}>
                        <CustomInput
                          name='business'
                          labelText='ASUNTO'
                          placeholder=''
                          fullWidth
                          onChange={handleChange}
                          error={Boolean(touched.business && errors.business)}
                        />
                      </Box>
                      <Box>
                        <CustomInput
                          name='message'
                          labelText='Mensaje'
                          placeholder=''
                          fullWidth
                          onChange={handleChange}
                          inputProps={{
                            multiline: true,
                            rows: 6
                          }}
                          error={Boolean(touched.message && errors.message)}
                        />
                      </Box>
                      <Box className={classes.saveCheckbox}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={isSave}
                              onChange={(e) => setIsSave(e.target.checked)}
                              name="checkedB"
                              color="primary"
                            />
                          }
                          label="Guardar mensaje como plantilla"
                        />
                      </Box>
                      <Box width='100%' className={classes.sendBtn}>
                        <CustomButton endIcon={<ArrowRightAltIcon />} type='submit' fullWidth>
                          Enviar
                        </CustomButton>
                      </Box>
                    </Box>
                  </form>
                )}
            </Formik>
            <IconButton className={classes.closeBtn} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export default ContactEmailDialog
