// Import Library's Hook
import { createTheme } from "@mui/material/styles";

// Custome Breakpoint Header
export const theme = createTheme({
   breakpoints: {
      values: {
         xs: 0,
         sm: 600,
         md: 980,
         lg: 1200,
         xl: 1536,
      },
   },
   palette: {
      mode: "light",
      primary: {
         main: "#ffffff",
      },
   },
});
