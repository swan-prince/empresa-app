import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import LogoImg from 'assets/img/logo.png'
import WhiteLogo from 'assets/img/white-logo.png'
import FooterLogo from 'assets/img/logo-footer.png'

import styles from 'assets/jss/components/authLayoutStyles'

const useStyles = makeStyles(styles)

interface Props {
  children: React.ReactNode
}

const AuthLayout: FC<Props> = (props) => {

  const classes = useStyles()

  const { children } = props

  return (
    <Box className={classes.wrapper} display='flex'>
      <Box className={classes.leftSide} display='flex' flexDirection='column'>
        <Box className={classes.logoRow} display='flex' justifyContent='space-between' alignItems='flex-start'>
          <img src={LogoImg} alt="KIT Digitalizate" />
          <img src={WhiteLogo} alt="Gobierno de Chile" />
        </Box>
        <Box className={classes.description}>
          <Typography variant='body1' align='center'>
            ¡Bienvenid@ al PANEL DE Kit digitalízate!
          </Typography>
          <Typography variant='h3' align='center'>
            Con tus <span>ofertas</span> estás<br /> <span>ayudando</span> a que las<br /> pymes se digitalicen
          </Typography>
        </Box>
        <Box className={classes.footer} textAlign='center'>
          <img src={FooterLogo} alt="Footer Logo" />
        </Box>
      </Box>
      <Box className={classes.rightSide}>
        <Box className={classes.rightContents}>
          <Typography variant='body1' align='center' className={classes.welcomeText}>
            ¡Bienvenid@ al PANEL DEl <br />Kit digitalízate!
          </Typography>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default AuthLayout
