import React from "react";
import { Close, Save } from "@mui/icons-material";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Icon, IconButton, Typography } from "@mui/material";

export default function DialogAtom({ handleClose, handleNavigate, open, testid="dialog-element" }) {
    return (
        <Dialog
            data-testid={testid}
            open={open}
            onClose={handleClose}
            sx={{
                borderRadius: 100,
            }}
        >
            <DialogTitle fontWeight={700} data-testid="dialog-form">
                <Icon>
                    <Save />
                </Icon>
                <IconButton
                    data-testid="close-dialog"
                    onClick={handleClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 12,
                        color: "black",
                    }}
                >
                    <Close  />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography fontSize="1.2em" fontWeight={700}>Konfirmasi Sebelum Batal</Typography>
                <DialogContentText>
                    Apakah Anda yakin untuk batal tambah
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Grid item xs={6}>
                    <Button variant="outlined" fullWidth 
                        data-testid="button-cancel-dialog"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button data-testid="button-confirm-dialog" onClick={handleNavigate} variant="contained" fullWidth>
                        Confirm
                    </Button>
                </Grid>

            </DialogActions>
        </Dialog>
    )
}