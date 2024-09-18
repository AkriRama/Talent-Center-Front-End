import { AddCircleOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Colors } from "./Colors";
import React from "react";

export default function ButtonAtom({ handleClick, iconid, numberButton = 1, testid="button-element", textButton }) {
    return (
        <Button 
            data-testid= {testid}
            onClick={handleClick}
            size="small" 
            startIcon={ <AddCircleOutline data-testid= {iconid} />}
            style={{
                backgroundColor: Colors.blue,
                fontSize: "14px",
                textTransform:"capitalize",
            }}
            sx={{
                display: numberButton === 1 ? {xs :"none", md: "flex"} : {xs :"flex", md: "none"},
                width: {xs: "30vw", md: "11vw", lg: "13vw"},
            }}
            variant="contained"
        >
            {textButton}
        </Button>
    )
}