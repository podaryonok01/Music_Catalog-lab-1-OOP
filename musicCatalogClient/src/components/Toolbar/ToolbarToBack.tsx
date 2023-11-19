import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import "../../styles/linkStyle.css"

export const ToolbarToBackComponent = ({ title }:{ title:string }) => {
    const navigate = useNavigate();
    const handler = () => {
        navigate(-1);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar>
            <Toolbar>
                <IconButton onClick={handler} sx={{  mr: 2, color:"inherit" }} > 
                    <ArrowBackIosIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    { title }
                </Typography>
            </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
    </Box>
    )
}