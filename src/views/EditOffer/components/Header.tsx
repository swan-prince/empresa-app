import React, { FC, useState } from 'react'

import { makeStyles } from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/components/offerHeaderStyles'

const useStyles = makeStyles(styles)

const Header: FC = () => {

  const classes = useStyles()

  const [offer, setOffer] = useState('Oferta 1 Módulo nombre')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (val: string) => {
    setOffer(val)
    setAnchorEl(null);
  };

  return (
    <Box className={classes.header} display='flex' alignItems='center' justifyContent='space-between'>
      <Box className={classes.dropdown}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          endIcon={<ExpandMoreIcon />}
        >
          { offer }
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleClose('Oferta 1 Módulo nombre')}>Oferta 1 Módulo nombre</MenuItem>
          <MenuItem onClick={() => handleClose('Oferta 2 Módulo nombre')}>Oferta 2 Módulo nombre</MenuItem>
          <MenuItem onClick={() => handleClose('Oferta 3 Módulo nombre')}>Oferta 3 Módulo nombre</MenuItem>
        </Menu>
      </Box>

      <CustomButton
        startIcon={<KeyboardArrowLeftIcon />}
        variant='outlined'
      >
        Volver
      </CustomButton>
    </Box>
  )
}

export default Header
