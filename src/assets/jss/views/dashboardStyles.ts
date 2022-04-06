import { Theme } from "@material-ui/core"

const dashboardStyles = (theme: Theme) => ({
  wrapper: {
    padding: '90px 165px 50px',
    '& h1': {
      fontSize: '40px',
      fontWeight: 'bold',
      color: '#23262F',
      '& span': {
        color: '#ADB1C0'
      }
    },
    [theme.breakpoints.down('sm')]: {
      padding: '24px 24px 42px',
      '& h1': {
        fontSize: '34px'
      }
    }
  },
  contents: {
    maxWidth: '736px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'unset'
    }
  },
  dateTab: {
    marginTop: '33px',
    marginBottom: '24px',
    '& .MuiButton-root': {
      fontSize: '14px',
      textTransform: 'none',
      color: '#23262F',
      fontWeight: '600',
      borderColor: '#E6E8EC',
      borderWidth: '2px',
      borderLeft: '0',
      padding: '14px 24px',
    },
    '& .MuiButton-root:first-child': {
      borderLeft: '2px solid #E6E8EC',
      borderTopLeftRadius: '12px',
      borderBottomLeftRadius: '12px'
    },
    '& .MuiButton-root:last-child': {
      borderTopRightRadius: '12px',
      borderBottomRightRadius: '12px'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '24px'
    },
    [theme.breakpoints.down('xs')]: {
      '& .MuiButtonGroup-root': {
        width: '100%'
      },
      '& .MuiButton-root': {
        width: '25%',
        height: '46px'
      }
    }
  },
  activeTab: {
    backgroundColor: '#00847F !important',
    color: 'white !important'
  },
  cardList: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap'
    }
  },
  card: {
    width: 'calc(50% - 16px)',
    border: '1px solid #E6E8EC',
    borderRadius: '16px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: '10px'
    }
  },
  cardContent: {
    padding: '16px 16px 12px',
    '& > p': {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#B1B5C3',
      marginTop: '24px',
      marginBottom: '12px'
    },
    '& h5': {
      fontSize: '80px',
      color: '#23262F',
      lineHeight: '75px'
    }
  },
  cardImg: {
    background: '#192742',
    borderRadius: '8px',
    height: '256px'
  },
  cardChart: {
    height: '256px',
    backgroundColor: '#1FBBC2',
    borderRadius: '8px',
  },
  detailBtn: {
    width: '175px',
    fontSize: '14px',
    marginTop: '16px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '26px',
      width: '100%'
    }
  }
})

export default dashboardStyles
