import { Grid } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { addTalent } from "../services/apis";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ButtonBackAtom from "./Atom/ButtonBackAtom";
import ImageFormAtom from "./Atom/ImageFormAtom";
import TextInputAtom from "./Atom/TextInputAtom";
import SelectAtom from "./Atom/SelectAtom";
import { talentAvailabilityList } from "./ListData";
import TextAreaAtom from "./Atom/TextAreaAtom";
import { addSX, buttonBackSX, columnRowSX, flexColumnSX, rowEndSX } from "./WrapperJSX";
import TitleAtom from "./Atom/TitleAtom";
import DateAtom from "./Atom/DateAtom";
import MultipleSelectAtom from "./Atom/MultipleSelectAtom";
import DocFormAtom from "./Atom/DocFormAtom";
import { Colors } from "./Atom/Colors";
import ButtonFormAtom from "./Atom/ButtonFormAtom";
import RadioBoxAtom from "./Atom/RadioBoxAtom";

export default function TambahTalentCard({
    employeeStatusData,
    levelData,
    positionData,
    setIsLoading,
    skillsetData,
}) {
    const navigate = useNavigate();

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

    

    // Image Component
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        const file = acceptedFiles[0];

        if (file && file.size <= 1048576 && ["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
            setTalentPhoto(file.name);
            setErrors({
                ...errors,
                imageFile: "",
            });
        } else {
            setErrors({
                ...errors,
                imageFile: "Format file harus berupa .jpg/ .jpeg/.png",
            });
        }
    }, [errors]);

    //Document Component
    const onDropFile = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        const file = acceptedFiles[0];

        if (file && file.size <= 1048576 && ["application/pdf", "text/plain"].includes(file.type)) {
            setDocumentFile(file);
            setDocumentPreview(URL.createObjectURL(file));
            setCvFilename(file.name);
            setErrors({
                ...errors,
                cvFilename: "",
            });
        } else {
            setErrors({
                ...errors,
                cvFilename: "Format file harus berupa .docx/ .pdf",
            });
        }
    });

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {"image/jpeg": [], "image/png": [], "image/jpg": [],}, });

    const {
        getRootProps: getRootFile,
        getInputProps: getInputFile,
        isDragActive : isDragFileActive
    } = useDropzone({ onDrop: onDropFile,  accept: {"application/pdf": [], "text/plain": [],},});

    const [documentFile, setDocumentFile] = useState([]);
    const [documentPreview, setDocumentPreview] = useState(null);
    const [imageFile, setImageFile] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
    
    
  
    const [cellphone, setCellphone] = useState("");
    const [cvFilename, setCvFilename] = useState("");
    const [dateBirth, setDateBirth] = useState();
    const [email, setEmail] = useState("");
    const [employeeNumber, setEmployeeNumber] = useState("");
    const [employeeStatus, setEmployeeStatus] = useState("");
    const [gender, setGender] = useState("");
    const genderChar = gender.charAt(0);
    const [position, setPosition] = useState([]);
    const [projectCompleted, setProjectCompleted] = useState(0);
    const [skillset, setSkillset] = useState([]);
    const [talentAvailability, setTalentAvailablility] = useState("");
    const [talentDesc, setTalentDesc] = useState("");
    const [talentExperience, setTalentExperience] = useState("");
    const [talentLevel, setTalentLevel] = useState();
    const [talentName, setTalentName] = useState("");
    const [talentPhoto, setTalentPhoto] = useState("");
    const [talentStatus, setTalentStatus] = useState("feee9f36-a978-455d-b324-9d360421d068")
    const [videoUrl, setVideoUrl] = useState("");
 

    const handleChangeCvFilename = (event) => {
        const value = event.target.value;
        setCvFilename(value);

        if(!value) {
            setErrors({
                ...errors,
                cvFilename: "Kolom ini tidak boleh kosong",
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

    const handleChangeDateBirth = (event) => {
        const value = event.target.value;
        setDateBirth(value);
        // if (!value) {
        //     setErorrs({
        //         ...errors,
        //         dateBirth: emptyState,
        //     })
        // } else {
        //     setErorrs({
        //         ...errors,
        //         dateBirth: "",
        //     })

        // }
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

    const handleChangeEmployeeStatus = (event) => {
        const value = event.target.value;
        setEmployeeStatus(value);

        if(!value) {
            setErrors({
                ...errors,
                employeeStatus: "Kolom ini tidak boleh kosong",
            })
        } else {
            setErrors({
                ...errors,
                employeeStatus: "",
            })
            
        }
    };

    const handleChangeExperience = (event) => {
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

    const handleChangeGender = (event) => {
        const value = event.target.value;
        if(value === "Laki-laki") {
            setGender('L');
        } else {
            setGender('P');
        }
        if (!value) {
            setErrors({
                ...errors,
                gender : emptyState,
            })
        } else {
            setErrors({
                ...errors,
                gender : "",
            })

        }
    };

    const handleChangeLevel = (event) => {
        const value = event.target.value;
        setTalentLevel(value);

        if (!value) {
            setErrors({
                ...errors,
                level: "Kolom ini tidak boleh kosong",
            });
        } else {
            setErrors({
                ...errors,
                level: "",
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
 
    const handleChangeTalentAvailability = (event) => {
        const value = event.target.value;
        setTalentAvailablility(value);

        if(!value) {
            setErrors({
                ...errors,
                talentAvailability: "Kolom ini tidak boleh kosong",
            })
        } else {
            setErrors({
                ...errors,
                talentAvailability: "",
            })
            
        }
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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteDocument = () => {
        setDocumentFile(null);
        setDocumentPreview(null);
        setCvFilename("");
    };

    const handleDeleteImage = () => {
        setImageFile(null);
        setImagePreview(null);
        setTalentPhoto("");
    };

    const handleUploadDocument = (event) => {
        const file = event.target.files[0];
        if(file && file.size <= 1048576 && ["application/pdf"].includes(file.type)
        ) {
            setDocumentFile(file);
            setDocumentPreview(URL.createObjectURL(file));
        } else  {
            setErrors({
                ...errors,
                cvFilename: "Kolom ini tidak boleh kosong",
            });
        }
    };

    const handleUploadImage = (event) => {
        const file = event.target.files[0];
        if  (file && file.size <= 1048576 && ["image/jpeg", "image/png", "image/jpg"].includes(file.type)
        ) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
            setErrors({
                ...errors,
                imageFile: "",
            });
        } else {
            setErrors({
                ...errors,
                imageFile: "Tidak Boleh",
            });
        }
    };
  
    const handleNavigate = () => {
        navigate("/daftar-talent");
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
        setIsLoading(true);

        const jsonPart = JSON.stringify({
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
            projectCompleted: 0,
            position: position.map(data => ({
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
        

        const formData = new FormData();
        formData.append("request", new Blob([jsonPart], {type: "application/json",}));
        formData.append("file", imageFile);
        formData.append("fileDoc", documentFile);

        async function saveDataTalent() {
            try {
                const response = await addTalent(formData);
                // console.log(response);
                if (response && response.status === 200) {
                    toast.success("Berhasil tambah talent", {
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
                console.log(error);
            }
        }
        saveDataTalent();

    };

    return (
        <Grid item xs={12}>
            <Grid item sx={buttonBackSX}>
                <ButtonBackAtom handleNavigate={handleNavigate} testid="button-back-addTalent-body" />
            </Grid>
            <Grid item sx={{...flexColumnSX, ...addSX}} gap={2}>
                {/* Title */}
                <Grid item>
                    <TitleAtom title="Tambah Talent" testid="title-addTalent-body" />
                </Grid>

                {/* Foto Talent */}
                <Grid item>
                    <ImageFormAtom 
                        error = {errors}
                        getInputProps={getInputProps}
                        getRootProps={getRootProps}
                        handleDeleteImage = {handleDeleteImage}
                        imagePreview = {imagePreview}
                        isDragActive = {isDragActive}
                        testid="image-form-addTalent-body"
                    />
                </Grid>

                {/* Nama Talent */}
                <Grid item>
                    <TextInputAtom 
                        label = "Nama Talent"
                        error = {errors.talentName}
                        handleChange = {handleChangeTalentName}
                        value = {talentName}
                        testid="text-input-talentName-addTalent-body"
                    />
                </Grid>

                {/* NIP */}
                <Grid item>
                    <TextInputAtom 
                        label = "Nomor Induk Pegawai"
                        error = {errors.employeeNumber}
                        handleChange = {handleChangeEmployeeNumber}
                        value = {employeeNumber}
                        testid="text-input-employeeNumber-addTalent-body"
                    />
                </Grid>

                {/* Jenis Kelamin & Tanggal Lahir */}
                <Grid item sx={columnRowSX}>

                    {/* FORM Radio Gender */}
                    <Grid item xs={6}>
                        <RadioBoxAtom 
                            error={errors.gender} 
                            handleChangeGender={handleChangeGender}
                            testid="radio-box-addTalent-body"
                        />
                    </Grid>

                    {/* FORM Date Tanggal Lahir */}
                    <Grid item xs={12} md={6}>
                        <DateAtom 
                            error= {errors.dateBirth}
                            setValue={setDateBirth}
                            value={dateBirth}
                            testid="date-addTalent-body"
                        />
                    </Grid>
                </Grid>

                {/* FORM TextArea Talent Description */}
                <Grid item>
                    <TextAreaAtom 
                        error = {errors.talentDesc} 
                        handleChange = {handleChangeTalentDesc}
                        label = "Deskripsi Talent"
                        value = {talentDesc}
                        testid="text-input-talentDesc-addTalent-body"
                    />
                </Grid>
                
                {/* FORM Upload CV */}
                <Grid item xs={12}>
                    <DocFormAtom 
                        error = {errors}
                        documentPreview  = {documentPreview}
                        getInputFile = {getInputFile}
                        getRootFile = {getRootFile}
                        handleDeleteDocument = {handleDeleteDocument}
                        isDragFileActive = {isDragFileActive}
                        label={cvFilename}
                        testid="doc-form-addTalent-body"
                    />
                </Grid>

                {/* FORM Text Input Pengalaman AND Select Level */}
                <Grid item sx={columnRowSX} gap={2}>
                    {/* FORM Text Input Pengalaman */}
                    <Grid item xs={12} md={6}>
                        <TextInputAtom
                            label = "Pengalaman"
                            error = {errors.experience}
                            handleChange = {handleChangeExperience}
                            testid="text-input-experience-addTalent-body"
                            value = {talentExperience}
                        />
                    </Grid>

                    {/* FORM Select Level */}
                    <Grid item xs={12} md={6}>
                        <SelectAtom 
                            label="Level"
                            data={levelData}
                            error={errors.level}
                            isForm={true}
                            handleChange={handleChangeLevel}
                            testid="select-level-addTalent-body"
                            value={talentLevel}
                        />
                    </Grid>
                </Grid>

                {/* FORM Multiple Select Position */}
                <Grid item>
                    <MultipleSelectAtom 
                        data = {positionData}
                        error = {errors.position}
                        handleChange = {handleChangePosition}
                        label = "Posisi" 
                        testid="multiple-select-position-addTalent-body"
                        value = {position}
                    />
                </Grid>

                {/* FORM Multiple Select Skillset */}
                <Grid item>
                    <MultipleSelectAtom 
                        data = {skillsetData}
                        error = {errors.skillset}
                        handleChange = {handleChangeSkillset}
                        label = "Skill Set" 
                        testid="multiple-select-skillset-addTalent-body"
                        value = {skillset}
                    />
                </Grid>

                {/* FORM Text Input Email */}
                <Grid item>
                    <TextInputAtom 
                        label = "E-mail"
                        error = {errors.email}
                        handleChange = {handleChangeEmail} 
                        testid="text-input-email-addTalent-body"
                        value = {email}
                    />
                </Grid>

                {/* FORM Text Input Cellphone */}
                <Grid item>
                    <TextInputAtom 
                        label = "No. Hp/Whatsapp"
                        error = {errors.cellphone}
                        handleChange = {handleChangeCellphone}
                        testid="text-input-cellphone-addTalent-body"
                        value = {cellphone}
                    />
                </Grid>

                {/* FORM Select Employee Status */}
                <Grid item>
                    <SelectAtom 
                        label="Status Kepegawaian"
                        data={employeeStatusData}
                        error={errors.employeeStatus}
                        isForm={true}
                        handleChange={handleChangeEmployeeStatus}
                        testid="select-employeeStatus-addTalent-body"
                        value={employeeStatus}
                    />
                </Grid>

                {/* FORM Select Talent Availability */}
                <Grid item>
                    <SelectAtom 
                        label="Ketersediaan Talent"
                        data={talentAvailabilityList}
                        error={errors.talentAvailability}
                        isForm={true}
                        handleChange={handleChangeTalentAvailability}
                        testid="select-talentAvailability-addTalent-body"
                        value={talentAvailability}
                    />
                </Grid>

                {/* FORM Text Input VideoUrl */}
                <Grid item>
                    <TextInputAtom 
                        label = "Biografi Video (Opsional)" 
                        error = {errors.videoUrl}
                        handleChange = {handleChangeVideoUrl}
                        testid="text-input-videoUrl-addTalent-body"
                        value = {videoUrl}
                    />
                </Grid>

                {/* FORM Button Batal AND Simpan */}
                <Grid item sx={rowEndSX} gap={2}>
                    {/* FORM Button Batal */}
                    <Grid item>
                        <ButtonFormAtom 
                            handleClickOpen={handleClickOpen}
                            handleClose={handleClose}
                            handleNavigate={handleNavigate}
                            label="Batal"
                            open={open}
                            testid="button-cancel-form-addTalent-body"
                        />
                    </Grid>
                    {/* FORM Button Simpan */}
                    <Grid item>
                        <ButtonFormAtom 
                            handleClickOpen={handleSubmit}
                            label="Simpan"
                            testid="button-save-form-addTalent-body"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};