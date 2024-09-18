import React from "react";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Colors } from "./Colors";

export default function ButtonBackAtom({ handleNavigate, testid="button-back-element" }) {
    return (
        <Button 
            data-testid={testid}   
            onClick={handleNavigate} 
            startIcon={ <ArrowBack data-testid="icon-button-back"/> }
            sx={{
                color: Colors.darkgrey,
                fontSize: "16px",
                fontWeight: 500,
                height: "19px",
            }}
        >
            Kembali
        </Button>
    )
}
