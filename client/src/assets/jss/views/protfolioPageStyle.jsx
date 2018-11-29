const protfolioPageStyle = theme =>({
  root: {
    flexGrow: 1,
    margin: "2em 1em 2em 1em"
  },
  paper: {
    width:"100%",
    padding: theme.spacing.unit,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  list: {
    margin:"0"
  },
  header: {
    backgroundColor:"#48AAB8",
    color:"#fff",
    marginTop: "0"
  },
  formHeader: {
    backgroundColor:"#48AAB8",
    textAlign: "center",
    padding: "0.55em"
  },
  subtitle1: {
    color: "#fff",
  },
  userInfo: {
    marginTop:"0.5em",
    height: "50px",
    padding: "12px 0px 10px 20px"
  },
  errorMessage: {
    marginTop:"1em",
    color:"red"
  },
});


export default protfolioPageStyle;
