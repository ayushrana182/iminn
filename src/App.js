import React from "react"
import SignInSide from "./components/Login"
import {ThemeProvider} from "@material-ui/core";
import theme from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>

      <SignInSide/>
    </ThemeProvider>
  
  );
}

export default App;
