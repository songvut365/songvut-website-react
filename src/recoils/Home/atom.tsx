import { atom } from "recoil";
import { EducationModel, InformationModel, ProjectModel, SkillModel, WorkModel } from "./model";

export const informationState = atom({
    key: "informationState",
    default: {} as InformationModel,
});

export const educationState = atom({
    key: "educationState",
    default: [] as EducationModel[],
});

export const projectState = atom({
    key: "projectState",
    default: [] as ProjectModel[]
});

export const skillState = atom({
    key: "skillState",
    default: [] as SkillModel[]
});

export const workState = atom({
    key: "workState",
    default: [] as WorkModel[]
});