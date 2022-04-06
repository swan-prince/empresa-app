import { Theme } from "@material-ui/core"

const detailStyles = (theme: Theme) => ({
  contentSection: {
    padding: '36px 102px 100px',
    [theme.breakpoints.down('sm')]: {
      padding: '32px 24px 40px'
    }
  },
  contents: {
    maxWidth: '1100px'
  },
  infos: {
    marginBottom: '38px',
    paddingLeft: '14px',
    '& h3': {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#000000'
    },
    '& h4': {
      fontSize: '18px',
      lineHeight: '27px',
      color: '#000000',
      marginBottom: '20px'
    },
    '& p': {
      fontSize: '14px',
      color: '#141416',
      lineHeight: '24px'
    },
    [theme.breakpoints.down('xs')]: {
      '& h3': {
        fontSize: '20px'
      }
    }
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap' as const
  },
  detailCard: {
    width: 'calc(50% - 15px)',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(50% - 12px)'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: '24px'
    }
  }
})

export default detailStyles
