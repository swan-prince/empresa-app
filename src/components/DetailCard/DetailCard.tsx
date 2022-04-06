import React, { FC } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'

import CustomButton from 'components/CustomButton'

import { RequestItem } from 'typings'

import styles from 'assets/jss/components/detailCardStyles'

const useStyles = makeStyles(styles)

interface Props {
  request?: RequestItem;
  handleOpenContact: () => void;
}

const DetailCard: FC<Props> = (props) => {

  const classes = useStyles()

  const { request, handleOpenContact } = props

  return (
    <Box className={classes.card}>
      <Box className={classes.info}>
        <InputLabel>
          ID SOLICITUD
        </InputLabel>
        <Typography variant='body1'>
          {request?.id ?? ''}
        </Typography>
      </Box>
      <Box className={classes.info}>
        <InputLabel>
          Fecha
        </InputLabel>
        <Typography variant='body1'>
          {request?.applicationDate ?? ''}
        </Typography>
      </Box>
      <Box className={classes.info}>
        <InputLabel>
          Estado
        </InputLabel>
        <Box className={clsx(classes.condition, {
          [classes.contacted]: request?.condition === 'CONTACTADO',
          [classes.passed]: request?.condition === 'APROBADO',
          [classes.rejected]: request?.condition === 'RECHAZADO'
        })}>
          <Typography variant='body1'>
            {request?.condition ?? ''}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.info}>
        <InputLabel>
          Solicitud
        </InputLabel>
        <Box className={classes.offer}>
          <Typography variant='body1'>
            {request?.offer ?? ''}
          </Typography>
        </Box>
      </Box>
      <CustomButton variant='outlined' className={classes.contactBtn} onClick={handleOpenContact}>
        Contactar
      </CustomButton>
    </Box>
  )
}

export default DetailCard
