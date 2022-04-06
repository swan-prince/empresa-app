import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core'

import Button from '@material-ui/core/Button'

import StarIcon from 'assets/img/star-fill.png'

import styles from 'assets/jss/components/sendingLabelStyles'

const useStyles = makeStyles(styles)

const SendingLabel: FC = () => {

  const classes = useStyles()

  return (
    <Button 
      className={classes.sending} 
      endIcon={<img src={StarIcon} 
      alt="Sending" />}
      disabled
    >
      Enviando      
    </Button>
  )
}

export default SendingLabel
