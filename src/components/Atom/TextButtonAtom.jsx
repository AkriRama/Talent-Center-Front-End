import React from "react";
import { Button, Typography } from "@mui/material";
import { Colors } from "./Colors";

export default function TextButtonAtom({ handleClickDialog, isMd = false, label, testid="text-button-element" }) {
    return (
        <Button 
            data-testid={testid}
            disabled={isMd}
            onClick={handleClickDialog}
            style={{ 
                border: "none",
                minWidth: 'auto', 
                padding: 0,
                textTransform: 'none',
            }} 
        >
            <Typography style={{ fontSize: "1em", color: Colors.darkgrey, margin: 0 }}>
                {label}
            </Typography>
        </Button>
    )
}
