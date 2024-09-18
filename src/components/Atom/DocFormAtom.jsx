import React from "react";
import { Box, FormControl, FormHelperText, IconButton, Typography } from "@mui/material";
import { borderDashErrorSX, docForm2SX, boxDocFormSX, flexRowCenterSX, borderDashSX } from "../WrapperJSX";
import { Close } from "@mui/icons-material";
import { Colors } from "./Colors";

export default function DocFormAtom({ error, documentFile, documentPreview, getInputFile, getRootFile,  isDragFileActive, handleDeleteDocument, label, testid="document-form" }) {
   return (
    <>
        <Box data-testid={testid}>
            <Typography>
                Upload CV
            </Typography>
            <FormControl error={Boolean(error.cvFilename)} data-testid="document-form">
                <Box
                    sx={{
                        ...boxDocFormSX, 
                        ...error.cvFilename ? borderDashErrorSX : borderDashSX
                    }}
                >
                    {documentPreview ? (
                        <Box sx={flexRowCenterSX}>
                            <Box textAlign="center" 
                                sx={{
                                    paddingLeft: 1,
                                    width: '90%', 
                                    wordWrap: "revert",
                                    overflowWrap: 'break-word',
                                  }}
                            >
                                <Typography>{label}</Typography>
                            </Box>
                            <IconButton onClick={handleDeleteDocument}>
                                <Close />
                            </IconButton>
                        </Box>

                    ) : (
                        <Box
                            {...getRootFile()}
                            sx={docForm2SX}
                        >
                            <input {...getInputFile()} />
                            {isDragFileActive ? (
                                <Typography>
                                    Drop file here
                                </Typography>
                            ) : (
                                <Box textAlign="center" sx={{width: "70%"}}> 
                                    <Typography className="customUpload" style={{ color: error.cvFilename ? Colors.red : Colors.blue}}>
                                        Drag and drop files here or click to upload
                                    </Typography>
                                </Box>
                            )}
                            
                        </Box>
                    )}
                </Box>
                {error.cvFilename && <FormHelperText>{error.cvFilename}</FormHelperText>}
            </FormControl>
        </Box>
    </>
   ) 
}