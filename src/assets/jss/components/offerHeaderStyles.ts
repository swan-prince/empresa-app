import { Theme } from "@material-ui/core"

const offerHeaderStyles = (theme: Theme) => ({
  header: {
    padding: '47px 0 20px',
    borderBottom: '1px solid #E6E8EC',
    width: 'calc(100% - 60px)',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 0 16px',
      width: 'calc(100% - 32px)'
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'baseline'
    }
  },
  dropdown: {
    '& .MuiButtonBase-root': {
      color: '#23262F',
      fontSize: '18px',
      fontWeight: 'bold',
      lineHeight: '24px',
      padding: '10px 15px',
      borderRadius: '50px'
    },
    '& .MuiSvgIcon-root': {
      color: '#777E90'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '12px',
      '& .MuiButtonBase-root': {
        fontSize: '14px'
      }
    }
  },
  
})

export default offerHeaderStyles
