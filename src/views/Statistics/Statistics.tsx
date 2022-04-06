import React, { FC, useState } from 'react'
import clsx from 'clsx'

import { makeStyles } from '@material-ui/core'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ChartWidget from './components/ChartWidget'

import SlopesIcon from 'assets/img/slopes.png'
import AcceptedIcon from 'assets/img/accepted.png'
import RejectIcon from 'assets/img/reject.png'

import styles from 'assets/jss/views/statisticsStyles'

const useStyles = makeStyles(styles)

const Statistics: FC = () => {

  const classes = useStyles()

  const [tab, setTab] = useState('day')

  const [offer, setOffer] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setOffer(event.target.value as string);
  };

  return (
    <Box className={classes.wrapper}>
      <Typography variant='h1'>
        Estadísticas
      </Typography>
      <Box className={classes.contents}>
        <Box className={classes.offers}>
          <InputLabel>OFERTAS</InputLabel>
          <FormControl variant="outlined">
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={offer}
              onChange={handleChange}
            >
              <MenuItem value='Todas las ofertas'>Todas las ofertas</MenuItem>
              <MenuItem value='Todas las ofertas 2'>Todas las ofertas 2</MenuItem>
              <MenuItem value='Todas las ofertas 3'>Todas las ofertas 3</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className={classes.dateTab}>
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button onClick={() => setTab('day')} className={clsx({ [classes.activeTab]: tab === 'day' })}>Día</Button>
            <Button onClick={() => setTab('week')} className={clsx({ [classes.activeTab]: tab === 'week' })}>Semana</Button>
            <Button onClick={() => setTab('month')} className={clsx({ [classes.activeTab]: tab === 'month' })}>Mes</Button>
            <Button onClick={() => setTab('year')} className={clsx({ [classes.activeTab]: tab === 'year' })}>Año</Button>
          </ButtonGroup>
        </Box>
        <Typography variant='body1' className={classes.note}>
          Así van tus solicitudes
        </Typography>
        <Box className={classes.card} display='flex' justifyContent='space-between'>
          <Box className={classes.chartCol}>
            <Box className={classes.cardChart}>
              <ChartWidget />
            </Box>
            <Typography variant='body1'>
              TOTAL
            </Typography>
            <Typography variant='h5'>
              48
            </Typography>
          </Box>
          <Box className={classes.infors}>
            <Box className={classes.info}>
              <img src={SlopesIcon} alt="Slopes" width='42px' />
              <Typography variant='body1'>
                PENDIENTES
              </Typography>
              <Typography variant='h5'>
                30
              </Typography>
            </Box>
            <Box className={classes.info}>
              <img src={AcceptedIcon} alt="Slopes" width='42px' />
              <Typography variant='body1'>
                ACEPTADAS
              </Typography>
              <Typography variant='h5'>
                15
              </Typography>
            </Box>
            <Box className={classes.info}>
              <img src={RejectIcon} alt="Slopes" width='42px' />
              <Typography variant='body1'>
                RECHAZADAS
              </Typography>
              <Typography variant='h5'>
                3
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Statistics
