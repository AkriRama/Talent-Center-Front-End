import React from "react";
import { Box, Grid, Icon, Typography } from "@mui/material";
import { Colors } from "./Colors";

export default function BoxStatisticAtom({ label, testid="statistic-element", value }) {
    return (
        <Box backgroundColor={Colors.lightBlue} borderRadius={2} p={3} data-testid={testid}>
            <Grid item
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Grid item>
                    <Typography className="customTypo">{label}</Typography>
                    <Typography fontWeight={700}>{value}</Typography>
                </Grid>
            </Grid>

        </Box>
    )
}