import React, { FC, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import DetailHeader from 'components/DetailHeader'
import DetailCard from 'components/DetailCard'
import ContactEmailDialog from 'components/ContactEmailDialog'

import { Client } from 'typings'

import { dummyData } from 'assets/data/clients'
import { dummyData as requests } from 'assets/data/requests'

import styles from 'assets/jss/views/detailStyles'

const useStyles = makeStyles(styles)

const ClientDetail: FC = () => {

  const classes = useStyles()
  const navigate = useNavigate()

  const { id } = useParams()

  const [client, setClient] = useState<Client>()
  const [openContactForm, setOpenContactForm] = useState(false)

  useEffect(() => {
    const clientData = dummyData.find((data) => data.id === parseInt(id ?? '0'))
    setClient(clientData)
  }, [id])

  return (
    <Box>
      <DetailHeader
        title='Detalle de cliente'
        handleReturn={() => navigate('/admin/requests')}
      />
      <Box className={classes.contentSection}>
        <Box className={classes.contents}>
          <Box className={classes.infos}>
            <Typography variant='h3'>
              COMERCIAL ECRAT SPA
            </Typography>
            <Typography variant='h4'>
              { client?.sme ?? '' }
            </Typography>
            <Box>
              <Typography variant='body1'>
                { client?.name ?? ''}
              </Typography>
              <Typography variant='body1'>
                { client?.email ?? ''}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.cards}>
            <Box className={classes.detailCard}>
              <DetailCard
                request={requests[0]}
                handleOpenContact={() => setOpenContactForm(true)}
              />
            </Box>
            <Box className={classes.detailCard}>
              <DetailCard
                request={requests[1]}
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

export default ClientDetail
