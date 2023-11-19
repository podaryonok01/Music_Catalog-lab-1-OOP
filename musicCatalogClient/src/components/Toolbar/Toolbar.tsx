import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import { Link } from "react-router-dom";
import "../../styles/linkStyle.css"

export const ToolbarComponent = ({ title }:{ title:string }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar>
            <Toolbar>
                <Link className="link-router" to="/" >
                    <MusicVideoIcon sx={{  mr: 2 }} />
                </Link>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    { title }
                </Typography>
            </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
    </Box>
    )
}