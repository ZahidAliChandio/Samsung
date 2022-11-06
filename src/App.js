import { Fragment } from "react";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.grey[900],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
};

export default App;
