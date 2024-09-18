import React from "react";
import { Box, FormControl, FormHelperText, IconButton, Typography } from "@mui/material";
import { borderImage2SX, borderImageSX, boxImageSX, iconImage2SX, iconImageSX, imageFormSX, imagePreviewSX, imagePreviewSX as previewSX } from "../WrapperJSX";
import { AddPhotoAlternateOutlined, Delete } from "@mui/icons-material";
import ImageAtom from "./ImageAtom";
import { Colors } from "./Colors";

export default function ImageFormAtom({ error, getInputProps, getRootProps, imageFile, imagePreview, isDragActive, handleDeleteImage: handleDelete, label, talentPhoto = "", testid="image-form" }) {
    
    return (
        <>
            <Box data-testid={testid}>
                <Typography>
                    Foto Talent
                </Typography>
                <FormControl data-testid="image-form2" error={Boolean(error.imageFile)}>
                    <Box
                        sx={imageFormSX}
                    >
                        <label htmlFor="image-upload">
                            {imagePreview ? (
                                    <Box >
                                        <ImageAtom 
                                            alternative={label}
                                            image = {imagePreview}
                                            styleSX = {previewSX}
                                        />
                                        <IconButton
                                            style={iconImageSX}
                                            onClick={handleDelete}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </Box>
                            ) : talentPhoto === "" ? (
                                <Box 
                                    {...getRootProps()}
                                    sx={{ 
                                            ...boxImageSX,     
                                            ...(isDragActive || error.imageFile  ? borderImage2SX : borderImageSX),
                                    }}
                                >
                                    <input {...getInputProps()} data-testid="image-input" />
                                    {isDragActive ? (
                                        <Typography textAlign="center">Drop teh files here ...</Typography>
                                    ) : (
                                        <AddPhotoAlternateOutlined sx={iconImage2SX}/>
                                    )}
                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        position: "relative",
                                    }}
                                >
                                    <img
                                        src={imageFile}
                                        alt={label}
                                        style={{
                                            height: 100,
                                            width: 100,
                                            borderRadius: 5,
                                            objectFit: "cover"
                                        }}
                                    />
                                    <IconButton 
                                        onClick={handleDelete}
                                        sx={{
                                            position: "absolute",
                                            backgroundColor: "#FFFFFF",
                                            borderRadius: 1,
                                            color: "red",
                                            padding: 0.5,
                                            opacity: 0.8,
                                            top: 5,
                                            left: 70,
                                            "&:hover" : {
                                                backgroundColor: "black",
                                                color: "#FFFFFF",
                                            }
                                        }}
                                    >
                                        <Delete sx={{ fontSize: "0.8em"}} />
                                    </IconButton>
                                </Box>
                            )}
                        </label>
                    </Box>
                    {error.imageFile && <FormHelperText>{error.imageFile}</FormHelperText>}
                </FormControl>
            </Box>
        </>
    )
}

