import React, { FC, useState } from 'react'
import * as Scroll from 'react-scroll'

import { makeStyles } from '@material-ui/core'

import Box from '@material-ui/core/Box'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Fab from '@material-ui/core/Fab';

import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'

import ArrowUp from 'assets/img/arrow-up.png'

import styles from 'assets/jss/components/mainLayoutStyles'

const useStyles = makeStyles(styles)

interface Props {
  children: React.ReactNode
}

const MainLayout: FC<Props> = (props) => {

  const classes = useStyles()

  const { children } = props;

  const [open, setOpen] = useState(false)

  const scrollToTop = () => {
    Scroll.animateScroll.scrollToTop({ duration: 500 });
  };

  return (
    <Box>
      <Box className={classes.wrapper}>
        <Hidden smDown>
          <Box className={classes.sidebarWrapper} position='fixed'>
            <Sidebar hideDrawer={() => { }} />
          </Box>
        </Hidden>
        <Box className={classes.contentSection}>
          <Hidden mdUp>
            <Navbar openDrawer={() => setOpen(true)} />
          </Hidden>
          <Box>
            {children}
          </Box>
        </Box>
      </Box>
      <Drawer anchor='left' open={open} onClose={() => setOpen(false)} className={classes.drawer}>
        <Sidebar
          hideDrawer={() => setOpen(false)}
        />
      </Drawer>

      <Hidden mdUp>
        <Fab
          onClick={scrollToTop}
          color="secondary"
          size="small"
          aria-label="scroll back to top"
          className={classes.backTopBtn}
        >
          <img src={ArrowUp} alt="Arrow up" />
        </Fab>
      </Hidden>
    </Box>
  )
}

export default MainLayout
