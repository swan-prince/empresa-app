import { Theme } from "@material-ui/core"

const paginationStyles = (theme: Theme) => ({
  pagination: {
    '& button': {
      width: '40px',
      height: '40px',
      borderRadius: '40px',
      color: '#B1B5C3',
      fontSize: '14px'
    },
    '& button[aria-label="Go to next page"]': {
      border: '2px solid #777E90',
      color: '#777E90'
    },
    '& button[aria-label="Go to previous page"]': {
      border: '2px solid #777E90',
      color: '#777E90'
    },
    '& .MuiPaginationItem-page.Mui-selected': {
      background: 'transparent',
      color: '#777E90',
      fontWeight: 'bold',
      textDecoration: 'underline'
    },
    [theme.breakpoints.down('sm')]: {
      '& button': {
        width: '32px',
        height: '32px'
      }
    }
  }
})

export default paginationStyles
