export interface InformationModel {
    image: string;
    name: string;
    position: string;
    summary: string;
    phone: string;
    email: string;
    address: string;
    githubLink: string;
    linkedInLink: string;
    facebookLink: string;
    instagramLink: string;
};


export interface EducationModel {
    name: string;
    degree: string;
    major: string;
    date: string;
    gpa: number;
};

export interface ProjectModel {
    cover: string;
    name: string;
    detail: string;
    link: string;
};

export interface SkillModel {
    name: string;
    details: SkillDetailModel[];
};
  
export interface SkillDetailModel  {
    name: string;
    image: string;
    color: string;
    short: string;
    level: string;
};

export interface WorkModel {
    name: string;
    position: string;
    address: string;
    date: string;
    description: string[];
};