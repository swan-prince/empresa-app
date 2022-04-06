import React, { FC } from 'react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

import { makeStyles } from '@material-ui/core'

import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';

import CustomButton from 'components/CustomButton';
import MailSvg from 'components/SvgIcons/MailSvg'

import { RequestItem } from 'typings'

import styles from 'assets/jss/views/requestStyles'

const useStyles = makeStyles(styles)

interface Props {
  request: RequestItem;
  selected: boolean;
  handleSelectOne: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleOpenContact: () => void;
}

const DataRow: FC<Props> = (props) => {

  const classes = useStyles()
  const navigate = useNavigate()

  const { request, selected, handleSelectOne, handleOpenContact } = props

  return (
    <Box className={classes.dataRow}>
      <Box className={clsx(classes.checkbox)} width='66px'>
        <Checkbox
          checked={selected}
          color="primary"
          onChange={(e) => handleSelectOne(e, request.id)}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <CustomButton
          variant='outlined'
          startIcon={<VisibilityOutlinedIcon />}
          onClick={() => navigate(`/admin/requests/${request.id}`)}
        >
          Ver detalle
        </CustomButton>
      </Box>
      <Box width='calc((100% - 122px) * 0.15)' className={classes.dataCell}>
        <InputLabel>ID SOLICITUD</InputLabel>
        <Typography variant='body1'>
          <VisibilityOutlinedIcon onClick={() => navigate(`/admin/requests/${request.id}`)} />
          {request.id}
        </Typography>
      </Box>
      <Box width='calc((100% - 122px) * 0.20)' className={classes.dataCell}>
        <InputLabel>
          Nombre cliente
        </InputLabel>
        <Typography variant='body1'>
          {request.clientName}
        </Typography>
      </Box>
      <Box width='calc((100% - 122px) * 0.12)' className={classes.dataCell}>
        <InputLabel>
          Fecha solicitud
        </InputLabel>
        <Typography variant='body1'>
          {request.applicationDate}
        </Typography>
      </Box>
      <Box width='calc((100% - 122px) * 0.1)' className={classes.dataCell}>
        <InputLabel>
          ESTADO
        </InputLabel>
        <Box
          className={clsx(classes.condition, {
            [classes.contacted]: request.condition === 'CONTACTADO',
            [classes.passed]: request.condition === 'APROBADO',
            [classes.rejected]: request.condition === 'RECHAZADO'
          })}
        >
          <Typography variant='body1'>
            {request.condition}
          </Typography>
        </Box>
      </Box>
      <Box width='calc((100% - 122px) * 0.1)' className={clsx(classes.dataCell)}>
        <InputLabel>
          Vence EN
        </InputLabel>
        <Typography
          variant='body1'
          className={clsx(classes.textDanger, { [classes.noExpaire]: request.expiresIn === '-' })}
        >
          {request.expiresIn}
        </Typography>
      </Box>
      <Box width='calc((100% - 122px) * 0.23)' className={clsx(classes.dataCell)}>
        <InputLabel>
          OFERTA
        </InputLabel>
        <Box className={classes.offerDesc}>
          <Typography variant='body1' >
            {request.offer}
          </Typography>
        </Box>
      </Box>
      <Box width='56px' className={classes.mailBtn} display='flex' justifyContent='end'>
        <Button
          onClick={handleOpenContact}
          disabled={request.expiresIn === '-'}
          className={clsx({ [classes.disableMail]: request.expiresIn === '-' })}
        >
          <MailSvg />
          <span>Contactar</span>
        </Button>
      </Box>
    </Box>
  )
}

export default DataRow
