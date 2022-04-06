import { Theme } from "@material-ui/core"

const contactEmailDialogStyles = (theme: Theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiBackdrop-root': {
      backgroundColor: '#23262F'
    }
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: '20px',
    maxWidth: '448px',
    width: '90vw',
    outline: 'none !important',
    [theme.breakpoints.down('xs')]: {
      borderRadius: '16px',
    }
  },
  modalContent: {
    padding: '40px 32px 30px',
    '& h3': {
      fontSize: '28px',
      fontWeight: 'bold',
      lineHeight: '40px',
      color: '#23262F'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '30px 16px 20px',
      '& h3': {
        fontSize: '20px'
      }
    }
  },
  closeBtn: {
    position: 'absolute' as const,
    top: '32px',
    right: '32px',
    border: '2px solid #E6E8EC',
    padding: '7px',
    '& .MuiSvgIcon-root': {
      color: '#23262F'
    },
    [theme.breakpoints.down('xs')]: {      
      right: '16px',
      padding: '2px'
    }
  },
  sendBtn: {
    '& button': {
      width: '100%'
    }
  },
  saveCheckbox: {
    marginBottom: '40px',
    '& .MuiFormControlLabel-label': {
      fontSize: '14px',
      lineHeight: '21px',
      color: '#777E90'
    },
    '& .Mui-checked .MuiSvgIcon-root': {
      color: '#3772FF'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '24px'
    }
  }
})

export default contactEmailDialogStyles
