import { Box, Typography } from "@mui/material";
import IconAtom from "./IconAtom";
import React from "react";

export default function Entries({ entries, handleChange, testid="footer-entries" }) {
    return (
        <Box>
            <Box data-testid={testid} display="flex" alignItems="center" gap={1}>
                <Typography
                    sx={{
                        color: "#7867885",
                        fontWeight: "400",
                        fontSize: "16px",
                    }}
                >
                    Entries
                </Typography>
                <IconAtom entries={entries} handleChange={handleChange} value={8} />
                <IconAtom entries={entries} handleChange={handleChange} value={16} />
                <IconAtom entries={entries} handleChange={handleChange} value={48} />
            </Box>
        </Box>
    )
}
