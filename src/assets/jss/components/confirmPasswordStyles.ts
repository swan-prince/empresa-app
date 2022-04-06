import { Theme } from "@material-ui/core"

const confirmPasswordStyles = (theme: Theme) => ({
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
    outline: 'none !important'
  },
  modalContent: {
    padding: '40px 32px 96px',
    '& h3': {
      fontSize: '28px',
      fontWeight: 'bold',
      lineHeight: '40px',
      color: '#23262F'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '30px 16px 96px',
      '& h3': {
        fontSize: '20px'
      }
    }
  },
  fileIcon: {
    width: '48px',
    height: '48px',
    backgroundColor: '#E6E8EC',
    borderRadius: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20px'
  },
  dataLine: {
    marginTop: '25px',
    '& h6': {
      fontSize: '16px',
      color: '#23262F',
      marginBottom: '5px',
      fontWeight: '500'
    },
    '& p': {
      color: '#777E90',
      fontSize: '12px'
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
      right: '16px'
    }
  }
})

export default confirmPasswordStyles
