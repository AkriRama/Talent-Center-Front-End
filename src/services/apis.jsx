import axios from "axios";
import instance from "./axiosConfig";

const baseUrl = import.meta.env.VITE_API_URL;
const apiGetTalentList= import.meta.env.VITE_API_GETTALENTLIST;
const apiGetTalentApproval= import.meta.env.VITE_API_GETTALENTAPPROVAL;
const apiGetLevelList= import.meta.env.VITE_API_LEVELLIST;
const apiGetEmployeeStatusList= import.meta.env.VITE_API_EMPLOYEESTATUSLIST;
const apiGetPositionList= import.meta.env.VITE_API_POSITIONLIST;
const apiGetSkillsetList= import.meta.env.VITE_API_SKILLSETLIST;
const apiGetTalentStatusList= import.meta.env.VITE_API_TALENTSTATUS;

const buildUrl = (base, params) => {
    let url = base + "?";
    for (const key in params) {
        if (params[key]) {
            url += `${key}=${params[key]}&`;
        }
    }
    url = url.slice(0, -1);
    return url;
}

export const getTalentList = async (
    pageNumber,
    pageSize,
    sortBy,
    talentName,
    minTalentExperience,
    maxTalentExperience,
    talentLevel,
    talentStatus,
    employeeStatus,
) => {
    
    const apiUrl = buildUrl(apiGetTalentList, {
        pageNumber,
        pageSize,
        sortBy,
        talentName,
        minTalentExperience,
        maxTalentExperience,
        talentLevel,
        talentStatus,
        employeeStatus,
    });

    try {
        const response = await instance
            .get(apiUrl);
            console.log("response", response);
            return response;
    } catch(error) {
        console.log("Error getting data talent", error);
        throw error;
    }
}

export const getTalentById = async (talentId) => {
    try {
        const response = await instance
            .get(`${apiGetTalentList}/${talentId}`);
        console.log("talent Data : ", response);
        return response;
    } catch(error) {
        console.log("error : ", error);
        throw error;
    }
}

export const addTalent = async(formData) => {
    try {
        const response = await instance
            .post("/talent-management/talents", formData);
        return response;
    } catch(error) {
        console.log("error", error);
        throw error;
    }
}

export const getLevel = async() => {
    try {
        const response = await instance
            .get(apiGetLevelList);
        return response;
    } catch(error) {
        console.log("error", error);
        throw error;
    }
}

export const getEmployeeStatus = async() => {
    try {
        const response = await instance
            .get(apiGetEmployeeStatusList);
        return response;
    } catch(error) {
        console.log("error", error);
        throw error;
    }
}

export const getPosition = async() => {
    try {
        const response = await instance
            .get(apiGetPositionList);
        return response;
    } catch(error) {
        console.log("error", error);
        throw error;
    }
} 

export const getSkillset = async() => {
    try {
        const response = await instance
            .get(apiGetSkillsetList);
        return response;
    } catch(error) {
        console.log("error", error);
        throw error;
    }
}

export const editTalent = async(formData) => {
    try {
        const response = await instance
            .put("/talent-management/talents", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              });
            return response;
    } catch(error) {
        console.log("error", error);
        throw error;
    }
}

export const getTalentApproval = async (
    pageNumber,
    pageSize,
    sortBy,
    agencyName,
    talentName,
    approvalStatus,
    startRequestDate,
    endRequestDate,
) => {

    const apiUrl = buildUrl(apiGetTalentApproval, {
        pageNumber,
        pageSize,
        sortBy,
        agencyName,
        talentName,
        approvalStatus,
        startRequestDate,
        endRequestDate,
    });

    try {
        const response = await instance
            .get(apiUrl);
        console.log("response : ", response);
        return response;
    } catch(error) {
        console.log("error", error);
        throw error;
    }
}

export const putApproveRejectTalentApproval = async(
    talentRequestId,
    action,
    rejectReason,
) => {
    try {
        const response = await instance
            .put(apiGetTalentApproval, {
                talentRequestId: talentRequestId, 
                action: action, 
                rejectReason: rejectReason
            });
        return response;
    } catch(error) {
        console.log("error", error);
        throw error;
    }
}

//TAMBAHAN
export const getTalentStatus = async() => {
    try {
        const response = await instance
            .get(apiGetTalentStatusList);
        return response;
    } catch(error) {
        console.log("error", error);
        throw error;
    }
}
