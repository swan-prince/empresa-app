import { Theme } from "@material-ui/core"

const clientsStyles = (theme: Theme) => ({
  wrapper: {
    padding: '50px 92px 90px',
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
    maxWidth: '1150px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px',
      maxWidth: 'unset'
    }
  },
  dataTable: {
    
  },
  filters: {    
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap'
    }
  },
  filterInput: {
    paddingLeft: '14px',
    paddingRight: '14px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '12px',
      paddingLeft: '10px',
      paddingRight: '10px',
    }
  },  
  tableBody: {

  },
  dataRow: {
    backgroundColor: '#F4F5F6',
    paddingTop: '18px',
    paddingBottom: '18px',
    borderRadius: '8px',
    marginBottom: '5px',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      paddingTop: '10px',
      paddingBottom: '10px',
      marginBottom: '24px'
    }
  },
  dataCell: {
    paddingLeft: '27px',
    paddingRight: '30px',
    '& p': {
      fontSize: '14px',
      lineHeight: '24px',
      color: '#141416'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '8px 0',
      paddingLeft: '24px',
      paddingRight: '24px'
    }
  },
  detailBtn: {
    padding: '0',
    minWidth: 'unset',
    color: '#777E90'
  },
  pagination: {
    marginTop: '50px'
  }  
})

export default clientsStyles
