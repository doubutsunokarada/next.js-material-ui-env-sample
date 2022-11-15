import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2a83a2"
    },
    secondary: {
      main: "#99ff99"
    },
    error: {
      main: red[400]
    }
  },
  typography: {
    fontFamily: ['Arial', 'sans-serif'].join(',')
  }
})