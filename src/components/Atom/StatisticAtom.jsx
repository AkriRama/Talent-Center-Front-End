import React from "react";
import { Box, Grid } from "@mui/material";
import BoxStatisticAtom from "./BoxStatisticAtom";
import { Colors } from "./Colors";
import { columnRowSX } from "../WrapperJSX";

export default function StatisticAtom({ testid="statistic-box-element", value, value1 }) {
    return (
        <Box data-testid={testid} sx={{ backgroundColor: Colors.white, p: 3}} borderRadius={5}>
            <Grid item sx={columnRowSX}
                gap={2}
            >
                    <Grid item xs={6}>
                        <BoxStatisticAtom label="Total Requested" value={value} testid="box-statistic-request" />
                    </Grid>
                    <Grid item xs={6}>
                        <BoxStatisticAtom label="Project Completed" value={value1} testid="box-statistic-project"/>
                    </Grid>

            </Grid>
        </Box>
    )
}