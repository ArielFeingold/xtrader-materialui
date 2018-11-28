const loginPageStyle = theme =>({
  root: {
    flexGrow: 1,
    marginTop: "4em"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.primary,
    maxWidth: "500px",
    margin: "auto",
    marginTop:"0"
  },
  button: {
    width: "50%",
    margin: "auto",
    marginTop: "2em",
    height: "3em"
  },
  errorMessage: {
    marginTop:"1em",
    color:"red"
  },
  header: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.textPrimary,
    maxWidth: "500px",
    margin:"auto",
    background: "#48AAB8",
  }
});


export default loginPageStyle;
