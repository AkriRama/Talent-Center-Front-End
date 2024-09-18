import { Colors } from "./Atom/Colors"

export const columnRowSX = {
    display: "flex",
    flexDirection: { xs: "column", md: "row"}
}

export const FilterBoxSX = {
    ...columnRowSX,
    gap: {xs: 1.5, md: 0},
    alignItems: {xs: "none", md: "center"},
    justifyContent: "space-between",
    "& .MuiTypography-root" : {
            fontSize: "0.6rem"
        },
        "& .MuiBox-root" : {
            display: "flex",
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "1.4em"
        },
        "& .MuiSvgIcon-root" : {
            fontSize: "0.9em"
        },
}

export const imageFormSX = {
    width: 100,
    height: 100,
    position: "relative",
}

export const imagePreviewSX = {
    width: 100,
    height: 100,
    borderRadius: 10,
    objectFit: "cover",
    objectPosition: "center",
}

export const iconImageSX = {
    backgroundColor: Colors.white,
    borderRadius: 3,
    color: Colors.red,
    opacity: 0.8,
    padding: 2,
    position: "absolute",
    right: 5,
    top: 5,
}

export const flexCenterJSX = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

export const flexRowCenterSX = {
    ...flexCenterJSX,
    flexDirection: "row",
}

export const boxImageSX = {
    ...flexCenterJSX,
    borderRadius: 3,
    height: 100,
    width: 100,
    backgroundColor: Colors.lightWhite,
}

export const borderDashErrorSX = {
    border: "2px #dd2727 dashed",
}

export const borderDashSX = {
    border: "2px #2C8AD3 dashed",
}

export const borderImageSX = {
    ...borderDashSX,
    color: Colors.blue, 
}

export const borderImage2SX = {
    ...borderDashErrorSX,
    color: "#dd2727"

}

export const iconImage2SX = {
    height: 50, 
    width: 50
}

export const imageListSX = {
    borderRadius: "50%",
    height:50,
    objectFit: "cover",
    width:50,
}


//Document Form Style
export const boxDocFormSX = {
    ...flexCenterJSX,
    backgroundColor: Colors.lightWhite,
    borderRadius: 2,
    color: Colors.blue,   
    height: "16.7vh",
    width: { xs: "50vw", md: "20vw"},
}



export const addSX = {
    backgroundColor: "#FFFFFF",
    borderRadius: {xs: "none", md: "12px"},
    margin: {xs: "none", md: "0px 24px 0px 24px"},
    padding: 3,
    "& .MuiTypography-root" : {
        fontSize: "12px",
        color: Colors.darkgrey,
        fontWeight: 500,
    },
    "& .customTitle" : {
        fontSize: "18px",
        fontWeight: 700,
    },
    "& .customUpload" : {
        color: Colors.blue,
    },
    "& .MuiOutlinedInput-root" : {
        backgroundColor: Colors.graywhite,
        "& ::placeholder" : {
            color: "black",
            fontSize: "12px",
        },
        '& fieldset': {
            border: 'none',
        },
        "& .MuiSelect-select" : {
            color: "black",
            fontSize: "0.8em",
            "& .customOff" : {
                opacity: 0.5,
            },
            "& .customOn" : {
                opacity: 1,
            },
            
        }
    },
    "& .MuiButton-root" : {
        "& .MuiTypography-root" : {
            color: "black",
            fontSize: "0.9em",
            fontWeight: "100",
            textTransform: "initial"
        },
        "& .MuiButton-endIcon" : {
            color: "black",
        },
        
    }
}

export const pdfSX = {
    width: "32px",
    height: "40px",
}

export const buttonSaveSX = {
    height: "40px",
    width: "76px",
}

export const buttonCancelSX = {
    backgroundColor: Colors.lightgray,
    height: "40px",
    width: "76px",
}

export const buttonBackSX = {
    display: "flex",
    alignItems: "center",
    height: "88px",
    padding: "0px 24px 0px 24px",
}

export const docForm2SX = {
    ...flexCenterJSX,
    width: { md: "16vw"},
}

export const TitleAtomSX = {
    lineHeight:"33px",
    fontWeight: 700, 
    color: Colors.darkgrey,
}

export const endFlexSX = {
    display: "flex",
    justifyContent: "flex-end",
}

export const detailSX = {
    
    "& .MuiBox-root" : {
        display: "flex",
        flexDirection: "column",
        "& .customTitle" : {
            color: "#586A84",
            fontSize: "1em",
        },
        "& .customTitleHead" : {
            fontSize: "18px",
        },
        "& .customName" : {
            fontSize: "24px",
        },
        "& .customTypo" : {
            color: Colors.darkgrey,
            fontSize: "0.8em"
        },
        "& .customAO" : {
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20 ,
            width: {xs:80, md: 100},
            height: 30,
        },
        "& .customAOXS" : {
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            borderRadius: 20 ,
            width: 70,
            height: 30,
        },
    },
    "& .MuiGrid-root" : {
        "& .customTyp" : {
         color: "black",
        },
    },
    "& .MuiButton-root" : {
            textTransform: "inherit",
    }
}

export const flexColumnSX = {
    display:"flex",
    flexDirection:"column",
}

export const talentDataDetailSX = {
    ...flexColumnSX,
    gap:2,
    "& .MuiGrid-root" : {
        display: "flex"
    },
    "& .MuiBox-root" : {
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        "& .customTitle" : {
            fontSize: "0.8em",
            color: "#586A84",
        }
    },
}



export const rowEndSX = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
}

export const rowACenterSX = {
    display: "flex", 
    direction: "row",
    alignItems: "center",
}

export const filterTextSX = {
    ...rowACenterSX,
    padding: "10px 24px 10px 24px",
    "& .MuiTypography-root": {
        color: Colors.baliHai,
        fontSize: "0.8em"
    }
}

export const paddingBodySX = {
    padding: "20px 24px 20px 24px",
}

export const radiusColorBodySX = {
    backgroundColor: "#FFFFFF",
    borderRadius: {xs: 0, md: "12px"},
    boxShadow: {xs: 0, md: 4},
}

export const approvalBoxSX = {
    ...flexColumnSX,
    gap: 2,
    width: "100%",
    "& .customIB" : {
        border: "1px solid",
        borderRadius: 1,
        color: "#FFFFFF",
        "&:hover" : {
            color: "black"
        },
    },
    "& .customR" : {
        height: 1,
        width: 1,
    },
    
    "& .MuiInputBase-root" : {
        backgroundColor: "#FFFFFF",
        height: "2.5em",
    },
    "& .MuiTypography-root" : {
        fontSize: "0.8em"
    },
    "& .customTitle" : {
        fontSize: "1.4em",
        fontWeight: 700,
    },
}

export const toastSuccessSX = {
    background: Colors.green,
    color: Colors.white,
    fontSize: "0.9rem",
    fontWeight: "bold",
    padding: "10px",
};