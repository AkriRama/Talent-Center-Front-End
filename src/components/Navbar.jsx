import { AccountCircle, ArrowCircleLeft, Assignment, BusinessCenter, KeyboardArrowDown, Menu, Notifications, PeopleAlt, SpaceDashboard, Storage } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, Button, createTheme, Drawer, Hidden, IconButton, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../publics/img/logo.png"
import { Colors } from "./Atom/Colors";

export default function Navbar({ isTalentList = false, isTalentApprovalList = false, setOpenBar, }) {
    const navigate = useNavigate();
    const theme = createTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    const [isOpen, setIsOpen] = useState();
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
        setOpenBar(prevOpenBar => !prevOpenBar);
    };

    const handleNavigate = (nav) => {
        navigate(nav);
    };

    useEffect(() => {
        if(isDesktop) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [isDesktop]);

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{ bgcolor: "#FFFFFF", boxShadow: "1" }} >
                <Toolbar>
                    <Box>
                            <IconButton onClick={toggleDrawer}>
                                <Box>
                                    <Menu />
                                </Box>
                            </IconButton>
                            <Box component="div" display={{ xs:"flex", md: "flex"}}>
                                <Drawer
                                    anchor="left"
                                    open={isOpen}
                                    onClose={toggleDrawer}
                                    variant= "persistent"
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: "#FFFFFF",
                                            width: { xs: "75vw", md:"17.6vw"},
                                            //270px
                                            height: 100,
                                        }}
                                    >
                                        <Box padding={3}>
                                            <img
                                                src={logo}
                                                width="80%"
                                            />
                                            <Stack 
                                                sx={{
                                                    "& .MuiButton-root" : {
                                                        color: "#586A84",
                                                        fontWeight: "700",
                                                        justifyContent: "flex-start",
                                                        padding: 2,
                                                        textAlign: "start",
                                                        textTransform: "capitalize"
                                                    },
                                                    "& .customOnPage" : {
                                                        backgroundColor:  Colors.darkblue,
                                                        color: "#FFFFFF",
                                                    },
                                                    "& :hover.MuiButton-root" : {
                                                        backgroundColor: Colors.darkblue,
                                                        color: "#FFFFFF",
                                                        borderRadius: 0,
                                                    }
                                                    
                                                }}
                                            > 
                                                <Button startIcon={ <SpaceDashboard />}>
                                                    Dashboard
                                                </Button>
                                                <Button 
                                                    className={ isTalentList ? "customOnPage" : ""} 
                                                    onClick={() => handleNavigate("/daftar-talent")} 
                                                    startIcon={ <PeopleAlt />} 
                                                >
                                                    Daftar Talent
                                                </Button>
                                                <Button startIcon={ <BusinessCenter />}>
                                                    Daftar Client
                                                </Button>
                                                <Button 
                                                    className={ isTalentApprovalList ? "customOnPage" : ""}
                                                    onClick={() => handleNavigate("/daftar-persetujuan-talent")} 
                                                    startIcon={ <Assignment />}
                                                >
                                                    Daftar Persetujuan Talent
                                                </Button>
                                                <Button startIcon={ <AccountCircle />} endIcon={ <KeyboardArrowDown /> }>
                                                    Kelola User
                                                </Button>
                                                <Button startIcon={ <Storage />} endIcon={ <KeyboardArrowDown /> }>
                                                    Kelola Master Data
                                                </Button>
                                            </Stack>
                                            <Box paddingTop= {18} display="flex" justifyContent="center" >
                                                <Button
                                                    onClick={toggleDrawer} 
                                                    startIcon={ <ArrowCircleLeft />} 
                                                    sx={{ 
                                                        textAlign:"center", 
                                                        textTransform: "capitalize"}}
                                                >
                                                    Collapse
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>

                                </Drawer>
                            </Box>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                        padding={0}
                        width="100%"
                    >
                        <Box>
                            <Button
                                startIcon={ 
                                    <img
                                        src="https://cdn0-production-images-kly.akamaized.net/z6HymlQZaLlLWprqVaRz-lWXeUU=/0x422:5760x3668/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4018264/original/019930600_1652166761-american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food__1_.jpg"
                                        style={{
                                            width: 30,
                                            objectFit: "cover"
                                        }}
                                    />
                                }
                                sx={{ 
                                    // color: "#FFFFFF", 
                                    color: "black", 
                                    textTransform: "capitalize"
                                }}
                                endIcon = { <KeyboardArrowDown /> }
                            >
                                <Hidden mdDown>English</Hidden>
                            </Button>
                        </Box>

                        <IconButton>
                            <Badge badgeContent={3} color="primary" sx={{
                                "& >MuiBadge-badge" : {
                                    right: -3,
                                    top: 20,
                                }
                            }}>
                                <Notifications color="action" />
                            </Badge>
                        </IconButton>
                        
                        <Hidden mdDown>
                            <Button
                                startIcon={
                                    <Avatar alt="talent 1" src="https://cdn0-production-images-kly.akamaized.net/z6HymlQZaLlLWprqVaRz-lWXeUU=/0x422:5760x3668/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4018264/original/019930600_1652166761-american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food__1_.jpg" />
                                }
                                sx={{ color: "black" }}
                            >
                                <KeyboardArrowDown />
                            </Button>
                        </Hidden>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}