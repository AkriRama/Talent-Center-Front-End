import React from "react";
import { Grid, Hidden, Typography } from "@mui/material";
import ImageAtom from "./ImageAtom";
import BoxActionAtom from "./BoxActionAtom";
import IconButtonAtom from "./IconButtonAtom";
import { flexCenterJSX, imageFormSX, imageListSX, paddingBodySX, rowACenterSX, rowEndSX } from "../WrapperJSX";

export default function BodyBoxAtom({ 
    employeeStatus, 
    experience, 
    handleNavigate,
    image, 
    labelDetail,
    labelEdit,
    labelStatus,
    level, 
    name, 
    statusEmployee,
    statusTalent,
    talentId,
    talentStatus,
    testid="body-form" 
}) {
    return (
        <>
        <Grid container data-testid={testid} sx={{...flexCenterJSX, ...paddingBodySX}} >
            <Grid item xs={10} md={3}
                gap={2}
                sx={rowACenterSX}
            >
                <ImageAtom image={image} alternative={name} styleSX={imageListSX} testid="image-body-form" />
                <Typography data-testid="imageText-body-form">{name}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography data-testid="levelText-body-form" textAlign="left">
                    {level}
                </Typography>
            </Grid>

            <Hidden mdDown>
                <Grid item xs={2}>
                    <Typography data-testid="experienceText-body-form">
                        {experience} Tahun
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <BoxActionAtom data={talentStatus} label={labelStatus} status={statusTalent} testid="body-action-talentStatus-body-form" />
                </Grid>
                <Grid item xs={2}>
                    <BoxActionAtom data={employeeStatus} status={statusEmployee} testid="body-action-employeeStatus-body-"/>
                </Grid>
                <Grid item xs={1} sx={rowEndSX}>
                    <IconButtonAtom handleNavigate={handleNavigate} label={labelDetail} talentId={talentId} testid="icon-button-detail-body-form" />
                    <IconButtonAtom handleNavigate={handleNavigate} label={labelEdit} talentId={talentId} testid="icon-button-edit-body-form"/>
                </Grid>
            </Hidden>
        </Grid>
        </>
    )
}