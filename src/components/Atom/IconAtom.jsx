import { IconButton, Typography } from "@mui/material";
import React from "react";
import { Colors } from "./Colors";

export default function IconAtom({ entries, handleChange, testid="footer-entries-button", value }) {
    return (
        <IconButton
            data-testid={testid}
            aria-label="entries"
            onClick={() => handleChange(value)}
            size="small"
            sx={{
                backgroundColor: entries === value && Colors.blue,
                borderRadius: 2,
                "&:focus" : {
                    outline: "none",
                }
            }}
        >
            <Typography
                sx={{
                    backgroundColor: "initial",
                    borderRadius: "initial",
                    color: entries === value ? Colors.white : Colors.gray,
                    fontSize: "15px",
                    paddingY: 0.2,
                    paddingX: value === 8 ? 1 : 0.5,
                    "&:hover" : {
                        color: Colors.blue,    
                    }
                }}
            >
                {value}
            </Typography>
            
        </IconButton>

    )
}
