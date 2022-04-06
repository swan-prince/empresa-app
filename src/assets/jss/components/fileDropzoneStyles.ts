const fileDropzoneStyles = () => ({
  dropzone: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F4F5F6',
    borderRadius: '16px',
    '& p': {
      fontSize: '12px',
      color: '#777E90',
      paddingLeft: '8px',
      paddingRight: '8px'
    },
    '& img': {
      marginBottom: '13px'
    }
  },
  preview: {
    width: '100%',
    height: '100%',
    borderRadius: '16px',
    backgroundColor: '#F4F5F6',
    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: '16px',
    }
  },
  deleteBtn: {
    padding: '0',
    minWidth: 'unset',
    width: '20px',
    height: '20px',
    color: 'white', 
    borderRadius: '0',
    position: 'absolute' as const,
    bottom: '4px',
    right: '8px',
    '& img': {
      borderRadius: '0'
    }
  }
})

export default fileDropzoneStyles
