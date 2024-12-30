import React,{ useState } from "react";
import "./Header.css";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton'

const Header = () => {

  return (
    <>
    <div>
        <h1>HALLO, APA YANG MAU ANDA PELAJARI?</h1>
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
            >
                {/* <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Cari "
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton> */}
        </Paper>
    </div>
    </>
  );
};

export default Header;
