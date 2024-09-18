import { Box, Pagination } from "@mui/material";
import React from "react";

export default function PaginationAtom({ handleChangePage, page, testid="footer-pagination", totalPage }) {
    return (
        <Box data-testid={testid} display="flex" justifyContent="right">
            <Pagination
                count={Number(totalPage)}
                onChange={handleChangePage}
                page={page}
                sx={{
                    "& .MuiPaginationItem-root" : {
                        color: "#848484",
                        fontWeight: "bold",
                        border: "none",
                        "&.Mui-selected" : {
                            backgroundColor: "transparent",
                            borderRadius: 0,
                            borderBottom: "2px #2C8AD3 solid",
                            color: "#2C8AD3",
                        },
                        "&:hover" : {
                            backgroundColor: "transparent",
                            color: "#2C8AD3"
                        },
                        "&:focus" : {
                            outline: "none",
                        },
                    },
                }}

            >

            </Pagination>
        </Box>
    )
}
