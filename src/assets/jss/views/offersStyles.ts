import { Theme } from "@material-ui/core"

const offersStyles = (theme: Theme) => ({
  contentSection: {
    padding: '37.5px 156px 120px',
    [theme.breakpoints.down('sm')]: {
      padding: '32px 24px 40px',
    }
  },
  contents: {  
    maxWidth: '905px',
    [theme.breakpoints.down('sm')]: {     
      maxWidth: 'unset'
    }
  },
  stateSwitch: {
    marginBottom: '45px',
    '& .MuiFormControlLabel-root': {
      marginLeft: 'auto'
    },
    '& .MuiFormControlLabel-label': {
      fontSize: '16px',
      color: '#23262F',
      fontWeight: '600'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '24px'
    }
  },
  swtichRoot: {
    width: 48,
    height: 24,
    padding: 0,
    margin: '0 8px',
    paddingBottom: '2px'
  },
  switchBase: {
    padding: 0,
    top: '4px',    
    left: '4px',
    '&$checked': {
      transform: 'translateX(24px)',
      color: theme.palette.common.white,
      top: '3px',
      '& + $track': {
        backgroundColor: '#3772FF',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 16,
    height: 16,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
  titleSection: {
    marginBottom: '24px',
    '& h1': {
      color: '#23262F',
      fontSize: '42px',
      fontWeight: 'bold',
      lineHeight: '56px'
    },
    [theme.breakpoints.down('sm')]: {     
      '& h1': {
        fontSize: '34px'
      }
    }
  },
  uploadFileSection: {
    '& h6': {
      color: '#23262F',
      fontSize: '18px',
      lineHeight: '24px',
      marginBottom: '4px'
    }    
  },
  uploadFileLabel: {
    color: '#777E90',
    marginBottom: '10px'
  },
  uploadFileRightLabel: {
    color: '#43C6CC',
    fontSize: "12px"
  },
  fileUploads: {
    marginLeft: '-8px',
    marginRight: '-8px',
    marginTop: '12px',
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      marginBottom: '30px'
    }
  },
  fileUpload: {
    height: '218px',
    width: '25%',
    padding: '0 8px',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(50% - 16px)',
      marginBottom: '16px'
    }
  },
  formSection: {
    '& h6': {
      color: '#23262F',
      marginBottom: '28px'
    }
  },
  footerBtns: {
    marginTop: '40px',
    '& button:first-child': {
      marginRight: '8px'
    },
    [theme.breakpoints.down('xs')]: {
      '& button': {
        marginRight: '0',
        width: '100%'
      },
      '& button:first-child': {
        marginBottom: '12px'
      },
    }
  },
  addOffer: {
    paddingTop: '50px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '32px'
    }
  }
})

export default offersStyles
