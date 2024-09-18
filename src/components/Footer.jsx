import { AppBar, Box, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

export default function Footer({ talentData }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position={ "fixed" }  sx={{ top: "auto", bottom: 0,  backgroundColor:"#FFFFFF", color: "black"}}>
                <Toolbar>
                    <Box
                        display="flex"
                        justifyContent="center"
                        width= "100%"
                    >
                        <Typography>
                            2022 - Talent Management 79
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}