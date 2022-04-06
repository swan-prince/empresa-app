import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Logo from 'assets/img/black-logo.png'
import MenuIcon from 'assets/img/menu.png'

import styles from 'assets/jss/components/navbarStyles'

const useStyles = makeStyles(styles)

interface Props {
  openDrawer: () => void;
}

const Navbar: FC<Props> = (props) => {

  const classes = useStyles()

  const { openDrawer } = props

  return (
    <AppBar position="sticky" className={classes.appbar}>
      <Toolbar id='top-nav-bar'>
        <IconButton edge="start" className={classes.menuButton} onClick={openDrawer}>
          <img src={MenuIcon} alt="Menu" />
        </IconButton>        
        <img src={Logo} alt="Logo" />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
