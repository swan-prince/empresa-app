import { Theme } from "@material-ui/core"

const requestStyles = (theme: Theme) => ({
  wrapper: {
    paddingLeft: '30px',
    paddingRight: '30px',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '24px',
      paddingLeft: '24px'
    }
  },
  header: {
    padding: '36px 6px 12px 16px',
    borderBottom: '1px solid #E6E8EC',
    '& h3': {
      fontSize: "42px",
      fontWeight: 'bold',
      color: '#23262F'
    },
    [theme.breakpoints.down('sm')]: {
      borderBottom: '0',
      flexDirection: 'column',
      alignItems: 'baseline',
      paddingLeft: '0',
      paddingRight: '0',
      '& h3': {
        marginBottom: '8px'
      }
    },
    [theme.breakpoints.down('xs')]: {
      '& h3': {
        fontSize: "34px"
      }
    }
  },
  downloadBtn: {
    backgroundColor: '#EF466F !important'
  },
  contents: {
    paddingTop: '20px',
    paddingBottom: '90px'
  },
  groupAction: {
    width: '200px',
    marginBottom: '34px',
    [theme.breakpoints.down('sm')]: {
      order: '2',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      marginTop: '44px'
    }
  },
  dropdown: {
    '& .MuiFormLabel-root': {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#B1B5C3',
      marginBottom: '9px',
      textTransform: 'uppercase'
    },
    '& .MuiFormControl-root': {
      width: '100%'
    },
    '& .MuiInputBase-root': {
      fontSize: '14px',
      color: '#23262F',
      borderRadius: '12px',
    },
    '& .MuiSelect-root': {
      paddingBottom: '16px',
      paddingTop: '16px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '2px solid #E6E8EC'
    }
  },

  tableSection: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  tableHeader: {
    paddingLeft: '20px',
    paddingRight: '26px',
    marginBottom: '12px',
    [theme.breakpoints.down('sm')]: {
      order: '1',
      flexWrap: 'wrap',
      paddingLeft: '12px',
      paddingRight: '12px'
    }
  },
  tableBody: {
    overflowX: 'auto' as const,
    [theme.breakpoints.down('sm')]: {
      order: '3'
    }
  },
  tableBodyContent: {
    minWidth: '1250px',
    [theme.breakpoints.down('sm')]: {
      minWidth: 'unset'
    }
  },
  offerDropdown: {

  },
  dataLabel: {
    '& .MuiFormLabel-root': {
      color: '#B1B5C3',
      display: 'block',
      fontSize: '12px',
      fontWeight: 'bold',
      textTransform: 'uppercase'      
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  selectAll: {
  
    [theme.breakpoints.down('sm')]: {
      display: 'none !important'
    }
  },
  headerCell: {
    paddingLeft: '10px',
    paddingRight: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '16px',
      paddingLeft: '0',
      paddingRight: '0'
    }
  },  
  checkbox: {
    '& .MuiCheckbox-colorPrimary.Mui-checked': {
      color: '#3772FF'
    },
    '& .MuiButton-outlined': {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '9px',
      '& .MuiButton-outlined': {
        display: 'flex',
        backgroundColor: 'transparent !important',
        '& .MuiSvgIcon-root': {
          color: '#777E90'
        }
      },
    }
  },
  dataRow: {
    backgroundColor: '#F4F5F6',
    borderRadius: '8px',
    paddingLeft: '20px',
    paddingRight: '26px',
    paddingTop: '9px',
    paddingBottom: '6px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '6px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'baseline',
      padding: '16px 20px 30px 16px'
    }
  },
  dataCell: {
    paddingLeft: '10px',
    paddingRight: '10px',
    '& p': {
      fontSize: '14px',
      color: '#141416',
      display: 'flex',
      alignItems: 'center',    
      '& .MuiSvgIcon-root': {
        cursor: 'pointer',
        color: '#777E90',
        marginRight: '10px'
      }
    },
    '& .MuiFormLabel-root': {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0',
      paddingLeft: '42px',
      width: 'calc(100% - 42px)',
      marginBottom: '14px',
      '& p': {
        '& .MuiSvgIcon-root': {
          display: 'none'
        }
      },
      '& .MuiFormLabel-root': {
        display: 'block',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#B1B5C3',
        marginBottom: '4px',
        textTransform: 'uppercase'
      },
    }
  },
  textDanger: {
    color: '#EF466F !important'
  },
  offerDesc: {
    backgroundColor: '#B1B5C3',
    borderRadius: '8px',
    padding: '4px 8px 5px',
    '& p': {
      color: 'white',
      fontSize: '12px',
      lineHeight: '14px'
    }
  },
  mailBtn: {
    '& .MuiButtonBase-root': {
      padding: '0',
      minWidth: 'unset'
    },
    '& .MuiButton-label': {
      '& span': {
        display: 'none'
      },
      '& svg': {
        fill: '#1CBCC2'      
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 46px)',
      marginTop: '10px',
      marginLeft: 'auto',
      '& .MuiButtonBase-root': {
        width: '100%',
        padding: '14px 0',
        backgroundColor: '#00847F',
        borderRadius: '50px',
        color: 'white',
        fontSize: "14px"
      },
      '& .MuiButton-label': {
        '& svg': {
          fill: 'white !important',
          marginRight: '24px'
        },
        '& span': {
          display: 'block !important'
        }
      },
    }
  },
  disableMail: {
    '& .MuiButton-label': {      
      '& svg': {
        fill: '#C4C7CF !important'      
      },
    },
    [theme.breakpoints.down('sm')]: {
      opacity: '0.5',
      '& .MuiButton-label': {      
        '& svg': {
          fill: '#fff !important'      
        },
      },
    }
  },
  condition: {
    padding: '7px 0 5px 0',    
    backgroundColor: '#3772FF',
    borderRadius: '8px',
    width: '80px',
    '& p': {      
      fontSize: '10px',
      color: 'white',
      display: 'flex',
      justifyContent: 'center'
    }
  },
  noExpaire: {
    color: '#777E90 !important'
  },
  contacted: {
    backgroundColor: '#FFC000'
  },
  passed: {
    backgroundColor: '#1CBCC2'
  },
  rejected: {
    backgroundColor: '#C4C7CF'
  },
  conditionDropdown: {
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 46px - 12px)'
    }
  },
  mobileSelectAll: {
    display: 'none',
    '& .MuiCheckbox-colorPrimary.Mui-checked': {
      color: '#3772FF'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      marginTop: '21px'
    }
  },
  tableFooter: {
    marginTop: '40px',
    [theme.breakpoints.down('sm')]: {
      order: '4'
    }
  }
})

export default requestStyles
