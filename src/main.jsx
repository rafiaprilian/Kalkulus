import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Index from './Index.jsx'
import Header from './Header.jsx'
import Card from './Card.jsx'
import theme from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
