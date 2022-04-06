import React, { FC, useState } from 'react'
import { Formik } from 'formik';
import * as yup from "yup";

import { makeStyles } from '@material-ui/core'

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import FileDropzone from 'components/FileDropzone'
import CustomInput from 'components/CustomInput'
import CustomButton from 'components/CustomButton'
import SendingLabel from 'components/SendingLabel'
import MainLayout from 'components/MainLayout'

import { UploadedFile, ProfileForm } from 'typings'

import styles from 'assets/jss/views/profileStyles'

const useStyles = makeStyles(styles)

const ProfileFormSchema = yup.object().shape({
  name: yup.string().required('This field is required.'),
  email: yup.string().required('This field is required.')
})

const defaultValues = {
  name: '',
  email: ''
}

const Profile: FC = () => {

  const classes = useStyles()

  const [compayLogo, setCompanyLogo] = useState<UploadedFile>()

  const uploadFile = (file: UploadedFile) => {
    setCompanyLogo(file)
  }

  const onHandleSubmit = (data: ProfileForm) => {
    console.log(data)
  }

  return (
    <MainLayout>
      <Box className={classes.wrapper}>
        <Typography variant='h1'>
          Perfil
        </Typography>
        <Box className={classes.contents}>
          <Formik
            initialValues={{ ...defaultValues }}
            validationSchema={ProfileFormSchema}
            onSubmit={(values, { setSubmitting }) => {
              onHandleSubmit(values)
              setTimeout(() => {
                setSubmitting(false);
              }, 2000);
            }}
          >
            {
              ({ errors, handleChange, handleSubmit, touched, isSubmitting }) => (
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Box className={classes.logoUpload}>
                    <Typography variant='h6'>
                      Cargar logo empresa
                    </Typography>
                    <Typography variant='body1'>
                      Arrastra o elige tu archivo para subir
                    </Typography>
                    <Box className={classes.fileUpload} mb={3}>
                      <FileDropzone
                        file={compayLogo}
                        uploadFile={uploadFile}
                        removeFile={() => setCompanyLogo(undefined)}
                        label='PNG, GIF, JPG o SVG. Max 1Mb.'
                        acceptType='image/jpeg,image/png,image/gif,image/svg+xml'
                        maxSize={1000000}
                      />
                    </Box>
                    <Box mb={3}>
                      <CustomInput
                        name='name'
                        labelText='NOMBRE DE CONTACTO'
                        placeholder=''
                        fullWidth
                        onChange={handleChange}
                        error={Boolean(touched.name && errors.name)}
                      />
                    </Box>
                    <Box mb={5}>
                      <CustomInput
                        name='email'
                        labelText='Correo de contacto'
                        placeholder=''
                        fullWidth
                        onChange={handleChange}
                        error={Boolean(touched.email && errors.email)}
                      />
                    </Box>
                    <Box display='flex' justifyContent='space-between' className={classes.footerBtns}>
                      <CustomButton endIcon={<ArrowRightAltIcon />} type='submit' disabled={isSubmitting}>
                        Enviar
                      </CustomButton>
                      {
                        isSubmitting ? <SendingLabel /> : null
                      }
                    </Box>
                  </Box>
                </form>
              )}
          </Formik>
        </Box>
      </Box>
    </MainLayout>
  )
}

export default Profile
