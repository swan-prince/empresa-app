import React, { FC, useState } from 'react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

import { makeStyles } from '@material-ui/core'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import CustomButton from 'components/CustomButton'
import ChartWidget from './components/ChartWidget'

import RequestImg from 'assets/img/awaiting-requests.png'

import styles from 'assets/jss/views/dashboardStyles'

const useStyles = makeStyles(styles)

const Dashboard: FC = () => {

  const classes = useStyles()
  const navigate = useNavigate()

  const [tab, setTab] = useState('day')

  return (
    <Box className={classes.wrapper}>
      <Typography variant='h1'>
        ¡Hola <span>Kredito!</span>
      </Typography>
      <Box className={classes.contents}>
        <Box className={classes.dateTab}>
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button onClick={() => setTab('day')} className={clsx({ [classes.activeTab]: tab === 'day' })}>Día</Button>
            <Button onClick={() => setTab('week')} className={clsx({ [classes.activeTab]: tab === 'week' })}>Semana</Button>
            <Button onClick={() => setTab('month')} className={clsx({ [classes.activeTab]: tab === 'month' })}>Mes</Button>
            <Button onClick={() => setTab('year')} className={clsx({ [classes.activeTab]: tab === 'year' })}>Año</Button>
          </ButtonGroup>
        </Box>
        <Box className={classes.cardList} justifyContent='space-between'>
          <Box className={classes.card}>
            <Box className={classes.cardContent}>
              <Box className={classes.cardImg} display='flex' alignItems='center' justifyContent='center'>
                <img src={RequestImg} alt="Request" width='78%' />
              </Box>
              <Typography variant='body1'>
                SOLICITUDES PENDIENTES
              </Typography>
              <Typography variant='h5'>
                30
              </Typography>
            </Box>
          </Box>
          <Box className={classes.card}>
            <Box className={classes.cardContent}>
              <Box className={classes.cardChart}>
                <ChartWidget />
              </Box>
              <Typography variant='body1'>
                TOTAL DE SOLICITUDES
              </Typography>
              <Typography variant='h5'>
                48
              </Typography>
            </Box>
          </Box>
        </Box>

        <CustomButton className={classes.detailBtn} onClick={() => navigate('/admin/requests')}>
          Ver solicitudes
        </CustomButton>
      </Box>
    </Box>
  )
}

export default Dashboard
