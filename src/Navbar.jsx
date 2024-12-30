import React,{ useState } from "react";
import "./Header.css";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import IconButton from '@mui/material/IconButton';
import { AppBar, Toolbar, Typography, IconButton, Switch, Box } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

  // Theme configuration
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#40E0D0", // Tosca for primary color
      },
    },
  });
  const handleModeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
     <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
        {/* Navbar */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
              Kalkulus
            </Typography>
            <IconButton sx={{ ml: 1 }} color="inherit">
              {darkMode ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
            <Switch checked={darkMode} onChange={handleModeChange} />
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            {darkMode ? "Dark Mode is On" : "Light Mode is On"}
          </Typography>
          <Typography variant="body1">
            This is an example of a responsive navbar with dark/light mode toggling using Material-UI.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
    
    </>
  );
};

export default Header;
