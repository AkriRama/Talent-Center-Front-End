import React, { useState } from "react";
import { Code, FormatBold, FormatItalic, FormatQuote, FormatUnderlined, Link, List } from "@mui/icons-material"
import { Box, FormControl, FormHelperText, Grid, TextareaAutosize, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { Colors } from "./Colors";

export default function TextAreaAtom({ error, handleChange, label, testid="textarea-form", value }) {
        const [formats, setFormats] = useState([]);

        // Format Talent Description
        const handleFormat = (event, newFormats) => {
            setFormats(newFormats);
        };

        const getTextAreaStyle = () => {
            let style = {};
    
            if (formats.includes('bold')) {
                style.fontWeight = 'bold';
            }
            if (formats.includes('italic')) {
                style.fontStyle = 'italic';
            }
            if (formats.includes('underlined')) {
                style.textDecoration = 'underline';
            }
            if (formats.includes('link')) {
                style.textDecoration = 'link';
            }
            if (formats.includes('quote')) {
                style.textDecoration = 'quote';
            }
            if (formats.includes('code')) {
                style.textDecoration = 'code';
            }
            if (formats.includes('list')) {
                style.textDecoration = 'list';
            }
    
            return style;
        };

    return (
        <>
            <Typography>
                {label}
            </Typography>
            <Box backgroundColor={Colors.lightWhite} borderRadius={2} data-testid={testid}>
                <Grid item xs={12}>
                    <Box 
                        backgroundColor={Colors.white} 
                        border="2px solid"
                        borderColor={Colors.lightWhite} 
                        borderRadius="5px 5px 0 0"
                    >
                        <ToggleButtonGroup
                            value={formats}
                            onChange={handleFormat}
                            size="small" 
                            sx={{ 
                                "& .MuiToggleButton-root" : {
                                    border:"none",
                                    margin: 1,
                                },
                            }}
                            gap={2}
                        >
                            <ToggleButton value="bold" aria-label="bold">
                                <FormatBold />
                            </ToggleButton>
                            <ToggleButton value="italic" aria-label="italic">
                                <FormatItalic />
                            </ToggleButton>
                            <ToggleButton value="underlined" aria-label="underlined">
                                <FormatUnderlined />
                            </ToggleButton>
                            <ToggleButton value="link" aria-label="link">
                                <Link />
                            </ToggleButton>
                            <ToggleButton value="quote" aria-label="quote">
                                <FormatQuote />
                            </ToggleButton>
                            <ToggleButton value="code" aria-label="code">
                                <Code />
                            </ToggleButton>
                            <ToggleButton value="list" aria-label="list">
                                <List />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            "& ::placeholder" : {
                                    opacity: 1,
                                },
                        }}
                    >
                        <FormControl error={!!error} fullWidth>
                            <TextareaAutosize 
                                placeholder="Write a description..."
                                style={{
                                    ...getTextAreaStyle(),
                                    backgroundColor: Colors.lightWhite,
                                    border: "none",
                                    borderRadius: 12,
                                    boxSizing: "border-box",
                                    color: error ? Colors.red : Colors.darkgrey,
                                    height: 100,
                                    outline: "none",
                                    padding: 10,
                                    resize: "none",
                                    width: "100%",
                                }}
                                value={value}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </Box>
                </Grid>
            </Box>
                        {error&& <FormHelperText sx={{color: error ? Colors.red : Colors.darkgrey,}}>{error}</FormHelperText>}
        </>
    )
}