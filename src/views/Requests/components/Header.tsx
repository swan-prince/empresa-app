import React, { FC } from 'react'

import { makeStyles } from '@material-ui/core'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import CustomButton from 'components/CustomButton'

import DownloadIcon from 'assets/img/download.png'

import styles from 'assets/jss/views/requestStyles'

const useStyles = makeStyles(styles)

const Header: FC = () => {

  const classes = useStyles()

  return (
    <Box 
      className={classes.header} display='flex' justifyContent='space-between' alignItems='center'>
      <Typography variant='h3'>
        Solicitudes
      </Typography>
      <CustomButton endIcon={<img src={DownloadIcon} alt='Download' />} className={classes.downloadBtn}>
        Exportar
      </CustomButton>
    </Box>
  )
}

export default Header
