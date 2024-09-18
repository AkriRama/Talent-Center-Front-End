import { Box, Divider, Grid, Typography } from "@mui/material";
import { flexCenterJSX } from "../WrapperJSX";

export default function LoadingAtom() {
    return (
        <Box>
            <Grid item>
                <Divider></Divider>
            </Grid>
            <Grid item xs={12} sx={flexCenterJSX} height={50}>
                <Typography textAlign="center">Loading Data...</Typography>
            </Grid>
        </Box>
    )
}