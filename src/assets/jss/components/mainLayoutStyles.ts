import { Theme } from "@material-ui/core"

const mainLayoutStyles = (theme: Theme) => ({
  wrapper: {

  },
  sidebarWrapper: {
    width: '240px',
    left: '0',
    top: '0',
    height: "100vh"    
  },
  contentSection: {
    width: 'calc(100% - 240px)',
    marginLeft: '240px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      width: '100%'
    }
  },
  drawer: {
    '& .MuiDrawer-paper': {
      width: '240px',
      backgroundColor: 'transparent',
      boxShadow: 'none'
    }
  },
  backTopBtn: {
    position: 'fixed' as const,
    backgroundColor: 'rgba(25, 39, 66, 0.8) !important',
    bottom: '20px',
    right: '20px'
  }
})

export default mainLayoutStyles
