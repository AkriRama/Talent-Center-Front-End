import { Button, Grid, Hidden, Typography, useMediaQuery } from "@mui/material";
import { flexCenterJSX, paddingBodySX } from "../WrapperJSX";
import { Colors } from "./Colors";
import IconButtonARAtom from "./IconButtonARAtom";
import DialogApprovalAtom from "./DialogApprovalAtom";
import BoxActionAtom from "./BoxActionAtom";
import React, { useState } from "react";
import { useTheme } from '@mui/material/styles';
import DialogButtonApprovalAtom from "./DialogButtonApprovalAtom";
import TextButtonAtom from "./TextButtonAtom";

export default function BodyBoxApprovalAtom({ 
    approve, 
    data, 
    handleClickApprove, 
    handleClickReject, 
    handleCloseApprove, 
    handleCloseReject, 
    handleSuccesStatus, 
    index, 
    reject,
    testid="body-box-approval"
}) {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    
    const handleClickDialog = () => {
        setIsOpen(true);
    }
    
    const handleCloseDialog = () => {
        setIsOpen(false);
    }
    
    return (
        <Grid container 
            data-testid={testid}
            key={index} 
            padding={2} 
            sx={{
                ...flexCenterJSX, 
                ...paddingBodySX
            }}
        >
            {/* Instansi */}
            <Grid item xs={10} md={2.5}>
                <TextButtonAtom
                    handleClickDialog={handleClickDialog}
                    isMd={isMd}
                    label={data.agencyName}
                    testid="text-button-approval"
                />

                <DialogButtonApprovalAtom 
                    approve={approve} 
                    data={data}
                    handleClickApprove={handleClickApprove}
                    handleClickReject={handleClickReject}
                    handleClose={handleCloseDialog}
                    handleCloseApprove={handleCloseApprove}
                    handleCloseReject={handleCloseReject}
                    handleSuccesStatus={handleSuccesStatus}
                    open={isOpen}
                    reject={reject}
                    testid="dialog-button-approval"
                />
            </Grid>
            
            {/* Tanggal Request */}
            <Grid item xs={2} md={2.5}>
                <Typography data-testid="text-request-date-approval">
                    {new Date(data.requestDate).toLocaleDateString('id-ID')}
                </Typography>
            </Grid>

            <Hidden mdDown>
                {/* Talent yang dipilih */}
                <Grid item xs={2.5}>
                    <Typography data-testid="text-talentName-approval">
                        {data.talentName}
                    </Typography>
                </Grid>

                {/* Status */}
                <Grid item xs={2.5}>
                    <BoxActionAtom 
                        data-testid="box-action-AR-approval"
                        data={data.approvalStatus} 
                        label="approvalStatus" 
                        status="Approved" 
                        status2="Rejected" 
                        status3="approved" 
                    />
                    
                </Grid>

                {/* Action */}
                <Grid item
                    display="flex"
                    gap={1} 
                    xs={2}
                >
                    {/* Approve */} 
                    <IconButtonARAtom 
                        data-testid="icon-button-AR-approve-approval"
                        data={data} 
                        handleClick={handleClickApprove} 
                        label="Approve"
                    />
                    <DialogApprovalAtom
                        data-testid="dialog-approve-approval"
                        handleClose={handleCloseApprove}
                        handleSuccesStatus={handleSuccesStatus}
                        label="approve"
                        open={approve}
                        talentRequestId={data.talentRequestId}
                    />
                    {/* Reject */}
                    <IconButtonARAtom 
                        data-testid="icon-button-AR-reject-approval"
                        data={data} 
                        handleClick={handleClickReject} 
                        label="Reject"
                    />
                    <DialogApprovalAtom 
                        data={data}
                        data-testid="dialog-reject-approval"
                        handleClose={handleCloseReject}
                        handleSuccesStatus={handleSuccesStatus}
                        label="reject"
                        open={reject}
                        reason="Tidak Ada Alasan"
                    />
                </Grid>
            </Hidden>
        </Grid>
    )
}