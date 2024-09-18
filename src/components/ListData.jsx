export const sortByList = [
    { id: "talentLevel.talentLevelName,asc", name: "Level A-Z" },
    { id: "talentLevel.talentLevelName,desc", name: "Level Z-A" },
    { id: "experience,asc", name: "Pengalaman A-Z" },
    { id: "experience,desc", name: "Pengalaman Z-A" },
    { id: "talentStatus.talentStatusName,asc", name: "Status A-Z" },
    { id: "talentStatus.talentStatusName,desc", name: "Status Z-A" },
    { id: "employeeStatus.employeeStatusName,asc", name: "Kepegawaian A-Z" },
    { id: "employeeStatus.employeeStatusName,desc", name: "Kepegawaian Z-A" },
];

export const experienceList = [
    { id: 1, name: "0-1 Tahun"},
    { id: 2, name: "2-4 Tahun"},
    { id: 3, name: "5+ Tahun"},
];

export const talentAvailabilityList = [
    {id: "true", name: "Available"},
    {id: "false", name: "Non Available"},
]

export const filterList = [
    "Talent",
    "Level",
    "Pengalaman",
    "Status",
    "Kepegawaian",
    "Action",
];

export const filterApprovalList = [
    "Instansi",
    "Tanggal Request",
    "Talent yang dipilih",
    "Status",
    "Action ",
]


// Multiple Select Component
const positionList2 = [
    "Web Developer",
    "Scrum Master",
    "Analyst",
    "Web Front-End Devleper",
    "Web Back-End Devleper",
    "Quality Assurance",
    "UI/UX Designer",
    "Project Manager",
    "Android Developer",
    "Desktop Developer",
    "Video Game Developer",
    "Graphics Programmer",
    "IOS Developer",
    "Software Engineer",
];
const skillsetList2 = [
    "C++",
    "Golang",
    "Python",
    "Ruby",
    "Spring Boot",
    "ReactJS",
    "Java",
    ".NET",
    "C#",
    "C",
    "PHP",
    "Angular",
    "Laravel",
    "Selenium",
    "Swift",
    "Ruby On Rails",
    "Trello",
    "Katalon",
    "CodeIgniter",
    "Figma",
];

export const searchBoxList = [
    {id: 1, name: "Instansi"},
    {id: 2, name: "Talent Yang Dipilih"},
];

export const statusFilterList = [
    {id: "On Progress", name: "On Progress"},
    {id: "Approved", name: "Approved"},
    {id: "Rejected", name: "Rejected"},
];

export const sortByApprovalList = [
    {id: "talentWishlist.client.agencyName,asc", name: "Instansi A-Z"},
    {id: "talentWishlist.client.agencyName,desc", name: "Instansi Z-A"},
    {id: "requestDate,asc", name: "Tanggal Request A-Z"},
    {id: "requestDate,desc", name: "Tanggal Request Z-A"},
    {id: "talentWishlist.talent.talentName,asc", name: "Talent A-Z"},
    {id: "talentWishlist.talent.talentName,desc", name: "Talent Z-A"},
    {id: "talentRequestStatus.talentRequestStatusName,asc", name: "Status A-Z"},
    {id: "talentRequestStatus.talentRequestStatusName,desc", name: "Status Z-A"},
];



export const positionList = [
    {positionId: "1", positionName: "Web Developer"},
    {positionId: "2", positionName: "Scrum Master"},
    {positionId: "3", positionName: "Analyst"},
    {positionId: 4, positionName: "Web Front-End Devleper"},
    {positionId: 5, positionName: "Web Back-End Devleper"},
    {positionId: 6, positionName: "Quality Assurance"},
    {positionId: 7, positionName: "UI/UX Designer"},
    {positionId: 8, positionName: "Project Manager"},
    {positionId: 9, positionName: "Android Developer"},
    {positionId: 10, positionName: "Desktop Developer"},
    {positionId: 11, positionName: "Video Game Developer"},
    {positionId: 12, positionName: "Graphics Programmer"},
    {positionId: 13, positionName: "IOS Developer"},
    {positionId: 14, positionName: "Software Engineer"},
];

export const skillsetList = [
    {skillId: 1, skillName: "C++"},
    {skillId: 2, skillName: "Golang"},
    {skillId: 3, skillName: "Python"},
    {skillId: 4, skillName: "Ruby"},
    {skillId: 5, skillName: "Spring Boot"},
    {skillId: 6, skillName: "ReactJS"},
    {skillId: 7, skillName: "Java"},
    {skillId: 8, skillName: ".NET"},
    {skillId: 9, skillName: "C#"},
    {skillId: 10, skillName: "C"},
    {skillId: 11, skillName: "PHP"},
    {skillId: 12, skillName: "Angular"},
    {skillId: 13, skillName: "Laravel"},
    {skillId: 14, skillName: "Selenium"},
    {skillId: 15, skillName: "Swift"},
    {skillId: 16, skillName: "Ruby On Rails"},
    {skillId: 17, skillName: "Trello"},
    {skillId: 18, skillName: "Katalon"},
    {skillId: 19, skillName: "CodeIgniter"},
    {skillId: 20, skillName: "Figma"},
];

export const levelDataList = [
    {talentLevelId: 1, talentLevelName: "Senior"},
    {talentLevelId: 2, talentLevelName: "Middle"},
    {talentLevelId: 3, talentLevelName: "Junior"},
];

export const employeeStatusDataList = [
    {employeeStatusId: 1, employeeStatusName: "Active"},
    {employeeStatusId: 2, employeeStatusName: "Not Active"},
];



export const dataTalent = [
    {imageUrl: "nasigoreng.png", skillSet: skillsetList, position: positionList}
];

export const data = [
    {agencyName: "Nemesis", talentRequestId: 1},
];

export const talentApprovalData = [{
    talentRequestId: "355509ce-a3a2-4010-a7bc-03c7d3ddceb8",
    agencyName: "asdsa",
    requestDate: 1701709200000,
    talentName: "Aaron Aabtan",
    approvalStatus: "Rejected",
}];