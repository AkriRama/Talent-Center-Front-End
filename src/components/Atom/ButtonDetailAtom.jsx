import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { Colors } from "./Colors";

export default function ButtonDetailAtom({ handleClick, isProfileData, label, testid="button-detail-element"}) {
    return (
        <Box height="50px"  justifyContent="space-between" data-testid={testid}>
            <Button onClick={handleClick} data-testid="detail-button-element">
                <Typography>
                    {label}
                </Typography>
            </Button>
            { label === "Profile" ? 
                isProfileData ? 
                    <Divider style={{ border: "1px solid", borderColor: Colors.blue }} ></Divider> : null 
                : isProfileData ? 
                    null : <Divider style={{ border: "1px solid", borderColor: Colors.blue }} ></Divider>
            }
        </Box>
    )
}