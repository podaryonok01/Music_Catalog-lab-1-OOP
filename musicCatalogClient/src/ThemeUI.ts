import { createTheme } from "@mui/material";
import { purple, deepPurple } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
          main: purple[500],
        },
        secondary: {
          main: deepPurple[500],
        },
      },
})