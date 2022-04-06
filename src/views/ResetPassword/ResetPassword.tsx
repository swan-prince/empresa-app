import React, { VFC, useState } from 'react'
import { Formik } from 'formik';
import * as yup from "yup";
import { makeStyles } from '@material-ui/core'

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import CustomInput from 'components/CustomInput'
import CustomButton from 'components/CustomButton'
import ConfirmPasswordDialog from 'components/ConfirmPasswordDialog'

import AuthLayout from 'components/AuthLayout'

import { AuthForm } from 'typings'

import styles from 'assets/jss/views/authStyles'

const useStyles = makeStyles(styles)

const FormSchema = yup.object().shape({
  company: yup.string().required('This field is required.')
})

const defaultValues = {
  company: ''
}

const ResetPassword: VFC = () => {

  const classes = useStyles()  

  const [openDialog, setOpenDialog] = useState(false)

  const onHandleSubmit = (data: AuthForm) => {
    setOpenDialog(true)
  }

  return (
    <AuthLayout>
      <Box>
        <Formik
          initialValues={{ ...defaultValues }}
          validationSchema={FormSchema}
          onSubmit={onHandleSubmit}
        >
          {
            ({ errors, handleChange, handleSubmit, touched }) => (
              <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant='body1' className={classes.note}>
                  Recupera tu contraseña
                </Typography>
                <Box className={classes.company}>
                  <CustomInput
                    name='company'
                    labelText='RUT EMPRESA'
                    placeholder=''
                    fullWidth
                    error={Boolean(touched.company && errors.company)}
                    onChange={handleChange}
                  />
                </Box>
                <CustomButton endIcon={<ArrowRightAltIcon />} className={classes.enterBtn} type='submit'>
                  Enviar
                </CustomButton>
              </form>
            )}
        </Formik>
      </Box>
      <ConfirmPasswordDialog
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
      />
    </AuthLayout>
  )
}

export default ResetPassword
