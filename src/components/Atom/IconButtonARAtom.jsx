import React from "react";
import { Check, Close } from "@mui/icons-material";
import { Colors } from "./Colors";
import { IconButton } from "@mui/material";

export default function IconButtonARAtom({ approvalStatus, data, handleClick, label, testid="icon-button-AR-element" }) {
    return ( 
        <IconButton className="customIB" 
            data-testid={testid}
            disabled={ data.approvalStatus === "On Progress"  ? false : true}
            onClick={() => handleClick(data.talentRequestId)}
            sx={{ backgroundColor: label === "Approve" ? Colors.green : Colors.red , width: 30, height: 30,
                "&:disabled" : {
                    backgroundColor: label === "Approve" ? Colors.green : Colors.red,
                    color: Colors.white,
                    opacity: 0.5,
                }
            }}
        >
           { label === "Approve" ? <Check data-testid="icon-AR-approve" /> : <Close data-testid="icon-AR-reject" /> }
        </IconButton>
    )
}