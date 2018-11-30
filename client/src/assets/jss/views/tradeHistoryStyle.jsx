const tradeHistoryStyle = theme =>({
  root: {
    width: '90%',
    maxWidth: "600px",
    margin: "auto",
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    padding: "10px",

  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: "#FFF3E5",
    },
  },
});


export default tradeHistoryStyle;
