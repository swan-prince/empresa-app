import { Theme } from "@material-ui/core"

const authLayoutStyles = (theme: Theme) => ({
  wrapper: {
    minHeight: '100vh',
    flexWrap: 'wrap' as const,
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset'
    }
  },
  leftSide: {
    width: '51.7%',
    backgroundColor: '#192742',
    paddingTop: '26px',
    overflowY: 'hidden' as const,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingTop: '0'
    }
  },
  logoRow: {
    paddingRight: '40px',
    paddingLeft: '105px',
    '& img:first-child': {
      marginTop: '15px'
    },
    [theme.breakpoints.down('sm')]: {     
      padding: '33px 20px 30px 26px',
      '& img:first-child': {
        marginTop: '0'
      },
      '& img:last-child': {
        width: '82px'
      }
    }
  },
  description: {
    marginTop: '98px',   
    '& p': {
      color: '#777E90',
      fontWeight: 'bold',
      marginBottom: '6px',
      textTransform: 'uppercase'
    },
    '& h3': {
      color: 'white',
      fontSize: '40px',
      fontWeight: 'bold',
      lineHeight: '48px',
      '& span:first-child': {
        color: '#FFC000'
      },
      '& span': {
        color: '#FF357F'
      }
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  footer: {    
    marginTop: 'auto',
    '& img': {
      bottom: '-20px',
      position: 'relative'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  rightSide: {    
    width: '48.3px',
    flex: '1'
  },
  rightContents: {   
    padding: '217px 95px 150px 64px',
    [theme.breakpoints.down('sm')]: {      
      padding: '40px 29px 50px'
    }
  },
  welcomeText: {
    fontWeight: 'bold' as const,
    color: '#777E90',
    marginBottom: '31px',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  }
})

export default authLayoutStyles
