const sidebarStyles = () => ({
  sidebar: {
    backgroundColor: '#192742',
    height: "100%",
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',    
  },
  contents: {
    padding: '40px 0',
    height: 'calc(100% - 80px)'
  },
  header: {
    width: 'fit-content',
    marginBottom: '50px',
    '& .MuiAvatar-root': {
      width: '55px',
      height: '55px',
      backgroundColor: 'white'
    },
    '& > p': {
      fontSize: '14px',
      lineHeight: '32px',
      color: '#B1B5C3',
      marginTop: '8px'
    }
  },
  avatar: {
    '& .MuiIconButton-root': {
      padding: '0',
      position: 'absolute',
      bottom: '-7px',
      right: '-7px'      
    }
  },
  menuItem: {    
    marginBottom: '5px'
  },
  mainLink: {
    padding: '12px',
    '& svg': {
      marginRight: '13px',
      fill: '#777E90'
    },
    '& a': {
      color: '#B1B5C3',
      fontSize: '14px',
      fontWeight: '700',
      textDecoration: 'none !important',
      textTransform: 'uppercase',      
    },
    '&:hover': {
      '& svg': {
        fill: 'white'
      },
      '& a': {
        color: 'white'
      }
    }
  },
  sublinks: {
    marginTop: '5px',    
    '& a': {
      padding: '12px 0 12px 49px',
      display: 'block',
      color: '#B1B5C3',
      fontSize: '14px',
      marginBottom: '5px',
      textDecoration: 'none !important',
      '&:hover': {
        color: 'white'
      }
    }
  },
  active: {
    backgroundColor: 'rgba(31,187,194,0.1)',
    color: 'white !important',
    '& a': {
      color: 'white'
    },
    '& svg': {
      fill: 'white'
    }
  },
  footer: {

  }
})

export default sidebarStyles
