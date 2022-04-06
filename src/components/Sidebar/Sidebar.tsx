import React, { FC } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';

import StatisticsSvg from 'components/SvgIcons/StatisticsSvg'
import SearchSvg from 'components/SvgIcons/SearchSvg'
import DiscountSvg from 'components/SvgIcons/DiscountSvg'
import UserSvg from 'components/SvgIcons/UserSvg'
import LogoutSvg from 'components/SvgIcons/LogoutSvg'

import AvatarImg from 'assets/img/avatar.png'
import SettingIcon from 'assets/img/setting.png'
import Logo from 'assets/img/logo.png'

import styles from 'assets/jss/components/sidebarStyles'

const useStyles = makeStyles(styles)

interface Props {
  hideDrawer: () => void;
}

const Sidebar: FC<Props> = (props) => {

  const classes = useStyles()
  const navigate = useNavigate()
  const { pathname } = useLocation();

  const { hideDrawer } = props

  return (
    <Box className={classes.sidebar}>
      <Box className={classes.contents} display='flex' flexDirection='column'>
        <Box className={classes.header} mx='auto'>
          <Box position='relative' className={classes.avatar}>
            <Avatar>
              <img src={AvatarImg} alt="Avatar" />
            </Avatar>
            <IconButton onClick={() => {
              hideDrawer();
              navigate('/admin/profile')
            }}>
              <img src={SettingIcon} alt="Setting" />
            </IconButton>
          </Box>
          <Typography variant='body1' align='center'>
            Kredito
          </Typography>
        </Box>

        <Box>
          <Box className={classes.menuItem}>
            <Box display='flex' alignItems='center' className={clsx(classes.mainLink, { [classes.active]: pathname === '/admin/requests' })}>
              <SearchSvg />
              <Link href='/admin/requests' onClick={(e) => {
                e.preventDefault();
                hideDrawer();
                navigate('/admin/requests')
              }}>
                SOLICITUDES
              </Link>
            </Box>
          </Box>

          <Box className={classes.menuItem}>
            <Box display='flex' alignItems='center' className={classes.mainLink}>
              <DiscountSvg />
              <Link
                href='/admin/edit-offer'
                onClick={(e) => {
                  e.preventDefault();
                  hideDrawer();
                  navigate('/admin/edit-offer')
                }}
              >
                Tus Ofertas
              </Link>
            </Box>
            <Box className={classes.sublinks}>
              <Link
                href='/admin/edit-offer'
                className={clsx({ [classes.active]: pathname === '/admin/edit-offer' })}
                onClick={(e) => {
                  e.preventDefault();
                  hideDrawer();
                  navigate('/admin/edit-offer')
                }}
              >
                EDITAR
              </Link>
              <Link
                href='/admin/add-offer'
                className={clsx({ [classes.active]: pathname === '/admin/add-offer' })}
                onClick={(e) => {
                  e.preventDefault();
                  hideDrawer();
                  navigate('/admin/add-offer')
                }}
              >
                AGREGAR NUEVA
              </Link>
            </Box>
          </Box>

          <Box className={classes.menuItem}>
            <Box display='flex' alignItems='center' className={clsx(classes.mainLink, { [classes.active]: pathname === '/admin/statistics' })}>
              <StatisticsSvg />
              <Link
                href='/admin/statistics'
                onClick={(e) => {
                  e.preventDefault();
                  hideDrawer();
                  navigate('/admin/statistics')
                }}
              >
                Estadísticas
              </Link>
            </Box>
          </Box>

          <Box className={classes.menuItem}>
            <Box display='flex' alignItems='center' className={clsx(classes.mainLink, { [classes.active]: pathname === '/admin/clients' })}>
              <UserSvg />
              <Link
                href='/admin/clients'
                onClick={(e) => {
                  e.preventDefault();
                  hideDrawer();
                  navigate('/admin/clients')
                }}
              >
                Clientes
              </Link>
            </Box>
          </Box>

          <Box className={classes.menuItem}>
            <Box display='flex' alignItems='center' className={classes.mainLink}>
              <LogoutSvg />
              <Link href='/auth/login' onClick={(e) => { e.preventDefault(); navigate('/auth/login') }}>
                CERRAR SESIÓN
              </Link>
            </Box>
          </Box>
        </Box>

        <Hidden smDown>
          <Box className={classes.footer} textAlign='center' mt='auto'>
            <img src={Logo} alt="Logo" />
          </Box>
        </Hidden>
      </Box>
    </Box>
  )
}

export default Sidebar
