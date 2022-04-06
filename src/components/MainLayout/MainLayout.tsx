import React, { FC, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import * as Scroll from 'react-scroll'

import { makeStyles } from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Box from '@material-ui/core/Box'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'

import Requests from 'views/Requests'
import Statistics from 'views/Statistics'
import Profile from 'views/Profile'
import Clients from 'views/Clients'
import EditOffer from 'views/EditOffer'
import AddOffer from 'views/AddOffer'
import Dashboard from 'views/Dashboard'
import RequestDetail from 'views/RequestDetail'
import ClientDetail from 'views/ClientDetail'

import ArrowUp from 'assets/img/arrow-up.png'

import styles from 'assets/jss/components/mainLayoutStyles'

const useStyles = makeStyles(styles)

interface Props {
  window?: () => Window;
}

const MainLayout: FC<Props> = (props) => {

  const classes = useStyles()

  const { window } = props;

  const [open, setOpen] = useState(false)

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 70,
  });

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
            <Routes>
              <Route path='/requests/:id' element={<RequestDetail />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/profile" element={<Profile />} />
              <Route path='/clients/:id' element={<ClientDetail />} />
              <Route path='/clients' element={<Clients />} />
              <Route path='/edit-offer' element={<EditOffer />} />
              <Route path='/add-offer' element={<AddOffer />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Box>
        </Box>
      </Box>
      <Drawer anchor='left' open={open} onClose={() => setOpen(false)} className={classes.drawer}>
        <Sidebar
          hideDrawer={() => setOpen(false)}
        />
      </Drawer>

      <Hidden mdUp>
        <Zoom in={trigger}>
          <Fab
            onClick={scrollToTop}
            color="secondary"
            size="small"
            aria-label="scroll back to top"
            className={classes.backTopBtn}
          >
            <img src={ArrowUp} alt="Arrow up" />
          </Fab>
        </Zoom>
      </Hidden>
    </Box>
  )
}

export default MainLayout
