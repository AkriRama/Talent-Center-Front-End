import { Download } from "@mui/icons-material";
import { Box, Button, Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleAtom from "./Atom/TitleAtom";
import ButtonBackAtom from "./Atom/ButtonBackAtom";
import ImageAtom from "./Atom/ImageAtom";
import { columnRowSX, detailSX, endFlexSX, flexColumnSX, imagePreviewSX, talentDataDetailSX } from "./WrapperJSX";
import BoxActionAtom from "./Atom/BoxActionAtom";
import ButtonEditAtom from "./Atom/ButtomEditAtom";
import BoxDetailAtom from "./Atom/BoxDetailAtom";
import { Colors } from "./Atom/Colors";
import StatisticAtom from "./Atom/StatisticAtom";
import MultipleDisplayAtom from "./Atom/MultipleDisplayAtom";
import { downloadFile4 } from "./Atom/DownloadFileAtom";
import ButtonDetailAtom from "./Atom/ButtonDetailAtom";

export default function TalentDetailCard({ skillSet, position, talentData }) {
    const navigate = useNavigate();
    const [isProfileData, setIsProfileData] = useState(true);

    const handleBackToHome = () => {
        navigate("/daftar-talent");
    };
    const handleClickProfileButton = () => {
        setIsProfileData(true);
    };
    const handleClickStatisticButton = () => {
        setIsProfileData(false);
    };
    const handleDownload = () => {
        const fileUrl = talentData.docUrl;
        const fileName = talentData.cv;
        downloadFile4(fileUrl, fileName);
    };
    const handleEditTalent = (talentId) => {
        navigate(`/edit-talent/${talentId}`);
    };

    return (
        <Grid item xs={12}
            isplay="flex"
            flexDirection="column"
            padding="0px 24px 0px 24px"
            sx={detailSX}
            >
            <Grid item padding="24px 0px 24px 0px">
                <ButtonBackAtom handleNavigate={handleBackToHome} testid="button-back-detail-body"/>
            </Grid>
            <Grid item>
                <Box backgroundColor= {Colors.white} borderRadius={{md: 2}}>
                    {/* Header Box */}
                    <Grid item>
                        <Box>
                            {/* Title */}
                            <Grid item padding="12px 24px">
                                <TitleAtom className="customTitleHead" testid="title-detail-body" title="Detail Talent" />
                            </Grid>
                            <Grid item>
                                <Divider sx={{border: "2px #F1F6FF solid"}}></Divider>
                            </Grid>

                            {/* Box Info */}
                            <Grid item paddingBottom={1}>
                                <Box padding={3} paddingBottom={0} borderRadius= "0 0 20px 20px"  boxShadow= "0px 3px 0px rgba(0, 0, 0, 0.15)">
                                    <Grid item gap={2} sx={flexColumnSX}>
                                        <Grid item
                                            alignItems="center"
                                            gap={{xs: 2, md: 15}}
                                            sx={columnRowSX}
                                        >
                                            {/* Photo Profile */}
                                            <Grid item
                                                display="flex"
                                                flexDirection={{ xs: "row", md: "column"}}
                                                justifyContent="space-between"
                                                width= {{xs: "100%", md: "0"}}
                                            >
                                                <Grid item xs={6}>
                                                    <ImageAtom 
                                                        image={talentData.imageUrl}
                                                        alternative={talentData.talentName}
                                                        styleSX={imagePreviewSX}
                                                        testid="image-detail-body"
                                                    />
                                                </Grid>
                                                <Grid item xs={7.5} sx={endFlexSX}>
                                                    <ButtonEditAtom 
                                                        handleClick={()=> handleEditTalent(talentData.talentId)}
                                                        isVisible={false}
                                                        testid="button-edit-detail-body"
                                                    />
                                                </Grid>
                                            </Grid>

                                            {/* Profile Info */}
                                            <Grid item
                                                display="flex"
                                                flexDirection="column"
                                                gap={3}
                                            >
                                                <Grid item 
                                                    display="flex"
                                                    flexDirection="row"
                                                    alignItems="center"
                                                    justifyContent="space-between"
                                                >
                                                    <Grid item>
                                                        <TitleAtom className="customName" title={talentData.talentName} testid="name-detail-body"/>
                                                    </Grid>

                                                    {/* Active AND Onsite Box */}
                                                    <Grid container gap={2}>
                                                        <BoxActionAtom data={talentData.employeeStatus}  status="Active" testid="box-action-employee-detail-body" />
                                                        <BoxActionAtom data={talentData.talentStatus} label="talentStatus" status="Onsite" testid="box-action-talent-detail-body" />
                                                    </Grid>

                                                    {/* Button Edit Profile */}
                                                    <Grid item md={5} sx={endFlexSX}>
                                                        <ButtonEditAtom  handleClick={()=> handleEditTalent(talentData.talentId)} testid="button-edit-detail-body"/>
                                                    </Grid>
                                                    
                                                </Grid>

                                                {/* Profile Description */}
                                                <Grid item>
                                                    <Grid item xs={12} md={8}>
                                                        <BoxDetailAtom value={talentData.talentDescription}  testid="box-detail-body"/>
                                                    </Grid>
                                                </Grid>
                                                
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                                <Divider></Divider>
                                        </Grid>
                                        
                                        {/* Button Nav Info */}
                                        <Grid item
                                            display="flex"
                                            flexDirection="row"
                                            gap={5}
                                        >
                                            <Grid item>
                                                <ButtonDetailAtom 
                                                    handleClick={handleClickProfileButton}
                                                    isProfileData={isProfileData}
                                                    label="Profile"
                                                    testid="button-profile-detail-body"
                                                />
                                            </Grid>
                                            <Grid item>
                                                <ButtonDetailAtom 
                                                    handleClick={handleClickStatisticButton}
                                                    isProfileData={isProfileData}
                                                    label="Statistik"
                                                    testid="button-statistic-detail-body"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>          
                        </Box>
                    </Grid>

                    
                    {  isProfileData ? (
                    /* Profile Data */
                    <Grid item
                        display="flex"
                        flexDirection="column"
                        gap={0.5}
                    >
                        {/* Talent Data */}
                        <Grid item>
                            <Box padding={3} sx={{ backgroundColor: Colors.white }}>
                                <Grid item xs={12}
                                    sx={talentDataDetailSX}
                                >
                                    <Grid item>
                                        <Grid item xs={6}>
                                            <BoxDetailAtom 
                                                label="Name Talent" 
                                                testid="box-body-talent-name-detail-body" 
                                                value={talentData.talentName} 
                                            />
                                        </Grid>
                                        <Grid item>
                                            <BoxDetailAtom 
                                                label="Nomor Induk Pegawai" 
                                                testid="box-body-employee-number-detail-body"
                                                value={talentData.nip} 
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid item xs={6}>
                                            <BoxDetailAtom 
                                                label="Jenis Kelamin" 
                                                testid="box-body-gender-detail-body"
                                                value={talentData.sex === "L" ? "Laki-laki" : "Perempuan"} 
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <BoxDetailAtom 
                                                label="Tanggal Lahir" 
                                                testid="box-body-dateBirth-detail-body"
                                                value={new Date(talentData.dob).toLocaleDateString('id-ID', {
                                                        year: 'numeric',
                                                        month: 'numeric',
                                                        day: 'numeric',
                                                    })
                                                } 
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>

                        <Grid item>
                            <Divider sx={{ border: "3px #F1F6FF solid"}}></Divider>
                        </Grid>
                        

                        {/* Talent Skill and Doc */}
                        <Grid item>
                            <Box backgroundColor="#FFFFFF" padding={3}>
                                <Grid item
                                    sx={talentDataDetailSX}
                                >
                                    <Grid item>
                                        <Grid item>
                                            <BoxDetailAtom 
                                                label="CV" 
                                                children={
                                                    <Button 
                                                        onClick={handleDownload} 
                                                        startIcon={ <Download />} 
                                                        variant="contained"
                                                    > 
                                                        Download CV
                                                    </Button>
                                                } 
                                                testid="box-body-cv-detail-body"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid item xs={6}>
                                            <BoxDetailAtom 
                                                label="Pengalaman" 
                                                testid="box-body-experience-detail-body"
                                                value={talentData.talentExperience + " Tahun"} 
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <BoxDetailAtom 
                                                label="Level" 
                                                testid="box-body-level-detail-body"
                                                value={talentData.talentLevel} 
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item
                                        display= "flex"
                                        flexDirection={{xs: "column", md: "row"}}
                                        gap={2}
                                    >
                                        <Grid item md={6}>
                                            <MultipleDisplayAtom 
                                                data={skillSet} 
                                                label="Skill Set" 
                                                testid="multiple-display-skillset-detail-body"
                                            />
                                        </Grid>
                                        <Grid item md={6}>
                                            <MultipleDisplayAtom 
                                                data={position} 
                                                label="Posisi" 
                                                testid="multiple-display-position-detail-body"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>

                        <Grid item>
                            <Divider sx={{ border: "3px #F1F6FF solid"}}></Divider>
                        </Grid>

                        {/* Talent Social Media */}
                        <Grid item>
                            <Box backgroundColor= "#FFFFFF" padding={3} borderRadius={3}>
                                <Grid item
                                    sx={talentDataDetailSX}
                                >
                                    <Grid item>
                                        <Grid item xs={6}>
                                            <BoxDetailAtom label="Email" value={talentData.email} testid="box-email-detail-body" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <BoxDetailAtom label="No. Hp/Whatsapp" value={talentData.cellphone} testid="box-cellphone-detail-body" />
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <Grid item>
                                            <BoxDetailAtom label="Biografi Video" value={talentData.videoUrl} testid="box-video-url-detail-body" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                    
                    ) : (
                    /* Statistik Data */
                    <Grid item>
                        <StatisticAtom testid="statistic-box-detail-body" value={0} value1={talentData.projectCompleted}  />
                    </Grid>
                    )}
                </Box>
            </Grid>
            
        </Grid>
    )
}