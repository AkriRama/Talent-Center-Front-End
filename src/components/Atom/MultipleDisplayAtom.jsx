import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function MultipleDisplayAtom({ data, label, testid="multiple-display-element" }) {
    return (
        <Box sx={{ width: "100%"}} data-testid={testid}> 
            <Typography className="customTitle">
                {label}
            </Typography>
            <Grid container direction="row" spacing={2}>
                {data.map((data, index) => (
                    <Grid item
                        display="flex"
                        flexDirection="row"
                        key={index}
                    >
                        <Box border="1px solid" borderRadius={1} paddingX={3} key={index}>
                            <Typography>
                                { label === "Skill Set" ? data.skillName : data.positionName}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}