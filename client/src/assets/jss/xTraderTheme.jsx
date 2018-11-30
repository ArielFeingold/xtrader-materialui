import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D4AF37",
      contrastText: "#fff",
      textPrimary: "#fff"
    },
    background: {
      default: "#FAFFCC"
    },
    secondary: {
      main: '#48AAB8'
    }
  },
  typography: {
  useNextVariants: true,
},
})

export default theme;
