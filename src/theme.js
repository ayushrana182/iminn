import { createMuiTheme } from "@material-ui/core";
import { blue, teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: teal[200],
    },
  },
});
theme.props = {}; //Props

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: "18px",
      width: "326px",
    },
  },
  MuiCheckbox: {
    root: {
      borderRadius: "100%",
    },
  },
  MuiTextField: {
    root: {
      width: "325px",
    },
  },
};

export default theme;
