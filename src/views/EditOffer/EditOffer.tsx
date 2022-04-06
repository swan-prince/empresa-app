import React, { FC, useState } from 'react'
import { Formik } from 'formik';
import * as yup from "yup";

import { makeStyles } from '@material-ui/core'

import DoneIcon from '@material-ui/icons/Done';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Header from './components/Header'
import CustomButton from 'components/CustomButton'
import FileDropzone from 'components/FileDropzone'
import CustomInput from 'components/CustomInput'
import AlertSnackbar from 'components/AlertSnackbar'

import { UploadedFile, OfferForm } from 'typings'

import styles from 'assets/jss/views/offersStyles'

const useStyles = makeStyles(styles)

const OfferFormSchema = yup.object().shape({
  qualification: yup.string().required('This field is required.'),
  resume: yup.string().required('This field is required.'),
  description: yup.string().required('This field is required.'),
  duration: yup.string().required('This field is required.'),
  originalPrice: yup.string().required('This field is required.'),
  discountPrice: yup.string().required('This field is required.')
})

const defaultValues = {
  qualification: 'Crédito comercial pyme',
  resume: 'El crédito comercial pyme a tu alcance',
  description: 'Recibe un 100% de descuento en las últimas 3 cuotas de tu crédito',
  duration: '1 mes desde que se adquiera la oferta',
  originalPrice: '20.000',
  discountPrice: '10.000'
}

