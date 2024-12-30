import React,{ useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Index from './Index.jsx'
import Header from './Header.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import HomePage from './HomePage';
import Detail from './Detail/Detail.jsx'
import './App.css'
import { AppBar, Toolbar, Typography, IconButton, Switch, Box } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
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
    useEffect(() => {
      document.body.style.backgroundColor = darkMode ? "#121212" : "#ffffff";
      document.body.style.color = darkMode ? "#ffffff" : "#000000";
    }, [darkMode]);

  return (
    <>   
    <ThemeProvider theme={theme}>
          <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
            {/* Navbar */}
            <AppBar position="static" >
              <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                
                {/* <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> */}
                  <Typography variant="h6" component="div">
                    Kalkulus
                  </Typography>
                {/* </Link> */}
               
                <IconButton sx={{ ml: 1 }} color="inherit">
                  {darkMode ? <Brightness4 /> : <Brightness7 />}
                </IconButton>
                <Switch checked={darkMode} onChange={handleModeChange} />
              </Toolbar>
            </AppBar>
    
            {/* Main Content */}
            {/* <Header /> */}
            <Router>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/detail" element={<Detail />} />
              </Routes>
            </Router>
            {/* <Index /> */}
          </Box>
        </ThemeProvider>
        
    </>
  )
}

export default App
