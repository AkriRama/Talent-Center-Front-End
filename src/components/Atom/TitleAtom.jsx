import React from "react";
import { Typography } from "@mui/material";
import { TitleAtomSX } from "../WrapperJSX";

export default function TitleAtom({ className="customTitle", fontSize="22px", testid="title-element", title }) {
    return (
        <Typography className={className} 
            data-testid={testid}
            fontSize={fontSize} 
            sx={TitleAtomSX}
        >
           {title}
        </Typography>
    )
}