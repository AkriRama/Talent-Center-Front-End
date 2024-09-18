import { Grid } from "@mui/material";
import PaginationAtom from "./PaginationAtom";
import Entries from "./PaginationEntriesAtom";
import React from "react";

export default function FooterBodyAtom({ entries, handleChange, handleChangePage, page, testid="footer-page", totalPage=1 }) {
    return (
        <Grid container
            data-testid={testid}
            display="flex"
            direction={{ xs: "column", md: "row"}}
            alignItems="center"
            justifyContent="center"
            padding="20px 24px 20px 24px"
        >
            <Grid item xs={6}>
                <Entries entries={entries} handleChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
                <PaginationAtom handleChangePage={handleChangePage} page={page} totalPage={totalPage}/>
            </Grid>
        </Grid>
    )
}