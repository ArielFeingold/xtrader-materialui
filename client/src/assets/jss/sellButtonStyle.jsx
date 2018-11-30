const sellButtonStyle = theme =>({
  paper: {
    position: 'static',
    margin: 'auto',
    marginTop:'2em',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
  },
  formHeader: {
    backgroundColor:"#48AAB8",
    textAlign: "center",
    padding: "0.55em",


  },
  form: {
    border: "1px solid #D3AE36",
    padding: "0.55em",
  }
});


export default sellButtonStyle;
