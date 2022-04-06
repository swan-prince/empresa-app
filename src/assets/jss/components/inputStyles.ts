const inputStyles = () => ({
  label: {
    fontSize: "12px",
    color: "#B1B5C3",   
    display: 'block',
    fontWeight: 'bold' as const,
    textTransform: 'uppercase' as const
  },
  error: {
    color: "#f44336"
  },
  textField: {
    "& .Mui-error": {
      "& .MuiSvgIcon-root": {
        color: "#f44336"
      }      
    },    
    "& .MuiFormHelperText-root": {
      backgroundColor: "white !important"
    },
    '& .Mui-disabled': {
      '& .MuiOutlinedInput-notchedOutline': {
        backgroundColor: '#f5f7f7',
        border: '0'
      }
    },
    '& .MuiOutlinedInput-root': {
      
      fontSize: '14px',
      color: '#777E90',
      border: '0',
      '& input': {
        paddingTop: '16px',
        paddingBottom: '16px',
        paddingLeft: '16px',
        fontWeight: '500'
      }
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '2px solid #E6E8EC',
      borderRadius: '12px',
    }
  },
  successIcon: {
    color: "#50e3c2"
  },
  success: {
    color: "#50e3c2"
  },
  disabledLabel: {
    color: '#c0c5d2'
  },
  autoTextField: {
    '& .MuiAutocomplete-inputRoot': {
      paddingTop: '1px',
      paddingBottom: '1px',
      paddingLeft: '0'
    },
    '& input.MuiAutocomplete-input': {
      paddingLeft: '14px !important'
    }
  },
  errorAuto: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#f44336'
    }
  },
  subLabel: {
    fontWeight: 400 as const,
    color: '#43C6CC'
  },
  dangerLabel: {
    color: '#EF466F'
  }
})

export default inputStyles