const EditOffer: FC = () => {

  const classes = useStyles()

  const [active, setActive] = useState(true)
  const [openAlert, setOpenAlert] = useState(false)

  const [firstFile, setFirstFile] = useState<UploadedFile>()
  const [secondFile, setSecondFile] = useState<UploadedFile>()
  const [thirdFile, setThirdFile] = useState<UploadedFile>()
  const [fourthFile, setFourthFile] = useState<UploadedFile>()

  const onHandleSubmit = (data: OfferForm) => {
    console.log(data)
    setOpenAlert(true)
  }

  return (
    <Box>
      <Header />
      <Box className={classes.contentSection}>
        <Box className={classes.contents}>
          <Box className={classes.stateSwitch} display='flex'>
            <FormControlLabel
              value="active"
              control={
                <Switch
                  color="primary"
                  checked={active}
                  onChange={(e) => setActive(e.target.checked)}
                  classes={{
                    root: classes.swtichRoot,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked,
                  }}
                />
              }
              label="Estado activa"
              labelPlacement="start"
            />
          </Box>

          <Box className={classes.titleSection} display='flex' justifyContent='space-between' flexWrap='wrap' alignItems='center'>
            <Typography variant='h1'>
              Edita tu oferta
            </Typography>
            <CustomButton variant='outlined'>
              Previsualiza tu oferta
            </CustomButton>
          </Box>

          <Box className={classes.uploadFileSection}>
            <Typography variant='h6'>
              Subir archivo
            </Typography>
            <Typography variant='body1' className={classes.uploadFileLabel}>
              Arrastra o elige tus archivos para subir
            </Typography>
            <Typography variant='body1' align='right' className={classes.uploadFileRightLabel}>
              500 px ancho x 733 px alto (tamaño celular vertical)
            </Typography>

            <Box className={classes.fileUploads} display='flex'>
              <Box className={classes.fileUpload}>
                <FileDropzone
                  file={firstFile}
                  uploadFile={(file) => setFirstFile(file)}
                  removeFile={() => setFirstFile(undefined)}
                  label='PNG, GIF o JPG. Max 2Mb.'
                  acceptType='image/jpeg,image/png,image/gif'
                  maxSize={2000000}
                />
              </Box>
              <Box className={classes.fileUpload}>
                <FileDropzone
                  file={secondFile}
                  uploadFile={(file) => setSecondFile(file)}
                  removeFile={() => setSecondFile(undefined)}
                  label='PNG, GIF o JPG. Max 2Mb.'
                  acceptType='image/jpeg,image/png,image/gif'
                  maxSize={2000000}
                />
              </Box>
              <Box className={classes.fileUpload}>
                <FileDropzone
                  file={thirdFile}
                  uploadFile={(file) => setThirdFile(file)}
                  removeFile={() => setThirdFile(undefined)}
                  label='PNG, GIF o JPG. Max 2Mb.'
                  acceptType='image/jpeg,image/png,image/gif'
                  maxSize={2000000}
                />
              </Box>
              <Box className={classes.fileUpload}>
                <FileDropzone
                  file={fourthFile}
                  uploadFile={(file) => setFourthFile(file)}
                  removeFile={() => setFourthFile(undefined)}
                  label='PNG, GIF o JPG. Max 2Mb.'
                  acceptType='image/jpeg,image/png,image/gif'
                  maxSize={2000000}
                />
              </Box>
            </Box>
          </Box>

          <Formik
            initialValues={{ ...defaultValues }}
            validationSchema={OfferFormSchema}
            onSubmit={onHandleSubmit}
          >
            {
              ({ errors, handleChange, handleSubmit, touched, values, resetForm }) => (
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Box className={classes.formSection}>
                    <Typography variant='h6'>
                      Detalle de la oferta
                    </Typography>
                    <Box mb={3}>
                      <CustomInput
                        name='qualification'
                        labelText='Título'
                        caracteres={18}
                        placeholder=''
                        fullWidth
                        onChange={handleChange}
                        error={Boolean(touched.qualification && errors.qualification)}
                        value={values.qualification}
                      />
                    </Box>
                    <Box mb={3}>
                      <CustomInput
                        name='resume'
                        labelText='RESUMEN'
                        caracteres={64}
                        placeholder=''
                        fullWidth
                        onChange={handleChange}
                        error={Boolean(touched.resume && errors.resume)}
                        value={values.resume}
                        inputProps={{
                          multiline: true,
                          rows: 4
                        }}
                      />
                    </Box>
                    <Box mb={3}>
                      <CustomInput
                        name='description'
                        labelText='DESCRIPCIÓN'
                        caracteres={-2}
                        placeholder=''
                        fullWidth
                        onChange={handleChange}
                        error={Boolean(touched.description && errors.description)}
                        value={values.description}
                        inputProps={{
                          multiline: true,
                          rows: 6
                        }}
                      />
                    </Box>
                    <Box mb={3}>
                      <CustomInput
                        name='duration'
                        labelText='DURACIÓN DE LA OFERTA'
                        caracteres={18}
                        placeholder=''
                        fullWidth
                        onChange={handleChange}
                        error={Boolean(touched.duration && errors.duration)}
                        value={values.duration}
                      />
                    </Box>
                    <Box mb={3}>
                      <CustomInput
                        name='originalPrice'
                        labelText='PRECIO ORIGINAL'
                        caracteres={18}
                        placeholder=''
                        fullWidth
                        onChange={handleChange}
                        error={Boolean(touched.originalPrice && errors.originalPrice)}
                        value={values.originalPrice}
                      />
                    </Box>
                    <Box>
                      <CustomInput
                        name='discountPrice'
                        labelText='PRECIO DESCUENTO'
                        caracteres={18}
                        placeholder=''
                        fullWidth
                        onChange={handleChange}
                        error={Boolean(touched.discountPrice && errors.discountPrice)}
                        value={values.discountPrice}
                      />
                    </Box>

                    <Box className={classes.footerBtns}>
                      <CustomButton endIcon={<DoneIcon />} type='submit'>
                        Confirmar
                      </CustomButton>
                      <CustomButton
                        startIcon={<HighlightOffIcon />}
                        variant='text'
                        onClick={() => resetForm({
                          values: {
                            qualification: '',
                            resume: '',
                            description: '',
                            duration: '',
                            originalPrice: '',
                            discountPrice: ''
                          }
                        })}
                      >
                        Limpiar todo
                      </CustomButton>
                    </Box>
                  </Box>
                </form>
              )}
          </Formik>
        </Box>
      </Box>
      <AlertSnackbar 
        open={openAlert}
        handleClose={() => setOpenAlert(false)}
        message='¡Gracias! Tu oferta ha sido enviada a revisión para ser publicada'
      />
    </Box>
  )
}

export default EditOffer
