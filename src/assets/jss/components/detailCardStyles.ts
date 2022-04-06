const detailCardStyles = () => ({
  card: {
    padding: '22px 40px',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #E6E8EC',
    boxShadow: '0px 40px 40px #E6E8EC'
  },
  info: {
    marginBottom: '20px',
    '& .MuiFormLabel-root': {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#B1B5C3',
      marginBottom: '4px',
      textTransform: 'uppercase'
    },
    '& p': {
      fontSize: '18px',
      color: '#141416',
      lineHeight: '24px'
    }
  },
  condition: {
    padding: '7px 12px 5px',
    backgroundColor: '#3772FF',
    borderRadius: '8px',
    width: 'fit-content',
    '& p': {
      color: 'white',
      fontSize: '10px',
      textTransform: 'uppercase',      
      fontWeight: 'bold',
      lineHeight: '1.5'
    }
  },
  offer: {
    padding: '4px 9px 5px',
    borderRadius: '8px',
    backgroundColor: '#B1B5C3',
    maxWidth: '270px',
    '& p': {
      fontSize: '12px',
      lineHeight: '14px',
      color: 'white'
    }
  },
  contactBtn: {
    marginTop: '26px'
  },
  contacted: {
    backgroundColor: '#FFC000'
  },
  passed: {
    backgroundColor: '#1CBCC2'
  },
  rejected: {
    backgroundColor: '#C4C7CF'
  }
})

export default detailCardStyles
