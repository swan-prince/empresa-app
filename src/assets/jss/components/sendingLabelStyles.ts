const sendingLabelStyles = () => ({
  sending: {
    width: '167px',
    height: '48px',
    textTransform: 'none' as const,
    '& .MuiButton-label': {
      color: '#23262F',
      lineHeight: '1',
      fontSize: "16px"
    }
  }
})

export default sendingLabelStyles
