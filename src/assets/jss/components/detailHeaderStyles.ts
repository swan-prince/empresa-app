import { Theme } from "@material-ui/core"

const detailHeaderStyles = (theme: Theme) => ({
  header: {
    paddingLeft: '30px',
    paddingRight: '30px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '24px',
      paddingRight: '24px'
    }
  },
  contents: {
    borderBottom: '1px solid #E6E8EC',
    padding: '46px 20px 20px 16px',
    '& h6': {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#23262F'
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '24px',
      paddingBottom: '20px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '20px 0 16px',
      flexDirection: 'column',
      alignItems: 'baseline'
    }
  }

})

export default detailHeaderStyles
