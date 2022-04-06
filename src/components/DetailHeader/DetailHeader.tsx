import React, { FC } from 'react'

import { makeStyles } from '@material-ui/core'

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/components/detailHeaderStyles'

const useStyles = makeStyles(styles)

interface Props {
  title: string;
  handleReturn: () => void;
}

const DetailHeader: FC<Props> = (props) => {

  const classes = useStyles()

  const { title, handleReturn } = props

  return (
    <Box className={classes.header}>
      <Box className={classes.contents} display='flex' alignItems='center' justifyContent='space-between'>
        <Typography variant='h6'>
          { title }
        </Typography>
        <CustomButton 
          variant='outlined' 
          startIcon={<KeyboardArrowLeftIcon />}
          onClick={handleReturn}
        >
          Volver
        </CustomButton>
      </Box>
    </Box>
  )
}

export default DetailHeader
