import React, { FC, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import DetailHeader from 'components/DetailHeader'
import DetailCard from 'components/DetailCard'
import ContactEmailDialog from 'components/ContactEmailDialog'

import { dummyData } from 'assets/data/requests'

import styles from 'assets/jss/views/detailStyles'

const useStyles = makeStyles(styles)

const RequestDetail: FC = () => {

  const classes = useStyles()
  const navigate = useNavigate()

  const { id } = useParams()

  const [openContactForm, setOpenContactForm] = useState(false)  

  return (
    <Box>
      <DetailHeader
        title='Detalle de solicitud'
        handleReturn={() => navigate('/admin/requests')}
      />
      <Box className={classes.contentSection}>
        <Box className={classes.contents}>
          <Box className={classes.infos}>
            <Typography variant='h3'>
              COMERCIAL ECRAT SPA
            </Typography>
            <Typography variant='h4'>
              771657878-7
            </Typography>
            <Box>
              <Typography variant='body1'>
                Mauricio Gómez Bravo
              </Typography>
              <Typography variant='body1'>
                muriciogb@gmail.com
              </Typography>
            </Box>
          </Box>
          <Box className={classes.cards}>
            <Box className={classes.detailCard}>
              <DetailCard
                request={dummyData.find((data) => data.id === id)}
                handleOpenContact={() => setOpenContactForm(true)}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <ContactEmailDialog
        open={openContactForm}
        handleClose={() => setOpenContactForm(false)}
      />
    </Box>
  )
}

export default RequestDetail
