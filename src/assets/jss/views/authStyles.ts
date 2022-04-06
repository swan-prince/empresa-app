import { Theme } from "@material-ui/core"

const authStyles = (theme: Theme) => ({
  note: {
    color: '#23262F',
    marginBottom: '29px',
    fontWeight: 500 as const
  },
  company: {
    marginBottom: '30px'
  },
  loginPassword: {
    marginBottom: '15px'
  },
  forgotLink: {
    marginBottom: '53px',
    '& a': {
      fontSize: '14px',
      lineHeight: '24px',
      color: '#3772FF',
      textDecoration: 'underline'      
    }
  },
  enterBtn: {
    [theme.breakpoints.down('xs')]: {
      width: '100% !important'
    }
  }
})

export default authStyles
