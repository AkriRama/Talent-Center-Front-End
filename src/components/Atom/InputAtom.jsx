import { Grid, OutlinedInput, Typography } from "@mui/material";

export default function InputAtom({ adorn, handleChange="", label, md=12, placeholder="", testid="input-form", value="" }) {
    return(
        <Grid item xs={12} md={md}
            data-testid={testid}
            sx={{
                "& .MuiOutlinedInput-root" : {
                    backgroundColor: "#B0C4DE80",
                    "& ::placeholder" : {
                        color: "black",
                        fontSize: "12px",
                        opacity: 1
                    },
                },
                "& .MuiTypography-root" : {
                    fontSize: "0.8em",
                    fontWeight: 700,
                }
            }}
        >
            <Typography>{label}</Typography>
            <OutlinedInput 
                endAdornment={adorn}
                fullWidth
                onChange={handleChange}
                value={value}
                placeholder={placeholder} 
                size="small" 
                sx={{
                    fontSize: "0.8em",
                }}
                />
        </Grid>
    )
}