import { Box, Grid } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import dayjs from "dayjs";
import { editTalent } from "../services/apis";
import TitleAtom from "./Atom/TitleAtom";
import TextInputAtom from "./Atom/TextInputAtom";
import DateAtom from "./Atom/DateAtom";
import TextAreaAtom from "./Atom/TextAreaAtom";
import SelectAtom from "./Atom/SelectAtom";
import MultipleSelectAtom from "./Atom/MultipleSelectAtom";
import { talentAvailabilityList } from "./ListData";
import { addSX, buttonBackSX } from "./WrapperJSX";
import ButtonBackAtom from "./Atom/ButtonBackAtom";
import ImageFormAtom from "./Atom/ImageFormAtom";
import DocFormAtom from "./Atom/DocFormAtom";
import ButtonFormAtom from "./Atom/ButtonFormAtom";
import RadioBoxAtom from "./Atom/RadioBoxAtom";
import { createFileObjectsAtom } from "./Atom/createFileObjectsAtom";
import useHandleNavigate, { handleChangeValue } from "./Atom/handleAllAtom";
import toast from "react-hot-toast";
import { Colors } from "./Atom/Colors";

export default function EditTalentCard({
    employeeStatusData,
    positionData,
    setIsLoading,
    skillsetData,
    talentData,
    talentId,
    talentLevelData,
}) {

    const handleNavigate = useHandleNavigate();

    const [errors, setErrors] = useState({
        cellphone: "",
        cvFilename: "",
        dateBirth: "",
        email: "",
        employeeNumber: "",
        employeeStatus: "",
        experience: "",
        gender: "",
        imageFile: "",
        level: "",
        position: "",
        skillset: "",
        talentAvailability: "",
        talentName: "",
        talentDesc: "",
        videoUrl: "",
    });
    const [open, setOpen] = useState(false);    

    const [documentFile, setDocumentFile] = useState([]);
    const [documentPreview, setDocumentPreview] = useState(null);
    const [imageFile, setImageFile] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
    
    const [level, setLevel] = useState("");

    const [cellphone, setCellphone] = useState("");
    const [cvFilename, setCvFilename] = useState("");
    const [dateBirth, setDateBirth] = useState();
    const [email, setEmail] = useState("");
    const [employeeNumber, setEmployeeNumber] = useState("");
    const [employeeStatus, setEmployeeStatus] = useState();
    const [gender, setGender] = useState("");
    const [tempGender, setTempGender] = useState("");
    const genderChar = tempGender.charAt(0);
    const [position, setPosition] = useState([]);
    const [projectCompleted, setProjectCompleted] = useState(0);
    const [skillset, setSkillset] = useState([]);
    const [talentAvailability, setTalentAvailability] = useState("");
    const [talentDesc, setTalentDesc] = useState("");
    const [talentExperience, setTalentExperience] = useState("");
    const [talentLevel, setTalentLevel] = useState("");
    const [talentName, setTalentName] = useState("");
    const [talentPhoto, setTalentPhoto] = useState("");
    const [talentStatus, setTalentStatus] = useState("")
    const [videoUrl, setVideoUrl] = useState("");


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeGender = (event) => {
        const value = event.target.value;
        if(value === "Laki-laki") {
            setGender('L');
            setTempGender('L');
        } else {
            setTempGender('P');
            setGender('P');
        }
        
    };

    

    const handleChangeEmployeeStatus = (event) => {
        setEmployeeStatus(event.target.value);
    };

    const handleChangeTalentAvailable = (event) => {
        setTalentAvailability(event.target.value);
    };

    const handleChangeTalentDesc = (event) => {
        const value = event.target.value;
        setTalentDesc(value);

        if (!value) {
            setErrors({
                ...errors,
                talentDesc: "Kolom ini tidak boleh kosong",
            });
        } else if(value.length > 400) {
            setErrors({
                ...errors,
                talentDesc: "Panjang karakter deskripsi tidak boleh lebih dari 400"
            })
        } else {
            setErrors({
                ...errors,
                talentDesc: "",
            });
        }
    };

    const handleChangeLevel = (event) => {
        setTalentLevel(event.target.value);
        setLevel(event.target.value);
    };



    useEffect(() => {
        const fetchImageFile = async () => {
            const files = await createFileObjectsAtom(talentData.imageUrl, talentPhoto);
            setImageFile(files[0])
        }; fetchImageFile();

        const fetchDocumentFile = async () => {
            const files = await createFileObjectsAtom(talentData.docUrl, cvFilename);
            setDocumentFile(files[0]);
        }; fetchDocumentFile();
        setCellphone(talentData.cellphone);
        setCvFilename(talentData.cv);
        setDateBirth(dayjs(talentData.dob));
        setEmail(talentData.email);
        setEmployeeNumber(talentData.nip);
        //setEmployeeStatus
        {employeeStatusData.map((data) => {
            if(data.employeeStatusName === talentData.employeeStatus) {
                setEmployeeStatus(data.employeeStatusId);
            }
        })};
        setGender(talentData.sex);
        setImagePreview(talentData.imageUrl);
        setTalentAvailability(talentData.talentAvailability)
        setTalentDesc(talentData.talentDescription);
        setTalentExperience(talentData.talentExperience);
        setTalentName(talentData.talentName);
        setTalentPhoto(talentData.talentPhoto);
        setTalentStatus(talentData.talentStatus === "Active" ? "2bb69ed1-df80-4d01-ae1f-52de263c2953" : talentData.talentStatus === "Onsite" ? "feee9f36-a978-455d-b324-9d360421d068" : "0126dbf5-ac95-4567-aa23-34ec973f93fa");
        //setLevel AND setTalentLevel
        {talentLevelData.map((data) => {
            if(data.talentLevelName === talentData.talentLevel) {
                setLevel(data.talentLevelId);
                setTalentLevel(data.talentLevelId);
            }
        })};
        //setPosition
        if (talentData && talentData.position) {
            setPosition(Array.isArray(talentData.position) ? talentData.position.map(p => p.positionId) : [talentData.position.positionId]);
        };
        //setSkillset
        if (talentData && talentData.skillSet) {
            setSkillset(Array.isArray(talentData.skillSet) ? talentData.skillSet.map(s => s.skillId) : [talentData.skillSet.skillId]);
        };
        setVideoUrl(talentData.videoUrl);
    }, [talentData]);

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        const file = acceptedFiles[0];

        if (file && file.size <= 1048576 && ["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
            setTalentPhoto(file.name);
        }
    }, []);

    //Document Component
    const onDropFile = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        const file = acceptedFiles[0];

        if  (file && file.size <= 1048576 && ["application/pdf", "text/plain"].includes(file.type)) {
            setDocumentFile(file);
            setDocumentPreview(URL.createObjectURL(file));
            setCvFilename(file.name);
        } 
    });

    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {"image/jpeg": [], "image/png": [], "image/jpg": [],}, });

    const {
        getRootProps: getRootFile,
        getInputProps: getInputFile,
        isDragActive : isDragFileActive
    } = useDropzone({ onDrop: onDropFile,  accept: {"application/pdf": [], "text/plain": [],},});

    

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if  (file && file.size <= 1048576 && ["image/jpeg", "image/png", "image/jpg"].includes(file.type)
        ) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        } 
    };
    const handleDeleteImage = () => {
        setImageFile(null);
        setImagePreview(null);
        setTalentPhoto("");
    };


    

    const handleDocumentUpload = (event) => {
        const file = event.target.files[0];
        if(file && file.size <= 1048576 && ["application/pdf"].includes(file.type)
        ) {
            setDocumentFile(file);
            setDocumentPreview(URL.createObjectURL(file));
            setCvFilename(file.name);
        } 
    };
    
    const handleDeleteDocument = () => {
        setDocumentFile(null);
        setDocumentPreview(null);
        setCvFilename("");
    };


    const handleChangeTalentName = (event) => {
        const value = event.target.value;
        setTalentName(value);

        if  (value.length > 255) {
            setErrors({
                ...errors,
                talentName: "Panjang kolom nama tidak boleh lebih dari 255",
            });
        } else if(!value) {
            setErrors({
                ...errors,
                talentName: "Kolom ini tidak boleh kosong",
            });
        } else {
            setErrors({
                ...errors,
                talentName: "",
            });
        }
    };
    const handleChangeEmployeeNumber = (event) => {
        const value = event.target.value;
        const isValidNumber = /^\d+$/.test(value);
        setEmployeeNumber(value);

        if (!value) {
            setErrors({
                ...errors,
                employeeNumber: "Kolom ini tidak boleh kosong",
            });
        } else if(value.length > 15) {
            setErrors({
                ...errors,
                employeeNumber: "Panjang kolom NIP tidak boleh lebih dari 15",
            });
        } else if(!isValidNumber) {
            setErrors({
                ...errors,
                employeeNumber: "Format kolom NIP harus berupa angka",
            });
        } else{
            setErrors({
                ...errors,
                employeeNumber: "",
            })
        }
    };

    const handleChangeTalentDescription = (event) => {
        setTalentDesc(event.target.value);
    };

    const handleChangeTalentExperience = (event) => {
        const value = event.target.value;
        const isValidNumber = /^\d+$/.test(value);
        setTalentExperience(value);

        if(!value) {
            setErrors({
                ...errors,
                experience: "Kolom ini tidak boleh kosong",
            });
        } else if(!isValidNumber) {
            setErrors({
                ...errors,
                experience: "Format kolom pengalaman harus berupa angka",
            });
        } else {
            setErrors({
                ...errors,
                experience: "",
            });
        }
    };

    const handleChangeEmail = (event) => {
        const value = event.target.value;
        setEmail(value);

        if (!value) {
            setErrors({
                ...errors,
                email: "Kolom ini tidak boleh kosong",
            });
        } else if(value.length > 100) {
            setErrors({
                ...errors,
                email: "Panjang kolom email tidak boleh lebih dari 100",
            });
        } else {
            setErrors({
                ...errors,
                email: "",
            });
        }
    };

    const handleChangeCellphone = (event) => {
        const value = event.target.value;
        setCellphone(value);
        const isValidNumber = /^\d+$/.test(value);

        if (!value) {
            setErrors({
                ...errors,
                cellphone: "Kolom ini tidak boleh kosong",
            });
        } else if(value.length > 12) {
            setErrors({
                ...errors,
                cellphone: "Panjang kolom nomor handphone tidak boleh lebih dari 12",
            });
        } else if(!isValidNumber) {
            setErrors({
                ...errors,
                cellphone: "Format kolom nomor handphone harus berupa angka",
            });
        } else {
            setErrors({
                ...errors,
                cellphone: "",
            });
        }
    };

    const handleChangeVideoUrl = (event) => {
        const value = event.target.value;
        setVideoUrl(value);

        if (!value) {
            setErrors({
                ...errors,
                videoUrl: "Kolom ini tidak boleh kosong",
            });
        } else if(value.length > 255) {
            setErrors({
                ...errors,
                videoUrl: "Panjang kolom biografi video tidak boleh lebih dari 255",
            });
        } else {
            setErrors({
                ...errors,
                videoUrl: "",
            });
        }
    };

    const handleChangePosition = (event) => {
        const value = event.target.value;
        setPosition(value);

        if (value.length === 0) {
            setErrors({
                ...errors,
                position: "Kolom ini tidak boleh kosong",
            });
        } else if(value.length > 10) {
            setErrors({
                ...errors,
                position: "Jumlah Posisi tidak boleh lebih dari 10",
            });
        } else {
            setErrors({
                ...errors,
                position: "",
            });
        }
    };
    const handleChangeSkillset = (event) => {
        const value = event.target.value;
        setSkillset(value);

        if (value.length === 0) {
            setErrors({
                ...errors,
                skillset: "Kolom ini tidak boleh kosong",
            });
        } else if(value.length > 50) {
            setErrors({
                ...errors,
                skillset: "Jumlah Skillset tidak boleh lebih dari 50",
            });
        } else {
            setErrors({
                ...errors,
                skillset: "",
            });
        }
    };

    const validationFields = () => {
        let tempErrors = { ...errors };

        // Validation TalentName
        const regexTalentName = /^[A-Za-z\s]*$/; 
        if (talentName.length > 255) {
            tempErrors.talentName = "Panjang kolom nam tidak boleh lebih dari 255";
        } else if (!talentName) {
            tempErrors.talentName = "Kolom ini tidak boleh kosong";
        } else {
            tempErrors.talentName = "";
        }

        // Validation NIP
        const isValidNumber = /^\d+$/;
        if(employeeNumber.length > 15) {
            tempErrors.employeeNumber = "Panjang kolom NIP tidak boleh lebih dair 15";   
        } else if(!isValidNumber.test(employeeNumber)) {
            tempErrors.employeeNumber = "Format kolom NIP harus berupa angka";   
        } else if (!employeeNumber) {
            tempErrors.employeeNumber = "Kolom ini tidak boleh kosong";
        } else {
            tempErrors.employeeNumber = "";
        }

        //Validation Jenis Kelamin
        if(!gender) {
            tempErrors.gender = "Kolom ini tidak boleh kosong";
        } else {
            tempErrors.gender = "";
        }

        //Validation Deskripsi Talent
        if(talentDesc.length > 4000) {
            tempErrors.talentDesc = " Panjang kolom deskripsi tidak boleh dari 4000";
        } else if (!talentDesc) {
            tempErrors.talentDesc = "Kolom ini tidak boleh kosong";
        } else {
            tempErrors.talentDesc = "";
        }

        //Validation Pengalaman
        if(!isValidNumber.test(talentExperience)) {
            tempErrors.experience = "Format kolom pengalaman harus berupa angka";
        } else if(!talentExperience) {
            tempErrors.experience = "Kolom ini tidak boleh kosong";
        } else {
            tempErrors.talentExperience = "";
        }

        //Validation Level
        if(!talentLevel) {
            tempErrors.level = "Kolom ini tidak boleh kosong";
        } else {
            tempErrors.level = "";
        }

        // Validation Position
        if(position.length > 10) {
            tempErrors.position = "Jumlah Posisi tidak boleh dari 10";
        } else if (position.length === 0) {
            tempErrors.position = "Kolom ini tidak boleh kosong";
        } else {
            tempErrors.position = "";
        }

        //Validation Skillset
        if(skillset.length > 50) {
            tempErrors.skillset = "Jumlah Skillset tidak boleh lebih dari 50";
        } else if (skillset.length === 0) {
            tempErrors.skillset = "Kolom ini tidak boleh kosong";
        } else {
            tempErrors.skillset = "";
        }

        // Validation Email
        if(email.length > 100) {
            tempErrors.email = "Panjang kolom email tidak boleh lebih dari 100";
        } else if(!email) {
            tempErrors.email = "Kolom ini tidak boleh kosong";
        } else {
            tempErrors.email = "";
        }

        //Validation Cellphone
        if(!isValidNumber.test(cellphone)) {
            tempErrors.cellphone = "Format kolom nomor handphone harus berupa angka";
        } else if (cellphone.length > 12) {
            tempErrors.cellphone = "Panjang kolom nomor handphone tidak boleh lebih dari 12";
        } else if (!cellphone) {
            tempErrors.cellphone = "Kolom ini tidak boleh kosong";
        } else {
            tempErrors.cellphone = "";
        }

        //Validation EmployeeStatus
        if(!employeeStatus) {
            tempErrors.employeeStatus = "Kolom ini tidak boleh kosong";
        } else {
            tempErrors.employeeStatus = "";
        }

        // Validation TalentAvailability
        if(!talentAvailability) {
            tempErrors.talentAvailability = "Kolom ini tidak boleh kosong";
        } else {
            tempErrors.talentAvailability = "";
        }

        //Validation VideoUrl
        if(!videoUrl) {
            tempErrors.videoUrl = "Kolom ini tidak boleh kosong";
        } else if(videoUrl.length > 255) {
            tempErrors.videoUrl = "Panjang kolom biografi video tidak boleh lebih dari 255";
        } else {
            tempErrors.videoUrl = "";
        }

        //Validation ImageFile
        if (imageFile.length === 0) {
            tempErrors.imageFile = "Kolom ini tidak boleh kosong";
        } else if(documentFile.size > 248576) {
            tempErrors.imageFile = "Ukuran foto maksimal 2MB";
        } else {
            tempErrors.imageFile = ""
        }

        // Validation DocFile
        if (documentFile.length === 0) {
            tempErrors.cvFilename = "Kolom ini tidak boleh kosong";
        } else if(documentFile.size > 1048576) {
            tempErrors.cvFilename = "Ukuran dokumen maksimal 10MB";
        } else {
            tempErrors.cvFilename = ""
        }

        setErrors(tempErrors);

        // Check if any errors exist
        return Object.keys(tempErrors).every((key) => !tempErrors[key]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!validationFields()) {
            console.error("Validation failed");
            return;
        }
        console.log(talentId);
        setIsLoading(true);


        const jsonData = JSON.stringify({
            talentId: talentId,
            talentPhoto: talentPhoto,
            talentName: talentName,
            talentStatusId: talentStatus,
            nip: employeeNumber,
            sex: genderChar,
            dob: dateBirth instanceof Date ? dateBirth.toISOString() : dateBirth,
            talentDescription: talentDesc,
            cv: cvFilename,
            talentExperience: talentExperience,
            talentLevelId: talentLevel,
            projectCompleted: talentData.projectCompleted,
            position : position.map(data => ({
                positionId: data
            })),
            skillSet: skillset.map(data => ({
                skillId: data
            })),
            email: email,
            cellphone: cellphone,
            employeeStatusId: employeeStatus,
            talentAvailability: talentAvailability,
            videoUrl: videoUrl,
        });
        console.log(jsonData);
        console.log(imageFile);
        console.log(documentFile);

        const formData = new FormData();
        formData.append("request", new Blob([jsonData], {type: "application/json"}));
        
        if (imageFile) {
            formData.append("file", imageFile, imageFile.name);
        }
        if (documentFile) {
            formData.append("fileDoc", documentFile, documentFile.name);
        }

        async function updateTalentData() {
            try {
                const response = await editTalent(formData);
                console.log("response", response);
                if (response && response.status === 200) {
                    console.log("response2", response);
                    toast.success("Berhasil edit talent", {
                        icon: null,
                        style: {
                            background: Colors.green,
                            color: Colors.white,
                            fontSize: "0.9rem",
                            fontWeight: "bold",
                            padding: "10px"
                        }
                    });
                    setIsLoading(false);
                }
            } catch(error) {
                console.log("error", error);
            }
        }
        updateTalentData();
    };

    return (
        <Grid item xs={12}>
            <Grid item 
                sx={buttonBackSX}
            >
                <ButtonBackAtom handleNavigate={handleNavigate} testid="button-back-editTalent-body" />
            </Grid>
            <Grid item>
                <Box 
                    sx={addSX}
                >
                    <Grid item
                        display="flex"
                        flexDirection="column"
                        gap={2}
                    >
                        {/* Title */}
                        <Grid item>
                            <TitleAtom title="Edit Talent" testid="title-editTalent-body"/> 
                        </Grid>

                        {/* Talent Photo */}
                        <Grid item>
                            <ImageFormAtom 
                                error = {errors}
                                getInputProps={getInputProps}
                                getRootProps={getRootProps}
                                handleDeleteImage = {handleDeleteImage}
                                isDragActive = {isDragActive}
                                imageFile={imageFile}
                                imagePreview = {imagePreview}
                                label={talentName}
                                talentPhoto={talentPhoto}
                                testid="image-form-editTalent-body"
                            />
                        </Grid>

                        {/* Talent Name */}
                        <Grid item>
                            <TextInputAtom 
                                label = "Nama Talent"
                                error = {errors.talentName}
                                handleChange = {handleChangeTalentName}
                                testid="text-input-talentName-editTalent-body"
                                value = {talentName}
                            />
                        </Grid>
                        
                        {/* Employee Number */}
                        <Grid item>
                            <TextInputAtom 
                                label = "Nomor Induk Pegawai"
                                error = {errors.employeeNumber}
                                handleChange = {handleChangeEmployeeNumber}
                                testid="text-input-employeeNumber-editTalent-body"
                                value = {employeeNumber}
                            />
                        </Grid>

                        {/* Jenis Kelamin & Tanggal Lahir */}
                        <Grid item
                            display="flex"
                            flexDirection={{ xs: "column", md: "row"}}
                        >
                            <Grid item xs={6}>
                                <RadioBoxAtom 
                                    error={errors.gender} 
                                    handleChangeGender={handleChangeGender}
                                    testid="radio-box-editTalent-body"
                                    value={gender}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DateAtom 
                                    setValue={setDateBirth}
                                    value={dateBirth}
                                />
                            </Grid>
                        </Grid>

                        {/* Talent Description */}
                        <Grid item>
                            <TextAreaAtom 
                                error = {errors.talentDesc} 
                                handleChange = {handleChangeTalentDesc}
                                label = "Deskripsi Talent"
                                value = {talentDesc}
                            />
                        </Grid>

                        {/* CV */}
                        <Grid item xs={12} md={4}>
                            <DocFormAtom 
                                error = {errors}
                                getInputFile = {getInputFile}
                                getRootFile = {getRootFile}
                                documentPreview  = {cvFilename}
                                label={cvFilename}
                                isDragFileActive = {isDragFileActive}
                                handleDeleteDocument = {handleDeleteDocument}
                            />
                        </Grid>

                        {/* Talent Experience And Level */}
                        <Grid item
                            display="flex"
                            flexDirection={{ xs: "column", md: "row"}}
                            gap={3}
                        >
                            <Grid item md={6}>
                                <TextInputAtom
                                    label = "Pengalaman"
                                    error = {errors.experience}
                                    handleChange = {handleChangeTalentExperience}
                                    value = {talentExperience}
                                />
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                                <SelectAtom 
                                    label="Level"
                                    data={talentLevelData}
                                    error={errors.level}
                                    isForm={true}
                                    handleChange={(event) => handleChangeValue(event, setTalentLevel)}
                                    value={talentLevel}
                                />
                            </Grid>
                        </Grid>

                        {/* Position */}
                        <Grid item>
                            <MultipleSelectAtom 
                                data = {positionData}
                                error = {errors.position}
                                handleChange = {handleChangePosition}
                                label = "Posisi" 
                                value = {position}
                            />
                        </Grid>

                        {/* Skill Set */}
                        <Grid item>
                            <MultipleSelectAtom 
                                data = {skillsetData}
                                error = {errors.skillset}
                                handleChange = {handleChangeSkillset}
                                label = "Skill Set" 
                                value = {skillset}
                            />
                        </Grid>

                        {/* Email */}
                        <Grid item>
                            <TextInputAtom 
                                label = "E-mail"
                                error = {errors.email}
                                handleChange = {handleChangeEmail} 
                                value = {email}
                            />
                        </Grid>

                        {/* Cellphone */}
                        <Grid item>
                            <TextInputAtom 
                                label = "No. Hp/Whatsapp"
                                error = {errors.cellphone}
                                handleChange = {handleChangeCellphone}
                                value = {cellphone}
                            />
                        </Grid>

                        {/* Employee Status */}
                        <Grid item>
                            <SelectAtom 
                                label="Status Kepegawaian"
                                data={employeeStatusData}
                                error={errors.level}
                                isForm={true}
                                handleChange={handleChangeEmployeeStatus}
                                value={employeeStatus}
                            />
                        </Grid>

                        {/* Talent Availability */}
                        <Grid item>
                            <SelectAtom 
                                label="Ketersediaan Talent"
                                data={talentAvailabilityList}
                                error={errors.level}
                                isForm={true}
                                handleChange={handleChangeTalentAvailable}
                                value={talentAvailability}
                            />
                        </Grid>

                        {/* VideoUrl */}
                        <Grid item>
                            <TextInputAtom 
                                label = "Biografi Video (Opsional)" 
                                error = {errors.videoUrl}
                                handleChange = {handleChangeVideoUrl}
                                value = {videoUrl}
                            />
                        </Grid>

                        {/* Button Action */}
                        <Grid item>
                            <Grid item
                                display="flex"
                                justifyContent="flex-end"
                                gap={2}
                            >
                                <Grid item>
                                    <ButtonFormAtom 
                                        handleClickOpen={handleClickOpen}
                                        handleClose={handleClose}
                                        handleNavigate={handleNavigate}
                                        label="Batal"
                                        open={open}
                                        testid="button-cancel-form"
                                    />
                                </Grid>
                                <Grid item>
                                    <ButtonFormAtom 
                                        handleClickOpen={handleSubmit}
                                        label="Simpan"
                                        testid="button-save-form"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}