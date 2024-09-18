import React from "react";
import { IconButton } from "@mui/material";
import { Colors } from "./Colors";
import { BorderColor, Visibility } from "@mui/icons-material";
export default function IconButtonAtom({ handleNavigate, label, talentId, testid="icon-button-element" }) {
    return (
        <IconButton 
            data-testid= {testid}
            onClick={() => handleNavigate(`/${label}-talent/${talentId}`)} 
            style={{ 
                color: label === "detail" ? Colors.darkgrey : Colors.blue ,
            }}
        >
            {label === "detail" ? <Visibility data-testid="visibility" /> : <BorderColor data-testid="bordercolor" />}
        </IconButton>
    )
}