const loginPageStyle = theme => ({
  root: {
    flexGrow: 1,
    minHeight: "800px"
  },
  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
    alignItems: "center"
  },
  header: {
    margin: "none",
    padding: "30px",
    backgroundColor: "#153255",
    borderRadius: "0px",
    textAlign: "center !important",
    color: "white",
    fontSize: "2em"
  },
  logo: {
    hight: "43px",
    width: "150px",
    display: "block"
  },
  migrationTool: {
    marginTop: "30px"
  },
  report: {
    marginTop: "30px",
    marginLeft: "10px"
  },
  cardHeader: {
    color: "white",
    backgroundColor: "#FF645C",
    hight: "20px",
    textAlign: "center"
  },
  button: {
    marginBottom: "1em",
    height: "50px"
  },
  picker: {
    margin: "2em",
    padding: "0.5em",
    border: "1px solid #FF645C"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit * 2,
  },
  successBanner: {
    margin: "none",
    padding: "20px",
    backgroundColor: "#51A009",
    borderRadius: "0px",
    textAlign: "center !important",
    color: "white",
    fontSize: "1em"
 },
  noTokenBanner: {
    margin: "none",
    padding: "20px",
    backgroundColor: "#FF1237",
    borderRadius: "0px",
    textAlign: "center !important",
    color: "white",
    fontSize: "1em"
 },
 input: {
   width: "80%",
   color: "white",
   backgroundColor: "#FF1237",
   border:"none"
 },
});

export default loginPageStyle;
