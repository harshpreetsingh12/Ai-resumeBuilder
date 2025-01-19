import { StateCreator } from "zustand";


export interface ResumeSkillState {
    skillsState: string[];
    updateSkillsData: (skills: string[]) => void;
}

export const skillsSlice: StateCreator<ResumeSkillState> = (set) => ({
    skillsState: testingData,
    updateSkillsData: (skills) =>
        set((state) => ({
            ...state,
            skillsState: skills, 
        })),
});

const testingData=[
    "JavaScript ES6",
    "TypeScript",
    "React.js",
    "React Native",
    "Redux",
    "HTML 5",
    "CSS 3",
    "Bootstrap",
    "Tailwind CSS",
    "Material UI",
    "Github",
    "JSON Web Token",
    "RESTful APIs",
    "NPM",
    "Node.js",
]