import React from "react";
import { Box, Typography } from "@mui/material";

export default function BoxDetailAtom({ children, label, testid="box-detail-element", value }) {
    return (
        <Box data-testid={testid}>
            <Typography className="customTitle">
                {label}
            </Typography>
            { children ? (
                children
            ) : (
                <Typography>
                    {value}
                </Typography>
            )}
        </Box>
    )
}