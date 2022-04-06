const buttonStyles = () => ({
  btn: {
    color: "white",
    boxShadow: "none !important",
    fontSize: "16px",
    letterSpacing: "0.34px",
    padding: "14px 0",
    backgroundColor: "#3772FF",
    borderRadius: '50px',
    maxHeight: '48px',
    width: '169px',
    height: '48px',
    "& .MuiButton-label": {
      textTransform: "none",
      fontWeight: '500'
    },
    "&:hover": {
      backgroundColor: "#002b6f",
    },
    '&.Mui-disabled': {
      color: 'white',
      opacity: '0.8'
    }
  },
  outline: {
    border: '2px solid #E6E8EC',
    backgroundColor: 'white !important',
    color: '#23262F',
    padding: '10px 30px',
    width: 'auto'
  },
  text: {
    color: '#777E90',
    padding: '10px 30px',
    width: 'auto',
    backgroundColor: 'white !important',
  }
})

export default buttonStyles
