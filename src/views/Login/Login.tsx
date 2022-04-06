import React, { VFC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from "yup";

import { makeStyles } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import CustomInput from 'components/CustomInput'
import CustomButton from 'components/CustomButton'
import AuthLayout from 'components/AuthLayout'

import { AuthForm } from 'typings'
import styles from 'assets/jss/views/authStyles'

const useStyles = makeStyles(styles)

const LoginFormSchema = yup.object().shape({
  company: yup.string().required('This field is required.'),
  password: yup.string().required('This field is required.')
})

const defaultValues = {
  company: '',
  password: ''
}

const Login: VFC = () => {

  const classes = useStyles()
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const onHandleSubmit = (data: AuthForm) => {
    localStorage.setItem('loggedIn', 'true')
    navigate('/admin/welcome')
  }

  return (
    <AuthLayout>
      <Box>
        <Formik
          initialValues={{ ...defaultValues }}
          validationSchema={LoginFormSchema}
          onSubmit={onHandleSubmit}
        >
          {
            ({ errors, handleChange, handleSubmit, touched }) => (
              <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant='body1' className={classes.note}>
                  Ingresa tus datos
                </Typography>
                <Box className={classes.company}>
                  <CustomInput
                    name='company'
                    labelText='RUT EMPRESA'
                    placeholder=''
                    fullWidth
                    onChange={handleChange}
                    error={Boolean(touched.company && errors.company)}
                  />
                </Box>
                <Box className={classes.loginPassword}>
                  <CustomInput
                    name='password'
                    labelText='CONTRASEÑA'
                    placeholder=''
                    fullWidth
                    onChange={handleChange}
                    error={Boolean(touched.password && errors.password)}
                    inputProps={{
                      type: showPassword ? 'text' : 'password'
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Box>
                <Box className={classes.forgotLink}>
                  <Link href='/auth/reset-password' onClick={(e) => { e.preventDefault(); navigate('/auth/reset-password') }}>
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Box>
                <CustomButton endIcon={<ArrowRightAltIcon />} className={classes.enterBtn} type='submit'>
                  Entrar
                </CustomButton>
              </form>
            )}
        </Formik>
      </Box>
    </AuthLayout>
  )
}

export default Login
