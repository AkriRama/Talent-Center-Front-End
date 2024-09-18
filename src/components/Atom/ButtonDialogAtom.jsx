import React from "react";
import { Button, Typography } from "@mui/material";
import { Colors } from "./Colors";

export default function ButtonDialogAtom({ handleClose, handleSuccesStatus, label, reason, talentRequestId, testid="button-dialog-element" }) {
    return (
         <Button data-testid={testid} variant="contained" fullWidth
            onClick={() => {label === "approve" || label === "reject" ? handleSuccesStatus(label, reason, talentRequestId) : null; handleClose();}}  
            sx={{ 
                backgroundColor: label === "approve" ? Colors.green : label === "reject" ? Colors.red : Colors.lightgrey, 
                color: label === "Batal" && Colors.black,
                // fontWeight: 700, 
            }}
        >
            <Typography textTransform="capitalize">{label}</Typography>
        </Button>
    )
}