import { Theme } from "@material-ui/core"

const profileStyles = (theme: Theme) => ({
  wrapper: {
    padding: '50px 160px 90px',
    '& h1': {
      fontSize: '42px',
      fontWeight: 'bold',
      lineHeight: '56px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '32px 24px 40px',
      '& h1': {
        fontSize: '34px'
      }
    }
  },
  contents: {
    marginTop: '43px',
    maxWidth: '900px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px',
      maxWidth: 'unset'
    }
  },
  logoUpload: {
    '& h6': {
      fontSize: '16px',
      fontWeight: '400',
      color: '#23262F',
      marginBottom: '5px'
    },
    '& > p': {
      color: '#777E90',
      fontSize: '12px',
      marginBottom: '16px'
    }
  },
  fileUpload: {
    height: '182px'
  },
  enterBtn: {

  },
  footerBtns: {
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap' as const,
      '& .MuiButtonBase-root': {
        width: '100%'
      }
    }
  }
})

export default profileStyles
