import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import { Paper, Typography, Button, Box, InputBase, IconButton, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5 },
    }),
  };



export default function ResponsiveGrid() {
    const theme = useTheme();
    const cards = [
        { id: "1", title: "Persamaan Linear", slug: "persamaan-linear" },
        { id: "2", title: "Limit", slug: "limit" },
        { id: "3", title: "Turunan", slug: "turunan" },
        { id: "4", title: "Integral", slug: "integral" },

      ];
  return (
    <>
    {/* <Container maxWidth="sm"> */}
    <div>
        <h1>HALLO, APA YANG MAU ANDA PELAJARI?</h1>
        {/* <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
            > */}
                {/* <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Cari "
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton> */}
        {/* </Paper> */}
    </div>
    <div style={{marginTop: '100px'}}>
        {/* <h2>Explore</h2> */}
        <Grid container  spacing={{ xs: 3, md: 3 }} justifyContent="center"  columns={{ md: 12 }} style={{ marginTop: "20px" }}>
            {cards.map((card, index) => (
                <Grid item  size={{ md: 6 }} key={index}>
                
                    <motion.div
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                    >
                        <Link 
                         to="/detail"
                         state={{ title: card.slug }} // Properti state tetap digunakan
                         key={card.id}
                         style={{ textDecoration: "none" }}
                        > 
                            <Paper
                            elevation={3}
                            style={{
                                padding: "20px",
                                borderRadius: "10px",
                                textAlign: "center",
                                backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#eaf8f4",
                            }}
                            >
                            <Typography variant="h6" gutterBottom>
                                {card.title}
                            </Typography>
                            </Paper>
                        </Link>
                    </motion.div>
                </Grid>
            ))}
        </Grid>
    </div>
    {/* </Container> */}
    </>
  );
}
