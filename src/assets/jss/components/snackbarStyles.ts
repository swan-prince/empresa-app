const snackbarStyles = () => ({
  alert: {
    width: '90vw',
    maxWidth: '640px',
    borderRadius: '10px',
    backgroundColor: 'rgba(31, 187, 194, 0.2)',
    padding: '33px 26px',
    border: '1px solid rgba(0, 132, 127, 0.2)',
    position: 'relative' as const,
    '& .MuiAlert-message': {
      color: '#008781',
      padding: '0',
      fontSize: '16px',
      lineHeight: '24px'
    },
    '& .MuiAlert-action': {
      margin: '0',
      padding: '0',
      position: 'absolute',
      top: '10px',
      right: '16px'
    }
  },
  closeBtn: {
    padding: '0',
    minWidth: 'unset'
  }
})

export default snackbarStyles
